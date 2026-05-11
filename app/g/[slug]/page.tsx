import { notFound } from "next/navigation";

import { createClient } from "@/lib/supabase/server";
import { formatDate } from "@/lib/utils";
import type { GiftPhoto, GiftRecord, TimelineEvent } from "@/types/gifts";

export default async function PublicGiftPage({
  params
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const supabase = await createClient();

  const { data: gift } = await supabase
    .from("gifts")
    .select("*")
    .eq("slug", slug)
    .eq("is_public", true)
    .single();

  if (!gift) {
    notFound();
  }

  const { data: photos } = await supabase
    .from("gift_photos")
    .select("*")
    .eq("gift_id", gift.id)
    .order("display_order", { ascending: true });

  const { data: timeline } = await supabase
    .from("timeline_events")
    .select("*")
    .eq("gift_id", gift.id)
    .order("display_order", { ascending: true });

  const giftRecord = gift as GiftRecord;
  const photoList = (photos ?? []) as GiftPhoto[];
  const timelineList = (timeline ?? []) as TimelineEvent[];
  const cover = photoList.find((photo) => photo.is_cover) ?? photoList[0];

  return (
    <div className="page-shell public-page public-page-romance">
      <div className="container">
        <section
          className={`public-hero public-hero-luxe theme-${giftRecord.theme}`}
          style={
            cover
              ? {
                  background: `linear-gradient(180deg, rgba(7, 9, 24, 0.08), rgba(9, 8, 20, 0.62)), url(${cover.public_url}) center/cover`
                }
              : undefined
          }
        >
          <div className="public-hero-copy">
            <span className="eyebrow">Para {giftRecord.recipient_name}</span>
            <h1>{giftRecord.title}</h1>
            <p>{giftRecord.headline}</p>

            <div className="hero-metadata">
              {giftRecord.special_date ? (
                <div className="hero-metadata-chip">
                  <strong>{formatDate(giftRecord.special_date)}</strong>
                  <span>data especial</span>
                </div>
              ) : null}
              <div className="hero-metadata-chip">
                <strong>{photoList.length}</strong>
                <span>memoria(s)</span>
              </div>
              <div className="hero-metadata-chip">
                <strong>{timelineList.length}</strong>
                <span>capitulo(s)</span>
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="public-story-grid">
            <article className="public-card public-card-spotlight">
              <span className="pill">Carta de abertura</span>
              <h2>Uma mensagem especial</h2>
              <p>{giftRecord.message}</p>
            </article>

            <article className="public-card public-card-music">
              <span className="pill">Clima da memoria</span>
              <h2>Nossa trilha</h2>
              <p>
                {giftRecord.music_url
                  ? "A musica escolhida ja esta pronta para acompanhar a experiencia."
                  : "Voce pode adicionar uma musica para deixar o presente ainda mais envolvente."}
              </p>
              {giftRecord.music_url ? (
                <a href={giftRecord.music_url} target="_blank" rel="noreferrer" className="button-secondary">
                  Abrir musica
                </a>
              ) : null}
            </article>
          </div>
        </section>

        {photoList.length > 0 ? (
          <section className="section">
            <div className="section-heading">
              <span className="eyebrow">Galeria</span>
              <h2 className="section-title">Momentos que merecem brilhar.</h2>
            </div>

            <div className="public-gallery public-gallery-luxe">
              {photoList.map((photo, index) => (
                <article key={`${photo.public_url}-${index}`} className="public-card public-gallery-card">
                  <img src={photo.public_url} alt={photo.caption ?? `Foto ${index + 1}`} />
                  <div className="gallery-overlay">
                    <span>Memoria {String(index + 1).padStart(2, "0")}</span>
                    {photo.caption ? <p>{photo.caption}</p> : <p>Um instante para guardar no peito.</p>}
                  </div>
                </article>
              ))}
            </div>
          </section>
        ) : null}

        {timelineList.length > 0 ? (
          <section className="section">
            <div className="section-heading">
              <span className="eyebrow">Linha do tempo</span>
              <h2 className="section-title">Capitulos de uma historia que vale ser revivida.</h2>
            </div>

            <div className="timeline-stack">
              {timelineList.map((event) => (
                <article key={`${event.event_date}-${event.title}`} className="timeline-card timeline-card-luxe">
                  <div className="timeline-card-head">
                    <span className="pill">{formatDate(event.event_date)}</span>
                    <div className="timeline-thread-dot" />
                  </div>
                  <div className="timeline-card-body">
                    <h3>{event.title}</h3>
                    <p>{event.description}</p>
                    {event.photo_url ? (
                      <div className="timeline-image-wrap">
                        <img src={event.photo_url} alt={event.title} />
                      </div>
                    ) : null}
                  </div>
                </article>
              ))}
            </div>
          </section>
        ) : null}

        <section className="section">
          <div className="final-message public-card final-message-luxe">
            <span className="pill">Encerramento</span>
            <h2>Mensagem final</h2>
            <p>{giftRecord.final_message || "Com amor, para sempre."}</p>
            <p>
              Com carinho, <strong>{giftRecord.giver_name}</strong>
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
