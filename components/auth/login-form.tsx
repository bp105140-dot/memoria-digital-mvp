"use client";

import { useState } from "react";

import { createClient } from "@/lib/supabase/client";

export function LoginForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setMessage("");

    const supabase = createClient();
    const redirectTo = `${window.location.origin}/auth/confirm?next=/meus-presentes`;

    const { error } = await supabase.auth.signInWithOtp({
      email,
      options: {
        emailRedirectTo: redirectTo
      }
    });

    if (error) {
      setStatus("error");
      setMessage(error.message);
      return;
    }

    setStatus("success");
    setMessage("Enviamos um link magico para o seu e-mail.");
  }

  return (
    <form onSubmit={handleSubmit} className="form-card">
      <label className="label">
        Seu e-mail
        <input
          className="input"
          type="email"
          name="email"
          placeholder="voce@exemplo.com"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
        />
      </label>

      <button className="button" type="submit" disabled={status === "loading"}>
        {status === "loading" ? "Enviando..." : "Receber link de acesso"}
      </button>

      {message ? (
        <div className={status === "error" ? "error-box" : "success-box"}>{message}</div>
      ) : null}

      <p className="form-helper">
        Depois de entrar, voce podera criar presentes, publicar a pagina e voltar para editar quando quiser.
      </p>
    </form>
  );
}
