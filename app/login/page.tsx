import Link from "next/link";

import { LoginForm } from "@/components/auth/login-form";

export default function LoginPage() {
  return (
    <div className="page-shell">
      <header className="site-header">
        <div className="container topbar">
          <Link href="/" className="brand">
            Memoria Digital
          </Link>
          <div className="inline-actions">
            <Link href="/criar" className="button-secondary">
              Criar presente
            </Link>
          </div>
        </div>
      </header>

      <main className="section">
        <div className="container auth-layout">
          <div>
            <span className="eyebrow">Entrar</span>
            <h1 className="section-title">Acesse sua area para criar, editar e publicar presentes.</h1>
            <p className="section-copy">
              O login acontece por link magico no e-mail. E rapido, nao exige senha e combina bem com o MVP.
            </p>
          </div>
          <div className="auth-card">
            <LoginForm />
          </div>
        </div>
      </main>
    </div>
  );
}
