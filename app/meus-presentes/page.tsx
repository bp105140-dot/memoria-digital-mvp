import Link from "next/link";
import { redirect } from "next/navigation";

import { SignOutButton } from "@/components/auth/sign-out-button";
import { createClient } from "@/lib/supabase/server";
import { formatDate } from "@/lib/utils";
import type { GiftRecord } from "@/types/gifts";

export default async function DashboardPage() {
  const supabase = await createClient();
  const {
    data: { user }
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login");
  }

  const { data: gifts } = await supabase
    .from("gifts")
    .select("*")
    .eq("user_id", user.id)
    .order("updated_at", { ascending: false });

  const giftList = (gifts ?? []) as GiftRecord[];

  return (
    <div className="page-shell">
      <header className="site-header">
        <div className="container topbar">
          <Link href="/" className="brand">
            Memoria Digital
          </Link>
          <div className="inline-actions">
            <Link href="/criar" className="button">
              Novo presente
            </Link>
            <SignOutButton />
          </div>
        </div>
      </header>

      <main className="section">
        <div className="container">
          <div className="dashboard-topbar">
            <div>
              <span className="eyebrow">Minha conta</span>
              <h1 className="section-title">Seus presentes digitais</h1>
              <p className="section-copy">
                Gerencie rascunhos, publique paginas e volte depois para editar sem perder o ritmo.
              </p>
            </div>
          </div>

          {giftList.length === 0 ? (
            <div className="dashboard-card">
              <h2>Nenhum presente criado ainda.</h2>
              <p>Comece pelo criador para subir fotos, definir a musica e montar a timeline.</p>
              <Link href="/criar" className="button">
                Criar meu primeiro presente
              </Link>
            </div>
          ) : (
            <div className="dashboard-grid">
              {giftList.map((gift) => (
                <article key={gift.id} className="dashboard-card">
                  <div className="inline-actions">
                    <span className={`status-pill ${gift.status === "draft" ? "draft" : ""}`}>
                      {gift.status === "draft" ? "Rascunho" : "Publicado"}
                    </span>
                  </div>
                  <h3>{gift.title}</h3>
                  <p>
                    {gift.giver_name} para {gift.recipient_name}
                  </p>
                  <p className="gift-meta">
                    Ultima edicao: {formatDate(gift.updated_at.slice(0, 10))}
                  </p>
                  <div className="button-row">
                    <Link href={`/meus-presentes/${gift.id}/editar`} className="button-secondary">
                      Editar
                    </Link>
                    <Link href={`/g/${gift.slug}`} className="button-ghost">
                      Abrir pagina
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
