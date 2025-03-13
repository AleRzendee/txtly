import PricingSection from "./Pricing";
import Footer from "@/app/components/Footer";

export default function PricingPage() {
    return (
        <>
            <div className="min-h-screen bg-gray-900 text-white">
                <div className="max-w-6xl mx-auto text-center py-16">
                    <h1 className="text-4xl font-bold mb-4">Escolha o plano perfeito para você</h1>
                    <p className="text-lg text-gray-300">

                        Encontre o plano que melhor atende às suas necessidades e aproveite ao máximo o Txtly.
                    </p>
                </div>
                <PricingSection />
            </div>
            <Footer />
        </>
    );
}
