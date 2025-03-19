import React, { useState } from "react";
import { generateCodeWithAI } from "@/lib/openai";

const AIConverter = () => {
    const [inputText, setInputText] = useState("");
    const [generatedCode, setGeneratedCode] = useState("");

    const handleConvert = async () => {
        const result = await generateCodeWithAI(inputText);
        setGeneratedCode(result);
    };

    return (
        <div>
            <textarea
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder="Digite um comentário ou descrição..."
                style={{ width: "100%", height: "100px", fontSize: "16px" }}
            />
            <button onClick={handleConvert}>Converter para Código</button>
            <pre>{generatedCode}</pre>
        </div>
    );
};

export default AIConverter;
