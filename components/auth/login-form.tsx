"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import { createClient } from "@/lib/supabase/client";

export function LoginForm() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [step, setStep] = useState<"email" | "otp">("email");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  async function sendCode(event: React.FormEvent<HTMLFormElement>) {
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

    setStep("otp");
    setStatus("success");
    setMessage("Enviamos um codigo e um link para o seu e-mail. Se o link falhar, entre com o codigo abaixo.");
  }

  async function verifyCode(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setMessage("");

    const supabase = createClient();
    const { error } = await supabase.auth.verifyOtp({
      email,
      token: otp,
      type: "email"
    });

    if (error) {
      setStatus("error");
      setMessage("Nao conseguimos validar esse codigo. Gere um novo e tente novamente.");
      return;
    }

    setStatus("success");
    setMessage("Login confirmado. Redirecionando...");
    router.push("/meus-presentes");
    router.refresh();
  }

  return (
    <div className="form-card">
      {step === "email" ? (
        <form onSubmit={sendCode} className="step-tabs">
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
            {status === "loading" ? "Enviando..." : "Receber acesso"}
          </button>
        </form>
      ) : (
        <form onSubmit={verifyCode} className="step-tabs">
          <label className="label">
            Codigo recebido por e-mail
            <input
              className="input"
              type="text"
              inputMode="numeric"
              name="otp"
              placeholder="Digite o codigo"
              value={otp}
              onChange={(event) => setOtp(event.target.value)}
              required
            />
          </label>

          <div className="inline-actions">
            <button className="button" type="submit" disabled={status === "loading"}>
              {status === "loading" ? "Validando..." : "Entrar com codigo"}
            </button>
            <button
              className="button-secondary"
              type="button"
              onClick={() => {
                setStep("email");
                setOtp("");
                setMessage("");
                setStatus("idle");
              }}
            >
              Voltar
            </button>
          </div>
        </form>
      )}

      {message ? (
        <div className={status === "error" ? "error-box" : "success-box"}>{message}</div>
      ) : null}

      <p className="form-helper">
        Depois de entrar, voce podera criar presentes, publicar a pagina e voltar para editar quando quiser.
      </p>
    </div>
  );
}
