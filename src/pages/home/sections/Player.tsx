"use client";
import { VscDeviceCameraVideo } from "react-icons/vsc";
import { LuVolume2 } from "react-icons/lu";
import { GoGear } from "react-icons/go";
import { CgMaximize } from "react-icons/cg";
import Image from "next/image";

export default function Player() {
  return (
    <div className="relative mt-16 w-full h-screen overflow-hidden">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="/videos/video.mp4"
        autoPlay
        loop
        muted
      />
      <div className="absolute inset-0 flex flex-col justify-between p-6 pointer-events-none px-20">
        <div>
          <h1 className="text-white text-3xl font-bold pointer-events-auto mt-10">
            Avril Lavigne
          </h1>
          <div className="flex flex-row gap-2 mt-2">
            <p>LIVE</p>
            <p>&#x2022;</p>
            <p>Sunset</p>
            <p>&#x2022;</p>
            <p>Singer camera</p>
          </div>
        </div>
        <div className="flex items-center justify-between gap-4 pb-10 pointer-events-auto">
          <button className="flex flex-row items-center gap-2 bg-primary hover:bg-red-600 text-white px-4 py-2 rounded-full transition cursor-pointer">
            <VscDeviceCameraVideo />
            Choose your camera
          </button>
          <div>
            <button className=" px-4 py-2  transition cursor-pointer">
              <Image
                src="/icons-player.svg"
                alt="user"
                width={40}
                height={40}
              />
            </button>
            <button className=" px-4 py-2  transition cursor-pointer">
              <CgMaximize size={40} />
            </button>
            <button className=" px-4 py-2  transition cursor-pointer">
              <LuVolume2 size={40} />
            </button>
            <button className=" px-4 py-2  transition cursor-pointer">
              <GoGear size={40} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
