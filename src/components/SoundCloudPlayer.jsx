import { useMemo } from "react";

// Builds the official embed URL for a SoundCloud track id.
function buildEmbedSrc(id, { color="#ff5500", autoPlay=false, showComments=true, showUser=true, showReposts=false, showTeaser=true } = {}) {
  const base = "https://w.soundcloud.com/player/";
  const trackApi = encodeURIComponent(`https://api.soundcloud.com/tracks/${id}`);
  const params = new URLSearchParams({
    url: trackApi,
    color: color.replace("#", "%23"),
    auto_play: String(autoPlay),
    hide_related: "false",
    show_comments: String(showComments),
    show_user: String(showUser),
    show_reposts: String(showReposts),
    show_teaser: String(showTeaser)
  }).toString();
  return `${base}?${params}`;
}

export default function SoundCloudPlayer({
  trackId,
  height = 166,
  color = "#ff5500",
  autoPlay = false,
  showComments = true,
  showUser = true
}) {
  const src = useMemo(
    () => buildEmbedSrc(trackId, { color, autoPlay, showComments, showUser }),
    [trackId, color, autoPlay, showComments, showUser]
  );

  return (
    <iframe
      title={`SoundCloud track ${trackId}`}
      width="100%"
      height={height}
      scrolling="no"
      frameBorder="no"
      allow="autoplay"
      src={src}
    />
  );
}
