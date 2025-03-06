"use client";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-gray-900 fixed w-full top-0 left-0 z-50 shadow-md">
      <div className="container mx-auto flex justify-between items-center p-4">
        <Link href="/" className="text-white text-2xl font-bold">
          Txtly
        </Link>
        <nav className={`md:flex gap-6 ${menuOpen ? "block" : "hidden"} md:block`}>
          <Link href="#features" className="text-gray-300 hover:text-white">
            Recursos
          </Link>
          <Link href="#editor" className="text-gray-300 hover:text-white">
            Editor
          </Link>
          <Link href="#pricing" className="text-gray-300 hover:text-white">
            Planos
          </Link>
        </nav>
  );
}
