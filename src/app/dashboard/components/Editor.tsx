"use client";

import dynamic from "next/dynamic";
import { useState, useEffect } from "react";
import { getFromFirestore, saveToFirestore } from "@/lib/firebase";
import { generateCodeWithAI } from "@/lib/openai";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

export function Editor() {
    const [content, setContent] = useState("");

    useEffect(() => {
        const unsubscribe = getFromFirestore(setContent);
        return () => unsubscribe();
    }, []);

    const handleSave = () => {
        saveToFirestore(content);
    };

    const handleAIConvert = async () => {
        const generatedCode = await generateCodeWithAI(content);
        setContent(content + "\n\n" + generatedCode);
    };

    return (
        <div className="p-4 flex flex-col h-full">
            <ReactQuill value={content} onChange={setContent} />
            <div className="flex justify-between mt-4">
                <button onClick={handleSave} className="btn">Salvar</button>
                <button onClick={handleAIConvert} className="btn">Converter com IA</button>
            </div>
        </div>
    );
}
