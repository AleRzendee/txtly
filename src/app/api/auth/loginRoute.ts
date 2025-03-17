import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import prisma from "@/lib/prisma";


export async function POST(request: Request) {
  const { email, senha } = await request.json();

  try {
    const usuario = await prisma.user.findUnique({ where: { email } });
    if (!usuario) return NextResponse.json({ message: "Usuário não encontrado" }, { status: 404 });

    const senhaValida = await bcrypt.compare(senha, usuario.senha);
    if (!senhaValida) return NextResponse.json({ message: "Senha inválida" }, { status: 401 });

    const token = jwt.sign({ id: usuario.id }, process.env.JWT_SECRET as string, { expiresIn: "1h" });

    return NextResponse.json({ token });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "Erro ao realizar login" }, { status: 500 });
  }
}
