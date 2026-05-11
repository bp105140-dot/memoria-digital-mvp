import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "Memoria Digital",
  description:
    "Crie presentes digitais personalizados com fotos, musica, timeline, QR Code e uma experiencia emocional pronta para compartilhar."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
