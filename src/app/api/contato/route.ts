import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
    try {
        const { nome, email, assunto } = await req.json();

        if (!nome || !email || !assunto) {
            return NextResponse.json({ error: "Todos os campos são obrigatórios." }, { status: 400 });
        }

        const novoContato = await prisma.contato.create({
            data: { nome, email, assunto },
        });

        return NextResponse.json(novoContato, { status: 201 });

    } catch (error) {
        if (error instanceof Error) {
            console.error("Erro ao salvar contato:", error.message);
            return NextResponse.json({ error: "Erro ao salvar contato", details: error.message }, { status: 500 });
        }
        return NextResponse.json({ error: "Erro desconhecido" }, { status: 500 });
    }
}
