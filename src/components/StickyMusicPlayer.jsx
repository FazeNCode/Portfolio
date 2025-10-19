import { useState } from "react";
import { soundcloudTracks } from "../data/soundcloudTracks";
import styles from "./StickyMusicPlayer.module.css";

export default function StickyMusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);

  const currentTrack = soundcloudTracks[currentTrackIndex];

  // SIMPLE WORKING APPROACH - Just open SoundCloud
  const handlePlay = () => {
    console.log("🎵 PLAY BUTTON CLICKED!");
    console.log("🔗 Opening:", currentTrack.trackUrl);

    // This WILL work - opens SoundCloud directly
    window.open(currentTrack.trackUrl, '_blank');

    // Visual feedback
    setIsPlaying(true);
    setTimeout(() => {
      setIsPlaying(false);
    }, 2000);
  };

  const handleNext = () => {
    console.log("⏭️ NEXT BUTTON CLICKED!");
    setCurrentTrackIndex((prev) => (prev + 1) % soundcloudTracks.length);
    setIsPlaying(false);
  };

  const handlePrev = () => {
    console.log("⏮️ PREV BUTTON CLICKED!");
    setCurrentTrackIndex((prev) => (prev - 1 + soundcloudTracks.length) % soundcloudTracks.length);
    setIsPlaying(false);
  };

  return (
    <div className={styles.stickyPlayer}>
      <div className={styles.playerControls}>
        <button
          className={styles.controlBtn}
          onClick={handlePrev}
          title="Previous track"
        >
          ⏮
        </button>

        <button
          className={`${styles.playBtn} ${isPlaying ? styles.playing : ''}`}
          onClick={handlePlay}
          title="Play track in SoundCloud"
        >
          {isPlaying ? "✓" : "▶"}
        </button>

        <button
          className={styles.controlBtn}
          onClick={handleNext}
          title="Next track"
        >
          ⏭
        </button>
      </div>

      {/* Track Info */}
      <div className={styles.trackInfo}>
        <div className={styles.trackTitle}>
          Track {currentTrackIndex + 1} of {soundcloudTracks.length}
        </div>
        <div className={styles.trackArtist}>MapleStory Soundtrack</div>
        <div className={styles.trackStatus}>
          {isPlaying ? "Opening SoundCloud..." : "Click ▶ to listen"}
        </div>
      </div>
    </div>
  );
}
