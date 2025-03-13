import Link from 'next/link';

const Pricing = () => {
    return (
        <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto text-center">
                <h2 className="text-3xl font-semibold text-gray-900 mb-8">Escolha o plano perfeito para você</h2>
                <p className="text-xl text-gray-600 mb-12">
                    O Txtly oferece planos para atender a todas as suas necessidades. Escolha o melhor para você e comece a escrever!
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="bg-white shadow-lg rounded-lg p-6">
                        <h3 className="text-2xl font-semibold text-gray-900 mb-4">Plano Gratuito</h3>
                        <p className="text-xl text-gray-700 mb-6">Ideal para quem está começando e quer testar a ferramenta.</p>
                        <div className="text-4xl font-bold text-blue-600 mb-4">R$0 / mês</div>
                        <ul className="list-disc list-inside text-gray-600 mb-6">
                            <li>Acesso básico a funcionalidades</li>
                            <li>Armazenamento limitado</li>
                            <li>Suporte por e-mail</li>
                        </ul>
                        <Link href="#cta" className="block w-full text-center py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                            Comece agora
                        </Link>
                    </div>

                    {/* Plano Pro */}
                    <div className="bg-white shadow-lg rounded-lg p-6">
                        <h3 className="text-2xl font-semibold text-gray-900 mb-4">Plano Pro</h3>
                        <p className="text-xl text-gray-700 mb-6">Para profissionais que buscam mais recursos e personalização.</p>
                        <div className="text-4xl font-bold text-blue-600 mb-4">R$29,99 / mês</div>
                        <ul className="list-disc list-inside text-gray-600 mb-6">
                            <li>Todas as funcionalidades do plano gratuito</li>
                            <li>Funcionalidades avançadas de personalização</li>
                            <li>Suporte prioritário</li>
                            <li>Armazenamento ilimitado</li>
                        </ul>
                        <Link href="#cta" className="block w-full text-center py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                            Assine agora
                        </Link>
                    </div>
                    <div className="bg-white shadow-lg rounded-lg p-6">
                        <h3 className="text-2xl font-semibold text-gray-900 mb-4">Plano Dev</h3>
                        <p className="text-xl text-gray-700 mb-6">Para desenvolvedores e equipes que precisam de todas as funcionalidades ao máximo.</p>
                        <div className="text-4xl font-bold text-blue-600 mb-4">R$49,99 / mês</div>
                        <ul className="list-disc list-inside text-gray-600 mb-6">
                            <li>Todas as funcionalidades do plano Pro</li>
                            <li>Acesso a novas funcionalidades beta</li>
                            <li>Suporte dedicado 24/7</li>
                            <li>Integração com APIs externas</li>
                        </ul>
                        <Link href="#cta" className="block w-full text-center py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                            Escolha este plano
                        </Link>
                    </div>
                </div>

                <div className="mt-12">
                    <h3 className="text-3xl font-semibold text-gray-900 mb-6">Pronto para começar?</h3>
                    <p className="text-lg text-gray-600 mb-6">
                        Escolha o plano que melhor atende às suas necessidades e comece a usar o Txtly agora mesmo. Não perca tempo!
                    </p>
                    <Link href="#cta" className="bg-blue-600 text-white py-3 px-6 rounded-lg text-xl hover:bg-blue-700 transition">
                        Escolha o seu plano
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Pricing;
