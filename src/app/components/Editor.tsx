import React, { useState, useEffect, useCallback } from "react";
import { getFirestore, doc, onSnapshot } from "firebase/firestore";
import { OpenAI } from "openai";

const Editor = () => {
    const [editorContent, setEditorContent] = useState("");
    const [isEditing, setIsEditing] = useState(false);
    const db = getFirestore();

    const getFromFirestore = useCallback(() => {
        const docRef = doc(db, "documents", "doc1");
        const unsubscribe = onSnapshot(docRef, (doc) => {
            if (doc.exists()) {
                setEditorContent(doc.data().content || "");
            }
        });

        return unsubscribe; //! Para parar a escuta quando o componente for desmontado
    }, [db]);

    useEffect(() => {
        const unsubscribe = getFromFirestore();
        return () => {
            unsubscribe(); //! Limpar a escuta ao desmontar o componente
        };
    }, [getFromFirestore]);

    const handleAskOpenAI = async () => {
        try {
            const openai = new OpenAI({
                apiKey: "your-openai-api-key-here",
            });

            const prompt = `Please summarize the following content:\n${editorContent}`;
            const response = await openai.completions.create({
                model: "text-davinci-003",
                prompt,
                max_tokens: 150,
            });

            const summary = response.choices[0].text.trim();
            setEditorContent(summary);
        } catch (error) {
            console.error("Error with OpenAI API:", error);
        }
    };

    return (
        <div>
            <h1>Editor</h1>
            <textarea
                value={editorContent}
                onChange={(e) => setEditorContent(e.target.value)}
                disabled={!isEditing}
                rows={10}
                cols={50}
            />
            <button onClick={() => setIsEditing(!isEditing)}>
                {isEditing ? "Stop Editing" : "Start Editing"}
            </button>
            <button onClick={handleAskOpenAI}>Ask OpenAI for Summary</button>
        </div>
    );
};

export default Editor;
