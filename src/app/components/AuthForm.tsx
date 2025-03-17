"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AuthForm({ type }: { type: "login" | "register" }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const endpoint = type === "login" ? "/api/auth/login" : "/api/auth/register";
        const res = await fetch(endpoint, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, password }),
        });

        const data = await res.json();
        if (res.ok) {
            setMessage(data.message);
            if (type === "login") {
                localStorage.setItem("token", data.token);
                router.push("/dashboard");
            }
        } else {
            setMessage(data.message);
        }
    };

    return (
        <div className="max-w-md mx-auto bg-gray-800 p-6 rounded-lg">
            <h2 className="text-2xl font-bold text-center mb-4">
                {type === "login" ? "Entrar" : "Criar Conta"}
            </h2>
            {message && <p className="text-red-400">{message}</p>}
            <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
                <input
                    type="email"
                    placeholder="E-mail"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="p-2 rounded bg-gray-700 text-white"
                    required
                />
                <input
                    type="password"
                    placeholder="Senha"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="p-2 rounded bg-gray-700 text-white"
                    required
                />
                <button type="submit" className="bg-blue-500 hover:bg-blue-600 p-2 rounded text-white">
                    {type === "login" ? "Entrar" : "Cadastrar"}
                </button>
            </form>
        </div>
    );
}
