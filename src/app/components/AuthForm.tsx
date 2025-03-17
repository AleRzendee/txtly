"use client";

import { useState } from "react";
import Input from "./Input";
import { useRouter } from "next/navigation";

interface AuthFormProps {
    type: "login" | "register";
}

export default function AuthForm({ type }: AuthFormProps) {
    const [form, setForm] = useState({ email: "", password: "", confirmPassword: "" });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError("");

        if (type === "register" && form.password !== form.confirmPassword) {
            setError("As senhas não coincidem!");
            setLoading(false);
            return;
        }

        try {
            const res = await fetch(`/api/auth/${type}`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(form),
            });

            const data = await res.json();
            if (!res.ok) throw new Error(data.message || "Erro desconhecido");

            router.push("/");
        } catch (err: any) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="w-full max-w-md p-6 bg-gray-900 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-white text-center">{type === "login" ? "Entrar" : "Criar Conta"}</h2>
            {error && <p className="mt-2 text-sm text-red-500">{error}</p>}
            <form onSubmit={handleSubmit} className="mt-4 flex flex-col gap-4">
                <Input label="Email" name="email" placeholder="Digite seu email" />
                <Input label="Senha" type="password" name="password" placeholder="Digite sua senha" />
                {type === "register" && <Input label="Confirmar Senha" type="password" name="confirmPassword" placeholder="Confirme sua senha" />}
                <button
                    type="submit"
                    className="w-full p-2 bg-blue-600 hover:bg-blue-700 rounded text-white font-semibold"
                    disabled={loading}
                >
                    {loading ? "Carregando..." : type === "login" ? "Entrar" : "Registrar"}
                </button>
            </form>
        </div>
    );
}
