import { NextResponse } from "next/server";
import verifyToken from "../../../lib/auth";

export async function GET(req: Request) {
  const token = req.headers.get("cookie")?.split("token=")[1];

  if (!token || !verifyToken(token)) {
    return NextResponse.json({ message: "Acesso negado" }, { status: 401 });
  }

  return NextResponse.json({ message: "Bem-vindo à área protegida!" });
}
