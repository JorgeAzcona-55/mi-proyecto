import { NextResponse } from "next/server";

let users = [
  { id: 1, nombre: "gamer123" },
  { id: 2, nombre: "pixelStudio" }
];

// GET → devolver usuarios
export async function GET() {

  return NextResponse.json({
    mensaje: "Lista de usuarios",
    data: users
  });

}