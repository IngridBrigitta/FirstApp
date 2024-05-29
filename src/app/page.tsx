import Image from "next/image";
import { Metadata } from "next";
import { H1 } from "../components/ui/H1";
import { H2 } from "../components/ui/H2";
import me from "../assets/me.png";
import { Bot } from "lucide-react";

export const metadata: Metadata = {
  title: "Ivacson Ingrid - My Smart Portofolio"
}

export default function Home() {
  return (
    <section className="space-y-16 bg-[url('/background.png')] bg-cover bg-center bg-no-repeat px-1 py-8">
      <section className="grid grid-cols-1 items-center gap-8 sm:grid-cols-2">
        <div className="space-y-3">
          <H1 className="text-center sm:text-start">Hello, I am Ingrid Ivacson!</H1>
          <p className="text-center sm:text-start">
            I am a teacher from Romania who teaches computer science to students in grades 5 to 8. I also teach physics and chemistry.
          </p>
        </div>
        <div className="flex justify-center">
          <Image src={me} alt="A photo of me" height={300} width={300} className="rounded-full aspect-square border-2 object-cover shadow-md dark:border-foreground"/>
        </div>
      </section>
      <section className="space-y-2 text-center">
        <H2>Ask the chatbot anything about me</H2>
        <p>
          Click the little <Bot className="inline pb-1" /> icon in the top bar to activate the Ai chat. Ask him anything about me, and he will answer, or provide a link where you can find the answer to your question.
        </p>
      </section>
    </section>
  );
}
