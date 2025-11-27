"use client";

import LineUp from "@/pages/home/sections/LineUp";
import MusicStyles from "@/pages/home/sections/MusicalStyles";
import Player from "@/pages/home/sections/Player";
import RockSingers from "@/pages/home/sections/RockSingers";
import WatchAgain from "@/pages/home/sections/WatchAgain";
import YesterdayShows from "@/pages/home/sections/YesterdayShows";
import Banner from "./sections/Banner";
import ExclusiveContent from "./sections/ExclusiveContent";
import Footer from "@/components/Footer";
import InLive from "./sections/InLive";

export default function HomePage() {
  return (
    <div className="w-full">
      <Player />
      <LineUp />
      <MusicStyles />
      <Banner />
      <InLive />
      <YesterdayShows />
      <ExclusiveContent />
      <RockSingers />
      <Banner />
      <WatchAgain />
      <Footer />
    </div>
  );
}
