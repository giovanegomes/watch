"use client";

import Image from "next/image";
import { useState } from "react";
import { BsChevronDown } from "react-icons/bs";

export default function Dropdown({
  id,
  label,
  options,
  optionsTitle,
  iconPath,
  openDropdown,
  setOpenDropdown,
}: PropsTypes) {
  const isOpen = openDropdown === id;

  function toggle() {
    setOpenDropdown(isOpen ? null : id);
  }
  return (
    <div className="relative inline-block text-left">
      <button className=" flex flex-row items-center gap-2" onClick={toggle}>
        {iconPath && <Image src={iconPath} alt="" width={16} height={16} />}
        {label} <BsChevronDown />
      </button>

      {isOpen && (
        <div className="absolute mt-3 w-40 z-20 bg-background">
          <ul className="block p-4">
            <li className="font-bold">{optionsTitle}</li>
            {options.map((option) => (
              <li key={option}>
                <a href={`#${option}`} className="block py-2">
                  {option}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

type PropsTypes = {
  id: string;
  label: string;
  options: string[];
  openDropdown: string | null;
  setOpenDropdown: (id: string | null) => void;
  optionsTitle?: string;
  iconPath?: string;
};
