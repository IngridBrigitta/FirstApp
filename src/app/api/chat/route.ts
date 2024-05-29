require('dotenv').config();
console.log('GROQ_API_KEY:', process.env.GROQ_API_KEY);

const Groq = require("groq-sdk");

const groq = new Groq({
    apiKey: process.env.GROQ_API_KEY
});

import { ChatOpenAI } from "@langchain/openai";
import { OpenAIStream, StreamingTextResponse, LangChainStream } from "ai";
import { ChatCompletionMessageParam } from "ai/prompts";
import { ChatPromptTemplate } from "@langchain/core/prompts";

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const messages = body.messages;

        /*const currentMessageContent = messages[messages.length - 1].content;

        const {stream, handlers} = LangChainStream();

        const chatModel = new ChatOpenAI({
            model: "llama3-70b-8192",
            streaming: true,
            callbacks: [handlers]
        })

        const prompt = ChatPromptTemplate.fromMessages([
            [
                "system",
                "You are a sarcasm bot. You answer all user questions is a sarcastic way."
            ],
            [
                "user", "{input}"
            ]
        ])

        const chain = prompt.pipe(chatModel);

        chain.invoke({
            input: currentMessageContent
        })*/

        const systemMessage: ChatCompletionMessageParam = {
            role: "system",
            content: "You are a sarcasm bot. You answer all user questions is a sarcastic way."
        }

        const response = await groq.chat.completions.create({
            model: "llama3-70b-8192",
            stream: true,
            messages: [systemMessage, ...messages]
        })

        const stream = OpenAIStream(response);

        return new StreamingTextResponse(stream);
    } catch (error) {
        console.error(error);
        return Response.json({error: "Internal server error"}, { status: 500 });
    }
}