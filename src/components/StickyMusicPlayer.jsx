import { useState, useRef, useEffect } from "react";
import { soundcloudTracks } from "../data/soundcloudTracks";
import styles from "./StickyMusicPlayer.module.css";

export default function StickyMusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const iframeRef = useRef(null);

  // Listen for messages from the SoundCloud iframe to detect when track ends
  useEffect(() => {
    const handleMessage = (event) => {
      if (event.origin === 'https://w.soundcloud.com') {
        try {
          const data = JSON.parse(event.data);
          // Listen for finish event when track ends
          if (data.method === 'finish' || (data.type && data.type === 'finish')) {
            setIsPlaying(false); // Reset button when track finishes
          }
        } catch (e) {
          // Handle non-JSON messages
          if (typeof event.data === 'string' && event.data.includes('finish')) {
            setIsPlaying(false);
          }
        }
      }
    };

    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, []);

  // Additional effect to enable SoundCloud Widget API events
  useEffect(() => {
    if (isPlaying && iframeRef.current) {
      // Enable API events for the SoundCloud widget
      const iframe = iframeRef.current;
      iframe.onload = () => {
        iframe.contentWindow.postMessage('{"method":"addEventListener","value":"finish"}', 'https://w.soundcloud.com');
      };
    }
  }, [isPlaying]);

  const currentTrack = soundcloudTracks[currentTrackIndex];

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const nextTrack = () => {
    setCurrentTrackIndex((prev) => (prev + 1) % soundcloudTracks.length);
  };

  const prevTrack = () => {
    setCurrentTrackIndex((prev) => (prev - 1 + soundcloudTracks.length) % soundcloudTracks.length);
  };

  // Build SoundCloud embed URL
  const buildEmbedSrc = (trackId, autoPlay = false) => {
    const base = "https://w.soundcloud.com/player/";
    const trackApi = encodeURIComponent(`https://api.soundcloud.com/tracks/${trackId}`);
    const params = new URLSearchParams({
      url: trackApi,
      color: "%23ff5500",
      auto_play: String(autoPlay),
      hide_related: "true",
      show_comments: "false",
      show_user: "false",
      show_reposts: "false",
      show_teaser: "false",
      visual: "true"
    }).toString();
    return `${base}?${params}`;
  };

  return (
    <div className={styles.stickyPlayer}>
      <div className={styles.playerControls}>
        <button 
          className={styles.controlBtn} 
          onClick={prevTrack}
          title="Previous track"
        >
          ⏮
        </button>
        
        <button 
          className={`${styles.playBtn} ${isPlaying ? styles.playing : ''}`}
          onClick={togglePlay}
          title={isPlaying ? "Pause" : "Play"}
        >
          {isPlaying ? "⏸" : "▶"}
        </button>
        
        <button 
          className={styles.controlBtn} 
          onClick={nextTrack}
          title="Next track"
        >
          ⏭
        </button>
      </div>



      {isPlaying && (
        <div className={styles.hiddenPlayer}>
          <iframe
            ref={iframeRef}
            title={`SoundCloud track ${currentTrack.id}`}
            width="100%"
            height="166"
            scrolling="no"
            frameBorder="no"
            allow="autoplay"
            src={buildEmbedSrc(currentTrack.id, true)}
          />
        </div>
      )}
    </div>
  );
}
