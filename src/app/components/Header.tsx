"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header id="header" className="fixed top-0 left-0 w-full bg-gray-950 text-white shadow-md z-50">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">

        <Link href="/" className="text-3xl font-extrabold tracking-wide">
          <Image src="./images/001-txtly_logotipo.png" width={100} height={100} alt="Logo" />
        </Link>

        <nav className="hidden md:flex space-x-8 text-lg font-medium">
          <Link href="#features" className="hover:text-blue-400 transition">
            Recursos
          </Link>
          <Link href="#how-it-works" className="hover:text-blue-400 transition">
            Como Funciona
          </Link>
          <Link href="/pricing" className="hover:text-blue-400 transition">
            Preços
          </Link>
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          <Link href="/pricing">
            <button className="bg-blue-600 px-6 py-2 rounded-md font-semibold hover:bg-blue-500 transition">
              Experimente Grátis
            </button>
          </Link>
          <Link href="/login">
            <button className="border border-gray-500 px-5 py-2 rounded-md hover:bg-gray-800 transition">
              Entrar
            </button>
          </Link>
          <Link href="/cadastro">
            <button className="bg-green-600 px-5 py-2 rounded-md hover:bg-green-500 transition">
              Cadastre-se
            </button>
          </Link>
        </div>


        <button
          className="md:hidden text-xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Menu Mobile Responsivo */}
      {menuOpen && (
        <div className="md:hidden flex flex-col items-center bg-[#0A0A0A] text-white py-4 space-y-4">
          <Link href="#features" className="hover:text-blue-400 transition">
            Recursos
          </Link>
          <Link href="#how-it-works" className="hover:text-blue-400 transition">
            Como Funciona
          </Link>
          <Link href="/precos" className="hover:text-blue-400 transition">
            Preços
          </Link>
          <button className="bg-blue-600 px-6 py-2 rounded-md font-semibold hover:bg-blue-500 transition">
            Experimente Grátis
          </button>
          <Link href="/login">
            <button className="border border-gray-500 px-5 py-2 rounded-md hover:bg-gray-800 transition">
              Entrar
            </button>
          </Link>
          <Link href="/cadastro">
            <button className="bg-green-600 px-5 py-2 rounded-md hover:bg-green-500 transition">
              Cadastre-se
            </button>
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
