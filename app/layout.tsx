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
      <body>
        <div className="ambient-bg" aria-hidden="true">
          <div className="ambient-stars" />
          <div className="ambient-stars ambient-stars-secondary" />
          <div className="ambient-glow ambient-glow-left" />
          <div className="ambient-glow ambient-glow-right" />
          <div className="ambient-heart heart-one" />
          <div className="ambient-heart heart-two" />
          <div className="ambient-heart heart-three" />
        </div>
        {children}
      </body>
    </html>
  );
}
