"use client";

import { useEffect, useRef, useState } from "react";

export default function WeddingMusic() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;

    if (!audio) {
      return;
    }

    audio.volume = 0.45;

    const playMusic = async () => {
      try {
        await audio.play();
        setIsPlaying(true);
      } catch {
        setIsPlaying(false);
      }
    };

    playMusic();

    const unlockMusic = () => {
      playMusic();
      window.removeEventListener("click", unlockMusic);
      window.removeEventListener("touchstart", unlockMusic);
    };

    window.addEventListener("click", unlockMusic, { once: true });
    window.addEventListener("touchstart", unlockMusic, { once: true });

    return () => {
      window.removeEventListener("click", unlockMusic);
      window.removeEventListener("touchstart", unlockMusic);
    };
  }, []);

  const toggleMusic = async () => {
    const audio = audioRef.current;

    if (!audio) {
      return;
    }

    if (audio.paused) {
      await audio.play();
      setIsPlaying(true);
      return;
    }

    audio.pause();
    setIsPlaying(false);
  };

  return (
    <>
      <audio ref={audioRef} src="/when-god-made-you.mp3" loop preload="auto" />
      <button
        type="button"
        onClick={toggleMusic}
        aria-label={isPlaying ? "Matikan musik" : "Putar musik"}
        className="fixed bottom-5 right-5 z-50 flex h-12 w-12 items-center justify-center rounded-full border border-[#c8b996]/80 bg-[#191917]/90 text-[#fffdf8] shadow-xl shadow-black/20 backdrop-blur transition duration-500 hover:bg-[#745106] sm:bottom-7 sm:right-7"
      >
        <span className="text-[11px] font-bold tracking-[0.12em]" aria-hidden="true">
          {isPlaying ? "II" : "PLAY"}
        </span>
      </button>
    </>
  );
}
