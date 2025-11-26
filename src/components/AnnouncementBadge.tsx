import { AiOutlineInfoCircle } from "react-icons/ai";

export default function AnnouncementBadge() {
  return (
    <div className="absolute flex flex-row items-center gap-2 bg-primary text-white px-2 py-1 rounded-full top-2 right-2 z-10">
      <span className="font-light text-[10px]">Announcement</span>
      <AiOutlineInfoCircle />
    </div>
  );
}
