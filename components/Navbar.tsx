import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full bg-white border-b px-10 py-4 flex justify-between">

      <Link href="/portada" className="text-xl font-bold">
        🎮 GameHub
      </Link>

      <div className="flex gap-6">
        <Link href="/portada">Inicio</Link>
        <Link href="/portada/Perfil">Perfil</Link>
      </div>

    </nav>
  );
}