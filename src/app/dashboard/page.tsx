"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Dashboard() {
    const router = useRouter();
    const [message, setMessage] = useState("");

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (!token) {
            router.push("/login"); // Redireciona se não estiver autenticado
            return;
        }

        // Faz uma requisição à API protegida
        fetch("/api/protected", {
            headers: { Authorization: `Bearer ${token}` },
        })
            .then((res) => res.json())
            .then((data) => setMessage(data.message))
            .catch(() => router.push("/login"));
    }, []);

    return (
        <div className="min-h-screen flex flex-col justify-center items-center bg-gray-900 text-white">
            <h1 className="text-3xl font-bold">Área Protegida</h1>
            <p>{message}</p>
            <button
                onClick={() => {
                    localStorage.removeItem("token");
                    router.push("/login");
                }}
                className="mt-4 bg-red-500 hover:bg-red-600 p-2 rounded"
            >
                Sair
            </button>
        </div>
    );
}
