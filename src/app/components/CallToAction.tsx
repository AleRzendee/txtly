"use client";
const CallToAction = () => {
    return (
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center px-6">
            <h2 className="text-4xl font-bold mb-4">Pronto para transformar sua escrita?</h2>
            <p className="text-lg max-w-2xl mx-auto mb-6">
                Experimente o Txtly e descubra um novo jeito de editar textos de forma simples, eficiente e poderosa.
            </p>
            <a
                href="/pricing"
                className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-gray-200 transition-all"
            >
                Experimente Agora
            </a>
        </section>
    );
};

export default CallToAction;