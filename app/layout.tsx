import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "GameHUB",
  description: "Red social de videojuegos donde desarrolladores y jugadores comparten novedades",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-100`}>
        {/* Navbar */}
        <Navbar />
        {/* Contenido de cada página */}
        <main className="flex justify-center p-6">
          {children}
        </main>
      </body>
    </html>
  );
}
