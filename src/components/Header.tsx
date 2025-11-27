"use client";

import { useState } from "react";
import Image from "next/image";
import { GoGear, GoHome, GoBroadcast } from "react-icons/go";
import Dropdown from "./Dropdown";

const MUSIC_STYLES = ["Rock", "Pop", "Funk", "MPB", "Jazz", "Trap", "Rap"];
const EXCLUSIVE_CONTENT = [
  "Back Stage",
  "Interviews",
  "Latest News",
  "Last Editions",
  "Watch Again",
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const headerBackground = open
    ? "bg-[rgba(20,20,22,0.95)]"
    : "bg-[linear-gradient(180deg,#2B2B2E_0%,rgba(43,43,46,0.6)_54.69%,rgba(43,43,46,0)_100%),linear-gradient(0deg,rgba(0,0,0,0.1),rgba(0,0,0,0.1))]";

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${headerBackground}`}
    >
      <div className="container-fluid flex items-end justify-between px-6 md:px-16 py-2">
        <div className="flex items-end gap-8">
          <a href="#home" className="min-w-20 flex items-end">
            <Image
              src="/logo.svg"
              alt="Logo"
              width={160}
              height={46}
              className="w-32 md:w-[160px]"
            />
          </a>

          <nav className="hidden md:flex gap-8 text-dark font-medium items-end">
            <a
              href="#home"
              className="hover:text-primary transition flex items-center gap-2"
            >
              <GoHome /> Home
            </a>

            <a
              href="#live"
              className="hover:text-primary transition flex items-center gap-2"
            >
              <GoBroadcast /> Live
            </a>

            <Dropdown
              id="styles"
              label="Musical Styles"
              openDropdown={openDropdown}
              setOpenDropdown={setOpenDropdown}
              iconPath="/sound.svg"
              optionsTitle="Styles:"
              options={MUSIC_STYLES}
            />

            <Dropdown
              id="content"
              label="Exclusive Content"
              openDropdown={openDropdown}
              setOpenDropdown={setOpenDropdown}
              iconPath="/star.svg"
              optionsTitle="Content:"
              options={EXCLUSIVE_CONTENT}
            />
          </nav>
        </div>

        <div className="hidden md:flex items-center px-6 gap-2">
          <Image src="/user.svg" alt="user" width={32} height={32} />
          <p className="font-bold">Peter Parker</p>
          <GoGear />
        </div>

        <button
          className="md:hidden text-white text-3xl"
          onClick={() => {
            setOpen(!open);
            setOpenDropdown(null);
          }}
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {open && (
        <nav className="md:hidden border-t border-white/10 flex flex-col px-6 py-4 bg-[rgba(20,20,22,0.95)]">
          <a href="#home" className="py-3 flex items-center gap-2">
            <GoHome /> Home
          </a>

          <a href="#live" className="py-3 flex items-center gap-2">
            <GoBroadcast /> Live
          </a>

          <Dropdown
            id="styles"
            label="Musical Styles"
            openDropdown={openDropdown}
            setOpenDropdown={setOpenDropdown}
            iconPath="/sound.svg"
            options={MUSIC_STYLES}
          />
          <Dropdown
            id="content"
            label="Exclusive Content"
            openDropdown={openDropdown}
            setOpenDropdown={setOpenDropdown}
            iconPath="/star.svg"
            options={EXCLUSIVE_CONTENT}
          />

          <div className="mt-4 border-t border-white/10 pt-4 flex items-center gap-3">
            <Image src="/user.svg" alt="user" width={28} height={28} />
            <p className="font-bold">Peter Parker</p>
            <GoGear className="text-xl" />
          </div>
        </nav>
      )}
    </header>
  );
}
