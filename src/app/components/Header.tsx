"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-gray-950 bg-opacity-90 backdrop-blur-md text-white shadow-md z-50">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/logo-header.png" alt="Txtly Logo" width={80} height={80} />
        </Link>

        <nav className="hidden md:flex gap-8 text-lg">
          <Link href="#features" className="hover:text-blue-400 transition">
            Recursos
          </Link>
          <Link href="#pricing" className="hover:text-blue-400 transition">
            Preços
          </Link>
          <Link href="#contact" className="hover:text-blue-400 transition">
            Contato
          </Link>
        </nav>

        <Link href="/editor" className="hidden md:block bg-blue-500 hover:bg-blue-600 text-white px-5 py-2 rounded-lg transition">
          Acesse o Editor
        </Link>

        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-2xl">
          ☰
        </button>
      </div>

      {isOpen && (
        <nav className="md:hidden flex flex-col items-center bg-gray-900 text-lg py-4">
          <Link href="#features" className="py-2 hover:text-blue-400" onClick={() => setIsOpen(false)}>
            Recursos
          </Link>
          <Link href="#pricing" className="py-2 hover:text-blue-400" onClick={() => setIsOpen(false)}>
            Preços
          </Link>
          <Link href="#contact" className="py-2 hover:text-blue-400" onClick={() => setIsOpen(false)}>
            Contato
          </Link>
          <Link href="/editor" className="bg-blue-500 hover:bg-blue-600 text-white px-5 py-2 mt-3 rounded-lg transition">
            Acesse o Editor
          </Link>
        </nav>
      )}
    </header>
  );
};

export default Header;
