"use client";
import { VscDeviceCameraVideo } from "react-icons/vsc";
import { LuVolume2 } from "react-icons/lu";
import { GoGear } from "react-icons/go";
import { CgMaximize } from "react-icons/cg";
import Image from "next/image";

export default function Player() {
  return (
    <div className="relative mt-16 w-full h-[80vh] md:h-screen overflow-hidden">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="/videos/video.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
      <div className="absolute inset-0 flex flex-col justify-between p-4 sm:p-6 md:p-10 lg:px-20 pointer-events-none">
        <div className="pointer-events-auto mt-8">
          <h1 className="text-white text-2xl sm:text-3xl md:text-4xl font-bold">
            Avril Lavigne
          </h1>
          <div className="flex flex-wrap items-center gap-1 mt-2 text-sm sm:text-base">
            <p>LIVE</p>
            <p>•</p>
            <p>Sunset</p>
            <p>•</p>
            <p>Singer camera</p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 pb-6 pointer-events-auto">
          <button className="flex items-center justify-center gap-2 bg-primary hover:bg-red-600 text-white px-4 py-2 rounded-full transition cursor-pointer w-full md:w-auto">
            <VscDeviceCameraVideo />
            Choose your camera
          </button>
          <div className="flex flex-row justify-center md:justify-end gap-3">
            <button className="p-2">
              <Image
                src="/icons-player.svg"
                alt="user"
                width={32}
                height={32}
                className="sm:w-10 sm:h-10"
              />
            </button>
            <button className="p-2">
              <CgMaximize size={32} className="sm:size-10" />
            </button>
            <button className="p-2">
              <LuVolume2 size={32} className="sm:size-10" />
            </button>
            <button className="p-2">
              <GoGear size={32} className="sm:size-10" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
