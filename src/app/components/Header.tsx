import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full bg-gray-950 bg-opacity-90 backdrop-blur-md text-white flex items-center justify-between px-6 py-4 z-50 shadow-md">
      <Link href="/" className="flex flex-col items-center">
        <Image
          src="/logo-header.png"
          alt="Txtly Logo"
          width={80}
          height={80}
        />
      </Link>
      <nav>
        <ul className="flex space-x-6">
          <li><Link href="#features" className="hover:text-blue-400">Recursos</Link></li>
          <li><Link href="#editor" className="hover:text-blue-400">Editor</Link></li>
        </ul>
      </nav>
    </header>
  );
}
