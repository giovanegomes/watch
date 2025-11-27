import Image from "next/image";
import AnnouncementBadge from "./AnnouncementBadge";
import { IoMdArrowForward } from "react-icons/io";

export default function NikeAnnouncement() {
  return (
    <div className="relative flex flex-row bg-[#F6F6F6] rounded-lg w-[90vw] max-w-[440px] h-[208px] hover:border-primary hover:border-3">
      <AnnouncementBadge />
      <div className="flex-1">
        <Image
          className="absolute pointer-events-none mt-3 ml-5"
          src="/images/logo-nike.png"
          alt="apple logo"
          width={48}
          height={27}
        />
        <div className="h-full flex items-center justify-center ml-10">
          <Image
            className="pointer-events-none p-2"
            src="/images/tenis.png"
            alt="airpods"
            width={180}
            height={100}
          />
        </div>
      </div>
      <div className="w-[1px] bg-black my-6 "></div>
      <div className="flex-1 flex items-center">
        <a
          href="https://www.nike.com/ca/t/air-max-90-futura-shoes-cVb8PP"
          target="_blank"
        >
          <Image
            className="pointer-events-none"
            src="/images/anuncio.png"
            alt="airpods"
            width={212}
            height={130}
          />
        </a>
      </div>
    </div>
  );
}
