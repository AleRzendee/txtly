"use client";
import Image from "next/image";

// Array de testemunhos ( Testimonials List ):
const testimonials = [
    {
        name: "7LucaFerreira",
        role: "Designer Gráfico",
        feedback: "Sem dúvidas, não consigo mais viver sem ele, tem reduzido minhas horas de trabalho e me entregando uma performance de outro mundo.",
        image: "/users/user-1.jpg",
    },
    {
        name: "mariiiCostsx",
        role: "Desenvolvedora Mobile",
        feedback: "Finalmente eu achei um editor de texto que me dá controle total sobre a personalização do meu conteúdo!",
        image: "/users/user-2.jpg",
    },
    {
        name: "carloseduard0z",
        role: "Desenvolvedor Front-End",
        feedback: "Cara que ferramenta surreal de boa!! Um braço direito!! Me ajuda a criar interfaces de forma muito mais rápida.",
        image: "/users/user-3.jpg",
    },
    {
        name: "thiagolopes",
        role: "Gerente de Vendas",
        feedback: "Tive uma ótima experiência com o Txtly, nunca tinha visto algo assim, a forma como ele trabalha e orienta, não tive nenhuma dificuldade.",
        image: "/users/user-4.jpg",
    },
    {
        name: "AnaLivi.a_",
        role: "Analista de Dados",
        feedback: "Cara que ferramenta surreal de boa!! Um braço direito!! Me ajuda a criar interfaces de forma muito mais rápida.",
        image: "/users/user-5.jpg",
    },
    {
        name: "KaioAraúj0",
        role: "Desenvolvedor Front-End",
        feedback: "Cara que ferramenta surreal de boa!! Um braço direito!! Me ajuda a criar interfaces de forma muito mais rápida.",
        image: "/users/user-6.jpg",
    },
];

const Testimonials = () => {
    return (
        <section className="py-20 bg-gray-900 text-white text-center px-6">
            <h2 className="text-4xl font-bold mb-6">O que dizem sobre o Txtly?</h2>
            <p className="text-gray-400 max-w-2xl mx-auto mb-12">
                Veja o que nossos usuários estão falando sobre a experiência com o Txtly.
            </p>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                {testimonials.map((testimonial, index) => (
                    <div
                        key={index}
                        className="bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col items-center"
                    >
                        <Image
                            src={testimonial.image}
                            alt={testimonial.name}
                            width={80}
                            height={80}
                            className="rounded-full mb-4"
                        />
                        <h3 className="text-xl font-semibold">{testimonial.name}</h3>
                        <p className="text-gray-400 text-sm">{testimonial.role}</p>
                        <p className="text-gray-300 mt-3 italic">{testimonial.feedback}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Testimonials;
