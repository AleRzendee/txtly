import Link from "next/link";
import { FaInstagram, FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import Image from "next/image";

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-12">
            <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
                <div>
                    <Link href="#header" className="flex items-center gap-3">
                        <Image src="./images/003-txtly_logo.png" alt="Txtly Logo" width={180} height={180} />
                    </Link>
                </div>
                <div>
                    <h3 className="font-semibold text-lg text-blue-400 mb-3">Links Úteis</h3>
                    <ul className="space-y-2">
                        <li><Link href="/" className="hover:text-blue-300">Início</Link></li>
                        <li><Link href="/#how-it-works" className="hover:text-blue-300">Como Funciona</Link></li>
                        <li><Link href="/precos" className="hover:text-blue-300">Planos</Link></li>
                        <li><Link href="/#depoimentos" className="hover:text-blue-300">Depoimentos</Link></li>
                        <li><Link href="/#contato" className="hover:text-blue-300">Contato</Link></li>
                    </ul>
                </div>

                <div>
                    <h3 className="font-semibold text-lg text-blue-400 mb-3">Suporte</h3>
                    <ul className="space-y-2">
                        <li><Link href="/faq" className="hover:text-blue-300">Perguntas Frequentes</Link></li>
                        <li><Link href="/suporte" className="hover:text-blue-300">Central de Ajuda</Link></li>
                        <li><Link href="/termos" className="hover:text-blue-300">Termos de Uso</Link></li>
                        <li><Link href="/privacidade" className="hover:text-blue-300">Política de Privacidade</Link></li>
                    </ul>
                </div>

                <div>
                    <h3 className="font-semibold text-lg text-blue-400 mb-3">Conecte-se</h3>
                    <div className="flex space-x-4 mb-4">
                        <a href="https://www.instagram.com/rzendeee" className="hover:text-blue-300 text-xl"><FaInstagram /></a>
                        <a href="https://www.linkedin.com/in/gustavorezendeee/" className="hover:text-blue-300 text-xl"><FaLinkedin /></a>
                        <a href="#https://github.com/AleRzendee" className="hover:text-blue-300 text-xl"><FaGithub /></a>
                    </div>
                    <p className="text-gray-400 text-sm">Entre em contato:</p>
                    <p className="text-gray-300 flex items-center space-x-2">
                        <FaEnvelope /> <span>suporte@txtly.com</span>
                    </p>
                </div>
            </div>

            <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-500 text-sm">
                © {new Date().getFullYear()} Txtly. Todos os direitos reservados.
            </div>
        </footer>
    );
};

export default Footer;
