"use client";
import { FaMagic, FaSyncAlt, FaUserLock, FaPaintBrush } from "react-icons/fa";

const Features = () => {
    return (
        <section className="py-20 bg-gray-900 text-white text-center px-6">
            <h2 className="text-4xl font-bold mb-6">Por que escolher o Txtly?</h2>
            <p className="text-gray-300 max-w-2xl mx-auto mb-12">
                O Txtly oferece uma experiência moderna, intuitiva e eficiente para a edição de texto. Confira alguns dos principais benefícios:
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
                <div className="flex flex-col items-center">
                    <FaMagic className="text-blue-500 text-5xl mb-4" />
                    <h3 className="text-xl font-semibold">Edição Inteligente</h3>
                    <p className="text-gray-400 mt-2">Ferramentas avançadas para personalizar seu texto com facilidade.</p>
                </div>
                <div className="flex flex-col items-center">
                    <FaSyncAlt className="text-green-500 text-5xl mb-4" />
                    <h3 className="text-xl font-semibold">Salvamento Automático</h3>
                    <p className="text-gray-400 mt-2">Seu trabalho é salvo automaticamente para evitar perdas.</p>
                </div>
                <div className="flex flex-col items-center">
                    <FaUserLock className="text-yellow-500 text-5xl mb-4" />
                    <h3 className="text-xl font-semibold">Segurança</h3>
                    <p className="text-gray-400 mt-2">Seus textos protegidos com criptografia e privacidade total.</p>
                </div>

                <div className="flex flex-col items-center">
                    <FaPaintBrush className="text-pink-500 text-5xl mb-4" />
                    <h3 className="text-xl font-semibold">Personalização Total</h3>
                    <p className="text-gray-400 mt-2">Escolha fontes, cores e estilos para deixar seu texto único.</p>
                </div>
            </div>
        </section>
    );
};

export default Features;
