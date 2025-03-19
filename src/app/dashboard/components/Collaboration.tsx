import React, { useEffect, useState } from "react";
import { getFromFirestore, saveToFirestore } from "@/lib/firebase";

const Collaboration = () => {
    const [content, setContent] = useState("");

    useEffect(() => {
        const unsubscribe = getFromFirestore((newContent) => {
            setContent(newContent);
        });

        return () => unsubscribe();
    }, []);

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setContent(e.target.value);
        saveToFirestore(e.target.value);
    };

    return (
        <textarea
            value={content}
            onChange={handleChange}
            style={{ width: "100%", height: "200px", fontSize: "16px" }}
            placeholder="Colaboração em tempo real..."
        />
    );
};

export default Collaboration;
