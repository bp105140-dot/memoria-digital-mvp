"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { getMusicEmbed } from "@/lib/music";
import { createClient } from "@/lib/supabase/client";
import { slugify } from "@/lib/utils";
import type { GiftPhoto, GiftRecord, TimelineEvent } from "@/types/gifts";

type Props = {
  userId: string;
  initialGift?: Partial<GiftRecord> & { id?: string };
  initialPhotos?: GiftPhoto[];
  initialTimeline?: TimelineEvent[];
};

type FormState = {
  title: string;
  giver_name: string;
  recipient_name: string;
  relationship_type: string;
  special_date: string;
  headline: string;
  message: string;
  final_message: string;
  music_url: string;
  theme: string;
  slug: string;
};

const themes = [
  { id: "romantico", label: "Romantico" },
  { id: "elegante", label: "Elegante" },
  { id: "minimalista", label: "Minimalista" },
  { id: "vintage", label: "Vintage" },
  { id: "ludico", label: "Ludico" }
];

export function CreateGiftForm({
  userId,
  initialGift,
  initialPhotos = [],
  initialTimeline = []
}: Props) {
  const router = useRouter();
  const supabase = createClient();
  const [currentStep, setCurrentStep] = useState(0);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [giftId, setGiftId] = useState<string | null>(initialGift?.id ?? null);

  const [form, setForm] = useState<FormState>({
    title: initialGift?.title ?? "",
    giver_name: initialGift?.giver_name ?? "",
    recipient_name: initialGift?.recipient_name ?? "",
    relationship_type: initialGift?.relationship_type ?? "namorada",
    special_date: initialGift?.special_date ?? "",
    headline: initialGift?.headline ?? "",
    message: initialGift?.message ?? "",
    final_message: initialGift?.final_message ?? "",
    music_url: initialGift?.music_url ?? "",
    theme: initialGift?.theme ?? "romantico",
    slug: initialGift?.slug ?? ""
  });

  const [photos, setPhotos] = useState<GiftPhoto[]>(initialPhotos);
  const [timeline, setTimeline] = useState<TimelineEvent[]>(initialTimeline);

  const resolvedSlug = useMemo(() => {
    if (form.slug.trim()) return slugify(form.slug);
    return slugify(`${form.recipient_name || "presente"}-${form.title || "memoria"}`);
  }, [form.recipient_name, form.slug, form.title]);
  const musicEmbed = useMemo(() => getMusicEmbed(form.music_url), [form.music_url]);

  function updateField<K extends keyof FormState>(field: K, value: FormState[K]) {
    setForm((current) => ({ ...current, [field]: value }));
  }

  function addTimelineEvent() {
    setTimeline((current) => [
      ...current,
      {
        event_date: "",
        title: "",
        description: "",
        photo_url: null,
        display_order: current.length
      }
    ]);
  }

  function updateTimelineEvent(index: number, field: keyof TimelineEvent, value: string) {
    setTimeline((current) =>
      current.map((event, eventIndex) =>
        eventIndex === index ? { ...event, [field]: value } : event
      )
    );
  }

  function moveItem<T extends { display_order: number }>(
    items: T[],
    index: number,
    direction: -1 | 1
  ) {
    const nextIndex = index + direction;
    if (nextIndex < 0 || nextIndex >= items.length) return items;
    const clone = [...items];
    [clone[index], clone[nextIndex]] = [clone[nextIndex], clone[index]];
    return clone.map((item, itemIndex) => ({ ...item, display_order: itemIndex }));
  }

  async function handleFileUpload(event: React.ChangeEvent<HTMLInputElement>) {
    const files = Array.from(event.target.files ?? []);
    if (!files.length) return;

    setLoading(true);
    setError("");
    setMessage("");

    try {
      const uploaded: GiftPhoto[] = [];

      for (const file of files) {
        const path = `${userId}/${crypto.randomUUID()}-${file.name.replace(/\s+/g, "-")}`;
        const { error: uploadError } = await supabase.storage
          .from("gift-assets")
          .upload(path, file, {
            cacheControl: "3600",
            upsert: false
          });

        if (uploadError) {
          throw uploadError;
        }

        const { data } = supabase.storage.from("gift-assets").getPublicUrl(path);

        uploaded.push({
          public_url: data.publicUrl,
          storage_path: path,
          caption: null,
          display_order: photos.length + uploaded.length,
          is_cover: photos.length === 0 && uploaded.length === 0
        });
      }

      setPhotos((current) => [
        ...current,
        ...uploaded.map((item, index) => ({
          ...item,
          display_order: current.length + index
        }))
      ]);

      setMessage("Fotos enviadas com sucesso.");
    } catch (uploadError) {
      setError(uploadError instanceof Error ? uploadError.message : "Falha ao subir as fotos.");
    } finally {
      setLoading(false);
      event.target.value = "";
    }
  }

  async function saveGift(status: "draft" | "published") {
    setLoading(true);
    setError("");
    setMessage("");

    try {
      if (!form.title || !form.giver_name || !form.recipient_name) {
        throw new Error("Preencha pelo menos titulo, nome de quem presenteia e nome da pessoa presenteada.");
      }

      const payload = {
        title: form.title,
        giver_name: form.giver_name,
        recipient_name: form.recipient_name,
        relationship_type: form.relationship_type,
        special_date: form.special_date || null,
        headline: form.headline || `Para ${form.recipient_name}, com todo meu carinho.`,
        message: form.message,
        final_message: form.final_message,
        music_url: form.music_url || null,
        theme: form.theme,
        slug: `${resolvedSlug}-${(giftId ?? crypto.randomUUID()).slice(0, 8)}`.slice(0, 64),
        user_id: userId,
        status,
        is_public: status === "published"
      };

      let currentGiftId = giftId;

      if (currentGiftId) {
        const { error: updateError } = await supabase
          .from("gifts")
          .update(payload)
          .eq("id", currentGiftId)
          .eq("user_id", userId);

        if (updateError) throw updateError;
      } else {
        const { data: createdGift, error: insertError } = await supabase
          .from("gifts")
          .insert(payload)
          .select("id, slug")
          .single();

        if (insertError) throw insertError;

        currentGiftId = createdGift.id;
        setGiftId(createdGift.id);
      }

      if (!currentGiftId) {
        throw new Error("Nao foi possivel salvar o presente.");
      }

      await supabase.from("gift_photos").delete().eq("gift_id", currentGiftId);
      await supabase.from("timeline_events").delete().eq("gift_id", currentGiftId);

      if (photos.length > 0) {
        const photoPayload = photos.map((photo, index) => ({
          gift_id: currentGiftId,
          public_url: photo.public_url,
          storage_path: photo.storage_path,
          caption: photo.caption,
          display_order: index,
          is_cover: photo.is_cover
        }));

        const { error: photoError } = await supabase.from("gift_photos").insert(photoPayload);
        if (photoError) throw photoError;
      }

      const validTimeline = timeline.filter((event) => event.title && event.event_date);

      if (validTimeline.length > 0) {
        const timelinePayload = validTimeline.map((event, index) => ({
          gift_id: currentGiftId,
          event_date: event.event_date,
          title: event.title,
          description: event.description,
          photo_url: event.photo_url,
          display_order: index
        }));

        const { error: timelineError } = await supabase.from("timeline_events").insert(timelinePayload);
        if (timelineError) throw timelineError;
      }

      setMessage(status === "published" ? "Presente publicado com sucesso." : "Rascunho salvo com sucesso.");
      router.push(
        status === "published"
          ? `/g/${payload.slug}`
          : `/meus-presentes/${currentGiftId}/editar`
      );
      router.refresh();
    } catch (saveError) {
      setError(saveError instanceof Error ? saveError.message : "Falha ao salvar o presente.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="page-shell">
      <header className="site-header">
        <div className="container topbar">
          <Link href="/" className="brand">
            Memoria Digital
          </Link>
          <div className="inline-actions">
            <Link href="/meus-presentes" className="button-secondary">
              Meu painel
            </Link>
          </div>
        </div>
      </header>

      <main className="section">
        <div className="container gift-layout">
          <section>
            <div className="gift-topbar">
              <div className="gift-heading">
                <span className="eyebrow">{giftId ? "Editar presente" : "Criar presente"}</span>
                <h1>{giftId ? "Continue sua surpresa." : "Monte sua primeira surpresa digital."}</h1>
                <p className="section-copy">
                  Preencha os dados, envie as fotos, escolha a musica e publique a pagina quando estiver pronta.
                </p>
              </div>
            </div>

            <div className="form-card">
              <div className="step-tabs">
                {["Dados", "Fotos", "Timeline", "Tema", "Preview"].map((label, index) => (
                  <button
                    key={label}
                    type="button"
                    className={`step-tab ${currentStep === index ? "active" : ""}`}
                    onClick={() => setCurrentStep(index)}
                  >
                    {label}
                  </button>
                ))}
              </div>

              {currentStep === 0 ? (
                <div className="grid-two" style={{ marginTop: "1rem" }}>
                  <label className="label">
                    Titulo do presente
                    <input
                      className="input"
                      value={form.title}
                      onChange={(event) => updateField("title", event.target.value)}
                      placeholder="Nossa historia em forma de presente"
                    />
                  </label>
                  <label className="label">
                    Slug personalizado
                    <input
                      className="input"
                      value={form.slug}
                      onChange={(event) => updateField("slug", event.target.value)}
                      placeholder="ana-e-joao"
                    />
                  </label>
                  <label className="label">
                    Quem presenteia
                    <input
                      className="input"
                      value={form.giver_name}
                      onChange={(event) => updateField("giver_name", event.target.value)}
                      placeholder="Seu nome"
                    />
                  </label>
                  <label className="label">
                    Quem recebe
                    <input
                      className="input"
                      value={form.recipient_name}
                      onChange={(event) => updateField("recipient_name", event.target.value)}
                      placeholder="Nome da pessoa presenteada"
                    />
                  </label>
                  <label className="label">
                    Relacao
                    <select
                      className="select"
                      value={form.relationship_type}
                      onChange={(event) => updateField("relationship_type", event.target.value)}
                    >
                      <option value="namorada">Namorada</option>
                      <option value="namorado">Namorado</option>
                      <option value="esposa">Esposa</option>
                      <option value="marido">Marido</option>
                      <option value="mae">Mae</option>
                      <option value="pai">Pai</option>
                      <option value="amiga">Amiga</option>
                      <option value="avo">Avo</option>
                    </select>
                  </label>
                  <label className="label">
                    Data especial
                    <input
                      className="input"
                      type="date"
                      value={form.special_date}
                      onChange={(event) => updateField("special_date", event.target.value)}
                    />
                  </label>
                  <label className="label" style={{ gridColumn: "1 / -1" }}>
                    Frase de abertura
                    <textarea
                      className="textarea"
                      value={form.headline}
                      onChange={(event) => updateField("headline", event.target.value)}
                      placeholder="Uma frase que abre o presente com o tom certo."
                    />
                  </label>
                  <label className="label" style={{ gridColumn: "1 / -1" }}>
                    Mensagem principal
                    <textarea
                      className="textarea"
                      value={form.message}
                      onChange={(event) => updateField("message", event.target.value)}
                      placeholder="Conte a historia, fale do momento ou escreva a dedicacao principal."
                    />
                  </label>
                  <label className="label" style={{ gridColumn: "1 / -1" }}>
                    Mensagem final
                    <textarea
                      className="textarea"
                      value={form.final_message}
                      onChange={(event) => updateField("final_message", event.target.value)}
                      placeholder="Assinatura final, declaracao ou encerramento da experiencia."
                    />
                  </label>
                  <label className="label" style={{ gridColumn: "1 / -1" }}>
                    Link da musica
                    <input
                      className="input"
                      value={form.music_url}
                      onChange={(event) => updateField("music_url", event.target.value)}
                      placeholder="https://open.spotify.com/... ou https://youtube.com/..."
                    />
                  </label>
                  {musicEmbed ? (
                    <div className="music-preview-card" style={{ gridColumn: "1 / -1" }}>
                      <div className="music-preview-head">
                        <strong>{musicEmbed.provider === "youtube" ? "Clipe pronto para o presente" : "Player pronto para o presente"}</strong>
                        <span className="muted">
                          {musicEmbed.provider === "youtube"
                            ? "O presente vai mostrar o clipe dentro do card da musica."
                            : "O presente vai incorporar o player da faixa ou playlist."}
                        </span>
                      </div>
                      <div className={`music-embed music-embed-${musicEmbed.provider}`}>
                        <iframe
                          src={musicEmbed.embedUrl}
                          title={musicEmbed.label}
                          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                          loading="lazy"
                          referrerPolicy="strict-origin-when-cross-origin"
                          allowFullScreen
                        />
                      </div>
                    </div>
                  ) : null}
                </div>
              ) : null}

              {currentStep === 1 ? (
                <div style={{ marginTop: "1rem" }}>
                  <label className="label">
                    Enviar fotos
                    <input className="input" type="file" accept="image/*" multiple onChange={handleFileUpload} />
                  </label>
                  <p className="form-helper">
                    As imagens vao para o bucket <code>gift-assets</code> no Supabase Storage.
                  </p>
                  <div className="photo-grid">
                    {photos.map((photo, index) => (
                      <article key={`${photo.public_url}-${index}`} className="photo-card">
                        <img src={photo.public_url} alt={`Foto ${index + 1}`} />
                        <label className="label" style={{ marginTop: "0.8rem" }}>
                          Legenda opcional
                          <input
                            className="input"
                            value={photo.caption ?? ""}
                            onChange={(event) =>
                              setPhotos((current) =>
                                current.map((item, itemIndex) =>
                                  itemIndex === index ? { ...item, caption: event.target.value } : item
                                )
                              )
                            }
                          />
                        </label>
                        <div className="photo-toolbar">
                          <button
                            className="button-secondary"
                            type="button"
                            onClick={() =>
                              setPhotos((current) =>
                                current.map((item, itemIndex) => ({
                                  ...item,
                                  is_cover: itemIndex === index
                                }))
                              )
                            }
                          >
                            {photo.is_cover ? "Foto de capa" : "Definir capa"}
                          </button>
                          <button
                            className="button-ghost"
                            type="button"
                            onClick={() => setPhotos((current) => moveItem(current, index, -1))}
                          >
                            Subir
                          </button>
                          <button
                            className="button-ghost"
                            type="button"
                            onClick={() => setPhotos((current) => moveItem(current, index, 1))}
                          >
                            Descer
                          </button>
                          <button
                            className="button-danger"
                            type="button"
                            onClick={() =>
                              setPhotos((current) =>
                                current
                                  .filter((_, itemIndex) => itemIndex !== index)
                                  .map((item, itemIndex) => ({ ...item, display_order: itemIndex }))
                              )
                            }
                          >
                            Remover
                          </button>
                        </div>
                      </article>
                    ))}
                  </div>
                </div>
              ) : null}

              {currentStep === 2 ? (
                <div style={{ marginTop: "1rem" }}>
                  <div className="button-row">
                    <button className="button-secondary" type="button" onClick={addTimelineEvent}>
                      Adicionar marco
                    </button>
                  </div>
                  <div className="timeline-grid">
                    {timeline.map((event, index) => (
                      <article key={`${event.title}-${index}`} className="timeline-card">
                        <div className="grid-two">
                          <label className="label">
                            Data
                            <input
                              className="input"
                              type="date"
                              value={event.event_date}
                              onChange={(e) => updateTimelineEvent(index, "event_date", e.target.value)}
                            />
                          </label>
                          <label className="label">
                            Titulo
                            <input
                              className="input"
                              value={event.title}
                              onChange={(e) => updateTimelineEvent(index, "title", e.target.value)}
                              placeholder="Primeiro encontro"
                            />
                          </label>
                          <label className="label" style={{ gridColumn: "1 / -1" }}>
                            Descricao
                            <textarea
                              className="textarea"
                              value={event.description}
                              onChange={(e) => updateTimelineEvent(index, "description", e.target.value)}
                              placeholder="Conte porque esse momento importa."
                            />
                          </label>
                          <label className="label" style={{ gridColumn: "1 / -1" }}>
                            Foto opcional por URL
                            <input
                              className="input"
                              value={event.photo_url ?? ""}
                              onChange={(e) => updateTimelineEvent(index, "photo_url", e.target.value)}
                              placeholder="https://..."
                            />
                          </label>
                        </div>
                        <div className="timeline-toolbar">
                          <button
                            className="button-ghost"
                            type="button"
                            onClick={() => setTimeline((current) => moveItem(current, index, -1))}
                          >
                            Subir
                          </button>
                          <button
                            className="button-ghost"
                            type="button"
                            onClick={() => setTimeline((current) => moveItem(current, index, 1))}
                          >
                            Descer
                          </button>
                          <button
                            className="button-danger"
                            type="button"
                            onClick={() =>
                              setTimeline((current) =>
                                current
                                  .filter((_, itemIndex) => itemIndex !== index)
                                  .map((item, itemIndex) => ({ ...item, display_order: itemIndex }))
                              )
                            }
                          >
                            Remover
                          </button>
                        </div>
                      </article>
                    ))}
                  </div>
                </div>
              ) : null}

              {currentStep === 3 ? (
                <div style={{ marginTop: "1rem" }}>
                  <div className="themes-grid">
                    {themes.map((theme) => (
                      <button
                        key={theme.id}
                        type="button"
                        className={`theme-option ${form.theme === theme.id ? "active" : ""}`}
                        onClick={() => updateField("theme", theme.id)}
                      >
                        <strong>{theme.label}</strong>
                        <div className="muted">Tema visual para a capa e a experiencia publica.</div>
                      </button>
                    ))}
                  </div>
                </div>
              ) : null}

              {currentStep === 4 ? (
                <div className="preview-shell" style={{ marginTop: "1rem" }}>
                  <div className={`preview-hero theme-${form.theme}`}>
                    <span className="eyebrow">Preview</span>
                    <h2>{form.title || "Seu presente vai aparecer aqui"}</h2>
                    <p>{form.headline || "Uma frase bonita abre a experiencia com o tom certo."}</p>
                  </div>
                  <div className="preview-card">
                    <h3>Resumo antes de salvar</h3>
                    <p>
                      <strong>Slug:</strong> /g/{resolvedSlug}
                    </p>
                    <p>
                      <strong>Fotos:</strong> {photos.length}
                    </p>
                    <p>
                      <strong>Timeline:</strong> {timeline.filter((event) => event.title && event.event_date).length} marco(s)
                    </p>
                    <p>
                      <strong>Musica:</strong> {form.music_url || "Nenhuma musica informada"}
                    </p>
                  </div>
                </div>
              ) : null}

              <div className="button-row" style={{ marginTop: "1.2rem" }}>
                <button className="button-secondary" type="button" onClick={() => saveGift("draft")} disabled={loading}>
                  {loading ? "Salvando..." : "Salvar rascunho"}
                </button>
                <button className="button" type="button" onClick={() => saveGift("published")} disabled={loading}>
                  {loading ? "Publicando..." : "Publicar presente"}
                </button>
              </div>

              {message ? <div className="success-box" style={{ marginTop: "1rem" }}>{message}</div> : null}
              {error ? <div className="error-box" style={{ marginTop: "1rem" }}>{error}</div> : null}
            </div>
          </section>

          <aside className="preview-card">
            <span className="eyebrow">Preview rapido</span>
            <h2>{form.title || "Seu presente"}</h2>
            <p className="muted">
              {form.headline || "A frase de abertura aparece aqui quando voce comecar a preencher o formulario."}
            </p>
            <div className="gift-grid">
              <div className="mini-card">
                <strong>{form.giver_name || "Quem presenteia"}</strong>
                <div className="muted">para {form.recipient_name || "quem recebe"}</div>
              </div>
              <div className="mini-card">
                <strong>{photos.length}</strong>
                <div className="muted">foto(s)</div>
              </div>
              <div className="mini-card">
                <strong>{timeline.length}</strong>
                <div className="muted">marco(s)</div>
              </div>
            </div>
            <div className="notice" style={{ marginTop: "1rem" }}>
              Quando voce conectar o checkout, a publicacao pode passar a depender do pagamento aprovado.
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
}