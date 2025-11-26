"use client";

import LineUp from "@/components/LineUp";
import MusicStyles from "@/components/MusicalStyles";
import Player from "@/components/Player";

export default function Home() {
  return (
    <div className="w-full">
      <Player />
      <LineUp />
      <MusicStyles />
    </div>
  );
}
