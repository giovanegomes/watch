"use client";

import LineUp from "@/pages/home/sections/LineUp";
import MusicStyles from "@/pages/home/sections/MusicalStyles";
import Player from "@/pages/home/sections/Player";
import RockSingers from "@/pages/home/sections/RockSingers";
import WatchAgain from "@/pages/home/sections/WatchAgain";
import YesterdayShows from "@/pages/home/sections/YesterdayShows";

export default function HomePage() {
  return (
    <div className="w-full">
      <Player />
      <LineUp />
      <MusicStyles />
      <YesterdayShows />
      <RockSingers />
      <WatchAgain />
    </div>
  );
}
