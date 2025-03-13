"use client";
import { FaPenFancy, FaPalette, FaSave } from "react-icons/fa";

const HowItWorks = () => {
    return (
        <section id="how-it-works" className="py-20 bg-gray-800 text-white text-center px-6">
            <h2 className="text-4xl font-bold mb-6">Como funciona o Txtly?</h2>

            <p className="text-gray-300 max-w-2xl mx-auto mb-12">
                Simples, rápido e poderoso! Veja como você pode criar e personalizar textos com o Txtly em poucos passos:
            </p>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                <div className="flex flex-col items-center">
                    <FaPenFancy className="text-blue-500 text-6xl mb-4" />
                    <h3 className="text-xl font-semibold">1. Escreva</h3>
                    <p className="text-gray-400 mt-2">Digite ou cole seu texto na área de edição.</p>
                </div>
                <div className="flex flex-col items-center">
                    <FaPalette className="text-green-500 text-6xl mb-4" />
                    <h3 className="text-xl font-semibold">2. Personalize</h3>
                    <p className="text-gray-400 mt-2">Escolha fontes, cores e estilos para seu texto.</p>
                </div>
                <div className="flex flex-col items-center">
                    <FaSave className="text-yellow-500 text-6xl mb-4" />
                    <h3 className="text-xl font-semibold">3. Salve & Compartilhe</h3>
                    <p className="text-gray-400 mt-2">Baixe ou compartilhe seu texto rapidamente.</p>
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;