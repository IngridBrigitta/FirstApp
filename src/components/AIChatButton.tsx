"use client";

import { Bot } from "lucide-react";
import { useState } from "react";
import AIChatBox from "./AIChatBot";

export default function AIChatButton() {
    const [chatBoxOpen, setChatBoxOpen] = useState(false);

    return (
        <>
            <button onClick={() => setChatBoxOpen(true)}>
                <Bot size={24} />
            </button>
            <AIChatBox open={chatBoxOpen} onClose={() => setChatBoxOpen(false)} />
        </>
    )
}