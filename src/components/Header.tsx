"use client";

import { useState } from "react";
import Image from "next/image";
import { GoGear } from "react-icons/go";
import { GoHome } from "react-icons/go";
import { GoBroadcast } from "react-icons/go";
import Dropdown from "./Dropdown";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[linear-gradient(180deg,#2B2B2E_0%,rgba(43,43,46,0.6)_54.69%,rgba(43,43,46,0)_100%),linear-gradient(0deg,rgba(0,0,0,0.1),rgba(0,0,0,0.1))]">
      <div className="container-fluid flex items-end justify-between px-16 py-2">
        <nav className="hidden md:flex gap-8 text-dark font-medium flex items-end">
          <a href="#home" className="hover:text-primary transition min-w-20">
            <Image src="/logo.svg" alt="Logo" width={160} height={46} />
          </a>
          <a
            href="#home"
            className="hover:text-primary transition gap-2 flex flex-row items-center"
          >
            <GoHome />
            Home
          </a>
          <a
            href="#live"
            className="hover:text-primary transition gap-2 flex flex-row items-center"
          >
            <GoBroadcast />
            Live
          </a>
          <Dropdown
            id="styles"
            label="Musical Styles"
            openDropdown={openDropdown}
            setOpenDropdown={setOpenDropdown}
            iconPath="/sound.svg"
            optionsTitle="Styles:"
            options={["Rock", "Pop", "Funk", "MPB", "Jazz", "Trap", "Rap"]}
          />
          <Dropdown
            id="content"
            label="Exclusive Content"
            openDropdown={openDropdown}
            setOpenDropdown={setOpenDropdown}
            iconPath="/star.svg"
            optionsTitle="Content:"
            options={[
              "Back Stage",
              "Interviews",
              "Latest News",
              "Last Editions",
              "Watch Again",
            ]}
          />
        </nav>

        <div className="hidden md:flex flex items-center px-6 gap-2">
          <Image src="/user.svg" alt="user" width={32} height={32} />
          <p className="font-bold">Peter Parker</p>
          <GoGear />
        </div>

        <button
          className="md:hidden text-dark"
          onClick={() => setOpen(!open)}
          aria-label="Abrir menu"
        >
          ☰
        </button>
      </div>

      {open && (
        <nav className="md:hidden border-t border-gray-200 flex flex-col px-6 py-4 bg-[linear-gradient(180deg,#2B2B2E_0%,rgba(43,43,46,0.6)_54.69%,rgba(43,43,46,0)_100%),linear-gradient(0deg,rgba(0,0,0,0.1),rgba(0,0,0,0.1))]">
          <a href="#about" className="py-2">
            Home
          </a>
          <a href="#services" className="py-2">
            Live
          </a>
          <a href="#contact" className="py-2">
            Musical Styles
          </a>
          <a href="#differentials" className="py-2">
            Exclusive Content
          </a>
        </nav>
      )}
    </header>
  );
}
