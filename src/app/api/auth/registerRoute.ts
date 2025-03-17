import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import prisma from "@/lib/prisma"; 

export async function POST(request: Request) {
  const { nome, email, senha } = await request.json();

  try {
    const usuarioExistente = await prisma.usuario.findUnique({ where: { email } });
    if (usuarioExistente) {
      return NextResponse.json({ message: "Usuário já existe" }, { status: 400 });
    }

    const senhaHash = await bcrypt.hash(senha, 10);
    const novoUsuario = await prisma.usuario.create({
      data: { nome, email, senha: senhaHash }
    });

    return NextResponse.json({ message: "Usuário registrado com sucesso", usuario: novoUsuario });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "Erro ao registrar usuário" }, { status: 500 });
  }
}
