import type { Metadata } from "next";
import "./globals.css";
import Header from "@/app/components/Header";

export const metadata: Metadata = {
  title: "Txtly - Editor de Texto Profissional",
  description: "Edite e formate textos de forma simples e moderna",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt">
      <body className="bg-gray-950 text-white">
        <Header /> 
        <main className="pt-20">{children}</main>
      </body>
    </html>
  );
}
