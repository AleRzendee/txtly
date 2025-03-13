"use client";

import { useState } from "react";
import Footer from "../components/Footer";

export default function ContatoPage() {
    const [formData, setFormData] = useState({
        nome: "",
        email: "",
        mensagem: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert("Mensagem enviada! Em breve entraremos em contato.");
        setFormData({ nome: "", email: "", mensagem: "" });
    };

    return (
        <div className="bg-gray-700">
            <div className="bg-gray-700 max-w-3xl mx-auto py-16 px-6 text-white">
                <h1 className="text-4xl py-3 font-bold text-center mb-6">Fale Conosco</h1>
                <p className="text-center text-gray-300 mb-8">
                    Entre em contato com nossa equipe para dúvidas ou suporte técnico.
                </p>

                <form onSubmit={handleSubmit} className="bg-gray-800 p-6 rounded-lg shadow-lg">
                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-1">Nome</label>
                        <input
                            type="text"
                            name="nome"
                            value={formData.nome}
                            onChange={handleChange}
                            required
                            className="w-full p-2 bg-gray-900 text-white rounded-md border border-gray-700 focus:ring focus:ring-blue-500"
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-1">E-mail</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full p-2 bg-gray-900 text-white rounded-md border border-gray-700 focus:ring focus:ring-blue-500"
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-1">Mensagem</label>
                        <textarea
                            name="mensagem"
                            value={formData.mensagem}
                            onChange={handleChange}
                            required
                            rows={4}
                            className="w-full p-2 bg-gray-900 text-white rounded-md border border-gray-700 focus:ring focus:ring-blue-500"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md transition"
                    >
                        Enviar
                    </button>
                </form>

                <div className="mt-8 text-center">
                    <h2 className="text-xl font-semibold mb-4">Outras formas de contato</h2>
                    <p className="text-gray-300">📧 Email: suporte@txtly.com</p>
                    <p className="text-gray-300">📞 Tel: +55 0800 3556-9009</p>
                </div>

                <div className="mt-10">
                    <h2 className="text-xl font-semibold mb-4">Perguntas Frequentes</h2>
                    <div className="bg-gray-800 p-4 rounded-lg shadow-md">
                        <details className="mb-3">
                            <summary className="cursor-pointer font-semibold">Como funciona o Txtly?</summary>
                            <p className="text-gray-400 mt-2">O Txtly permite edição de texto avançada até com IA diretamente no navegador.</p>
                        </details>

                        <details className="mb-3">
                            <summary className="cursor-pointer font-semibold">O Txtly possui um plano gratuito?</summary>
                            <p className="text-gray-400 mt-2">Sim! O plano gratuito permite acesso básico às ferramentas.</p>
                        </details>

                        <details>
                            <summary className="cursor-pointer font-semibold">Posso cancelar a qualquer momento?</summary>
                            <p className="text-gray-400 mt-2">Sim, basta acessar as configurações da sua conta.</p>
                        </details>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
