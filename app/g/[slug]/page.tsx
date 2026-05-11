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
    <div className="page-shell public-page">
      <div className="container">
        <section
          className={`public-hero theme-${giftRecord.theme}`}
          style={
            cover
              ? {
                  background: `linear-gradient(180deg, rgba(0,0,0,0.16), rgba(0,0,0,0.48)), url(${cover.public_url}) center/cover`
                }
              : undefined
          }
        >
          <div>
            <span className="eyebrow">Para {giftRecord.recipient_name}</span>
            <h1>{giftRecord.title}</h1>
            <p>{giftRecord.headline}</p>
          </div>
        </section>

        <section className="section">
          <div className="public-card">
            <h2>Uma mensagem especial</h2>
            <p>{giftRecord.message}</p>
            {giftRecord.special_date ? (
              <p className="gift-meta">Data especial: {formatDate(giftRecord.special_date)}</p>
            ) : null}
            {giftRecord.music_url ? (
              <p>
                Musica escolhida:{" "}
                <a href={giftRecord.music_url} target="_blank" rel="noreferrer">
                  abrir link
                </a>
              </p>
            ) : null}
          </div>
        </section>

        {photoList.length > 0 ? (
          <section className="section">
            <h2 className="section-title">Galeria de fotos</h2>
            <div className="public-gallery">
              {photoList.map((photo, index) => (
                <article key={`${photo.public_url}-${index}`} className="public-card">
                  <img src={photo.public_url} alt={photo.caption ?? `Foto ${index + 1}`} />
                  {photo.caption ? <p>{photo.caption}</p> : null}
                </article>
              ))}
            </div>
          </section>
        ) : null}

        {timelineList.length > 0 ? (
          <section className="section">
            <h2 className="section-title">Linha do tempo</h2>
            <div className="timeline-grid">
              {timelineList.map((event) => (
                <article key={`${event.event_date}-${event.title}`} className="timeline-card">
                  <span className="pill">{formatDate(event.event_date)}</span>
                  <h3>{event.title}</h3>
                  <p>{event.description}</p>
                  {event.photo_url ? <img src={event.photo_url} alt={event.title} /> : null}
                </article>
              ))}
            </div>
          </section>
        ) : null}

        <section className="section">
          <div className="final-message public-card">
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
