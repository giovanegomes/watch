import Image from "next/image";
import Carousel from "./Carrousel";

const Card = ({
  musicStyle,
  gradientClass,
}: {
  musicStyle: string;
  gradientClass: string;
}) => {
  return (
    <div className={`relative w-[208px] h-[208px] ${gradientClass} rounded-md`}>
      <Image
        className="absolute bottom-0 right-0"
        src="/images/vector.png"
        width={120}
        height={72}
        alt=""
      />
      <div className="pt-28 pl-3">
        <h3 className="font-bold text-3xl">{musicStyle}</h3>
        <h4 className="text-2xl">Festival</h4>
      </div>
    </div>
  );
};

const MUSIC_STYLES = [
  {
    musicStyle: "Rock",
    gradientClass: "bg-gradient-to-b from-[#2433C0] to-[#4F60FF]",
  },
  {
    musicStyle: "Pop",
    gradientClass: "bg-gradient-to-b from-[#06DE03] to-[#016500]",
  },
  {
    musicStyle: "Funk",
    gradientClass: "bg-gradient-to-b from-[#AF01CA] to-[#5E006C]",
  },
  {
    musicStyle: "Jazz",
    gradientClass: "bg-gradient-to-b from-[#FF6100] to-[#BF4900]",
  },
  {
    musicStyle: "Samba",
    gradientClass: "bg-gradient-to-b from-[#FF009A] to-[#A30062]",
  },
  {
    musicStyle: "MPB",
    gradientClass: "bg-gradient-to-b from-[#FFA801] to-[#7A5000]",
  },
  {
    musicStyle: "Trap",
    gradientClass: "bg-gradient-to-b from-[#00C0FF] to-[#006A8D]",
  },
  {
    musicStyle: "Rap",
    gradientClass: "bg-gradient-to-b from-[#FF0100] to-[#A80100]",
  },
];

export default function MusicStyles() {
  return (
    <section className="w-full px-20 my-10">
      <div className="flex flex row">
        <div className="max-w-[180px]">
          <p className="font-bold text-lg mb-6">Festival for you</p>
          <p className="mb-6">
            Explore your favorite genres and discover new rhythms to love!
          </p>
          <button className="bg-primary hover:bg-red-600 text-white px-4 py-1 rounded-full cursor-pointer">
            See All
          </button>
        </div>
        <Carousel>
          <div className="flex flex-row gap-6 ml-20">
            {MUSIC_STYLES.map(({ musicStyle, gradientClass }) => (
              <Card musicStyle={musicStyle} gradientClass={gradientClass} />
            ))}
          </div>
        </Carousel>
      </div>
    </section>
  );
}
