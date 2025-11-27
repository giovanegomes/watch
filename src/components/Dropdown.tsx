"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
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
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkWidth = () => setIsMobile(window.innerWidth < 768);
    checkWidth();

    window.addEventListener("resize", checkWidth);
    return () => window.removeEventListener("resize", checkWidth);
  }, []);

  function toggle() {
    setOpenDropdown(isOpen ? null : id);
  }

  return (
    <div
      className={isMobile ? "py-3 w-full" : "relative inline-block text-left"}
    >
      <button
        onClick={toggle}
        className={
          isMobile
            ? "flex items-center justify-between w-full"
            : "flex flex-row items-center gap-2"
        }
      >
        <div className="flex items-center gap-2">
          {iconPath && <Image src={iconPath} alt="" width={16} height={16} />}
          {label}
        </div>

        {isMobile ? (
          <span>{isOpen ? "–" : "+"}</span>
        ) : (
          <BsChevronDown
            className={`transition-transform ${isOpen && "rotate-180"}`}
          />
        )}
      </button>

      {isMobile && isOpen && (
        <div className="ml-6 mt-2 flex flex-col gap-2">
          {options.map((item) => (
            <a key={item} href="#" className="text-sm py-1">
              {item}
            </a>
          ))}
        </div>
      )}

      {!isMobile && isOpen && (
        <div className="absolute mt-3 w-40 z-20 bg-background shadow-lg">
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
