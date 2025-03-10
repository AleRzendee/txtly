"use client";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="flex flex-col items-center text-center py-32 px-6 bg-gradient-to-b from-gray-900 to-gray-950">
      <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
        Transforme suas ideias em palavras
      </h1>
      <p className="text-gray-300 text-lg md:text-xl mb-8 max-w-2xl">
        Txtly é um editor de texto intuitivo e poderoso, projetado para otimizar sua produtividade com formatação avançada e design moderno.
      </p>
      <Link
        href="#editor"
        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg text-lg font-semibold transition"
      >
        Experimente agora
      </Link>
    </section>
  );
}
