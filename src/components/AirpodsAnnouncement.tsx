import Image from "next/image";
import AnnouncementBadge from "./AnnouncementBadge";
import { IoMdArrowForward } from "react-icons/io";

const Line = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => (
  <div className="flex flex-row gap-2 mb-2 max-w-54">
    <div className="flex-2">
      <p className="text-xs">{title}</p>
    </div>
    <div className="flex-8">
      <p className="text-[8px]">{description}</p>
    </div>
  </div>
);

export default function AirpodsAnnouncement() {
  return (
    <div className="relative flex flex-row min-w-100 bg-black rounded-lg w-[440px] h-[208px] hover:border-primary hover:border-3">
      <AnnouncementBadge />
      <div className="flex-1">
        <Image
          className="absolute pointer-events-none mt-3 ml-5"
          src="/images/apple.png"
          alt="apple logo"
          width={16}
          height={18}
        />
        <div className="h-full flex items-center justify-center ml-10">
          <div className="flex items-center justify-center w-[150px] h-[150px] bg-[radial-gradient(50%_50%_at_50%_50%,rgba(255,255,255,0.45)_0%,rgba(0,0,0,0.45)_100%)]">
            <span className="absolute left-6">AirPods</span>
            <Image
              className="pointer-events-none"
              src="/images/airpods.png"
              alt="airpods"
              width={124}
              height={114}
            />
            <span className="absolute left-45">Pro</span>
          </div>
        </div>
      </div>
      <div className="flex-1 flex items-center">
        <div className="mt-2">
          <Line
            title="24 hrs"
            description="of listening time with multiple additional charges in the case"
          />
          <Line title="4.5 hrs" description="of listening time on one charge" />
          <Line
            title="1 hrs"
            description="of listening time on only 5 minutes of charging"
          />
          <a
            className="underline ml-4 mt-4 flex flex-row items-center gap-1 text-sm"
            href="https://www.apple.com/airpods-pro/"
            target="_blank"
          >
            buy now
            <IoMdArrowForward size={20} />
          </a>
        </div>
      </div>
    </div>
  );
}
