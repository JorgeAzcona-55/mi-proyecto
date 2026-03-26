import PostCard from "../../components/PostCard";

export default function PortadaPage() {

  const posts = [
    {
      user: "devMario",
      text: "Nuevo avance de mi juego RPG 🎮🔥"
    },
    {
      user: "PixelStudio",
      text: "Hemos añadido modo multijugador al juego!"
    },
    {
      user: "RetroFan",
      text: "Este juego indie promete mucho 👾"
    }
  ];

  return (

    <div className="flex flex-col gap-6 w-full max-w-xl">

      <h1 className="text-2xl font-bold">
        Inicio
      </h1>

      {posts.map((post, index) => (
        <PostCard
          key={index}
          user={post.user}
          text={post.text}
        />
      ))}

    </div>

  );
}