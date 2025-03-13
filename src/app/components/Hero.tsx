"use client";
// import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="h-screen flex flex-col items-center justify-center text-center bg-gradient-to-b from-gray-950 to-gray-900 text-white px-6">
      <h1 className="text-5xl md:text-6xl font-bold leading-tight">
        Transforme suas ideias em <span className="text-blue-500">texto</span> com facilidade
      </h1>

      <p className="text-lg md:text-xl text-gray-300 mt-4 max-w-2xl">
        Txtly é o editor de texto minimalista e poderoso que você precisa. Personalize, edite e compartilhe com facilidade.
      </p>

      <Link href="/editor" className="mt-6 bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 text-lg rounded-lg transition">
        Experimente Agora
      </Link>

      {/* <div className="mt-10">
        <Image src="/hero-image.png" alt="Editor Txtly" width={600} height={400} className="rounded-lg shadow-lg" />
      </div> */}
    </section>
  );
};

export default Hero;
