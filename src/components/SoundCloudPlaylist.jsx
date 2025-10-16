import { useState } from "react";
import SoundCloudPlayer from "./SoundCloudPlayer";
import { soundcloudTracks } from "../data/soundcloudTracks";
import styles from "./SoundCloudPlaylist.module.css";

export default function SoundCloudPlaylist() {
  const [current, setCurrent] = useState(soundcloudTracks[0]);
  const [autoPlay, setAutoPlay] = useState(false);

  return (
    <section className={styles.wrap} aria-label="MapleStory soundtrack playlist">
      <div className={styles.header}>
        <h2 style={{margin: 0}}>🎵 MapleStory BGM</h2>
        <div className={styles.controls} aria-label="Playback options">
          <label style={{display: "flex", alignItems: "center", gap: 8}}>
            <input
              type="checkbox"
              className={styles.toggle}
              checked={autoPlay}
              onChange={(e) => setAutoPlay(e.target.checked)}
              aria-label="Autoplay on track change"
            />
            <span>Autoplay</span>
          </label>
        </div>
      </div>

      <div className={styles.list} role="listbox" aria-label="Tracks">
        {soundcloudTracks.map((t) => (
          <button
            key={t.id}
            className={styles.item}
            onClick={() => setCurrent(t)}
            aria-current={current.id === t.id}
          >
            <span className={styles.title}>{t.title}</span>
            <span className={styles.meta}>{t.artist}</span>
            <span className={styles.meta}>ID: {t.id}</span>
          </button>
        ))}
      </div>

      <SoundCloudPlayer
        trackId={current.id}
        color={current.color}
        autoPlay={autoPlay}
        showComments={true}
        showUser={true}
        height={166}
      />

      <div className={styles.attrib}>
        <a href={current.artistUrl} target="_blank" rel="noreferrer">{current.artist}</a>
        {" · "}
        <a href={current.trackUrl} target="_blank" rel="noreferrer">{current.title}</a>
      </div>
    </section>
  );
}
