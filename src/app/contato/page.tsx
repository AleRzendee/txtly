import { useState } from "react";

export default function Contato() {
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [assunto, setAssunto] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const response = await fetch("/api/contato", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ nome, email, assunto }),
        });

        const data = await response.json();

        if (response.ok) {
            setMessage("Mensagem enviada com sucesso!");
        } else {
            setMessage(data.error || "Erro ao tentar enviar a mensagem.");
        }
    };

    return (
        <div className="p-6">
            <h1 className="text-2xl font-semibold">Formulário de Contato</h1>
            <form onSubmit={handleSubmit} className="mt-4">
                <div>
                    <label htmlFor="nome" className="block">Nome:</label>
                    <input
                        type="text"
                        id="nome"
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                        className="w-full p-2 mt-1 border border-gray-300 rounded"
                    />
                </div>
                <div className="mt-4">
                    <label htmlFor="email" className="block">Email:</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full p-2 mt-1 border border-gray-300 rounded"
                    />
                </div>
                <div className="mt-4">
                    <label htmlFor="assunto" className="block">Assunto:</label>
                    <textarea
                        id="assunto"
                        value={assunto}
                        onChange={(e) => setAssunto(e.target.value)}
                        className="w-full p-2 mt-1 border border-gray-300 rounded"
                    ></textarea>
                </div>
                <button type="submit" className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">Enviar</button>
            </form>
            {message && <p className="mt-4">{message}</p>}
        </div>
    );
}
