import Image from "next/image";
import Carousel from "../../../components/Carrousel";
import AirpodsAnnouncement from "@/components/AirpodsAnnouncement";
import { musicStylesService } from "@/services/music-styles";
import Section from "../components/Section";

const Card = ({
  musicStyle,
  gradientClass,
}: {
  musicStyle: string;
  gradientClass: string;
}) => {
  return (
    <div
      className={`relative w-[208px] h-[208px] ${gradientClass} rounded-lg hover:border-primary hover:border-3`}
    >
      <Image
        className="absolute bottom-0 right-0 pointer-events-none"
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

export default function MusicStyles() {
  const musicStyles = musicStylesService.fetch();

  return (
    <Section>
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
            {musicStyles.map(({ musicStyle, gradientClass }, index) => {
              return (
                <div key={`item-${index}`} className="flex flex-row gap-6">
                  {index === 2 && <AirpodsAnnouncement />}

                  <Card musicStyle={musicStyle} gradientClass={gradientClass} />
                </div>
              );
            })}
          </div>
        </Carousel>
      </div>
    </Section>
  );
}
