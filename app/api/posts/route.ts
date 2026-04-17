import { NextResponse } from "next/server";

let posts = [
  { id: 1, usuario: "devMario", texto: "Nuevo avance del juego 🎮" }
];

// GET → devolver todos los posts
export async function GET() {

  return NextResponse.json({
    mensaje: "Lista de posts",
    data: posts
  });

}

// POST → recibir un post nuevo
export async function POST(request: Request) {

  const body = await request.json(); // recibir JSON

  const nuevoPost = {
    id: posts.length + 1,
    usuario: body.usuario,
    texto: body.texto
  };

  posts.push(nuevoPost);

  return NextResponse.json({
    mensaje: "Post añadido correctamente",
    data: nuevoPost
  });

}