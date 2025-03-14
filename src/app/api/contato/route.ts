import { NextResponse } from "next/server";
import prisma from "../../../../lib/prisma";

export async function POST(request: Request) {
  const { nome, email, assunto } = await request.json();

  try {

    const contato = await prisma.contato.create({
      data: {
        nome,
        email,
        assunto,
      },
    });

    return NextResponse.json({ message: "Contato enviado com sucesso", contato }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Erro ao salvar o contato" }, { status: 500 });
    
  }
}
