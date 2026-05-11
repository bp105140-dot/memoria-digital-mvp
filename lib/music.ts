export type MusicEmbed =
  | {
      provider: "youtube";
      embedUrl: string;
      watchUrl: string;
      label: string;
    }
  | {
      provider: "spotify";
      embedUrl: string;
      watchUrl: string;
      label: string;
    };

function getYouTubeId(url: URL) {
  if (url.hostname.includes("youtu.be")) {
    return url.pathname.split("/").filter(Boolean)[0] ?? null;
  }

  if (url.pathname === "/watch") {
    return url.searchParams.get("v");
  }

  if (url.pathname.startsWith("/shorts/") || url.pathname.startsWith("/embed/")) {
    return url.pathname.split("/").filter(Boolean)[1] ?? null;
  }

  return null;
}

function getSpotifyId(url: URL) {
  const parts = url.pathname.split("/").filter(Boolean);
  if (parts.length < 2) return null;

  const [resource, id] = parts;
  if (!["track", "album", "playlist", "episode"].includes(resource)) {
    return null;
  }

  return { resource, id };
}

export function getMusicEmbed(urlValue: string | null | undefined): MusicEmbed | null {
  if (!urlValue?.trim()) return null;

  try {
    const url = new URL(urlValue.trim());
    const hostname = url.hostname.replace(/^www\./, "");

    if (hostname.includes("youtube.com") || hostname.includes("youtu.be")) {
      const videoId = getYouTubeId(url);
      if (!videoId) return null;

      return {
        provider: "youtube",
        embedUrl: `https://www.youtube.com/embed/${videoId}?autoplay=1&playsinline=1&rel=0&modestbranding=1&controls=1`,
        watchUrl: `https://www.youtube.com/watch?v=${videoId}`,
        label: "Clipe no YouTube"
      };
    }

    if (hostname.includes("spotify.com")) {
      const spotify = getSpotifyId(url);
      if (!spotify) return null;

      return {
        provider: "spotify",
        embedUrl: `https://open.spotify.com/embed/${spotify.resource}/${spotify.id}?utm_source=generator`,
        watchUrl: url.toString(),
        label: "Faixa no Spotify"
      };
    }
  } catch {
    return null;
  }

  return null;
}