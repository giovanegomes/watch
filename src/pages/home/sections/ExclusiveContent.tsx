import Image from "next/image";
import Carousel from "../../../components/Carrousel";
import AirpodsAnnouncement from "@/components/AirpodsAnnouncement";
import Section from "../components/Section";
import { exclusiveContentService } from "@/services/exclusive-content";
import TeslaAnnouncement from "@/components/TeslaAnnouncement";
import TeslaAnnouncementSmall from "@/components/TeslaAnnouncementSmall";
import NikeAnnouncement from "@/components/NikeAnnouncement";

const Card = ({
  content,
  backgroundImage,
}: {
  content: string;
  backgroundImage: string;
}) => {
  return (
    <div
      className="relative bg-white w-[90vw] max-w-[440px] h-[208px] rounded-md bg-cover bg-center bg-no-repeat hover:border-primary hover:border-3"
      style={{ backgroundImage: `url('/images/${backgroundImage}')` }}
    >
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/90 via-black/40 to-transparent rounded-md" />
      <Image
        className="absolute bottom-0 right-0 pointer-events-none"
        src="/images/vector.png"
        width={120}
        height={72}
        alt=""
      />
      <div className="pt-28 pl-4">
        <h3 className="font-bold text-3xl">{content}</h3>
        <h4 className="text-2xl">Festival</h4>
      </div>
    </div>
  );
};

export default function ExclusiveContent() {
  const content = exclusiveContentService.fetch();

  return (
    <Section title="Exclusive Content">
      <Carousel>
        <div className="flex flex-row gap-6">
          {content.map(({ content, backgroundImage }, index) => {
            return (
              <div key={`item-${index}`} className="flex flex-row gap-6">
                {index === 2 && <NikeAnnouncement />}
                {index === 3 && (
                  <>
                    <TeslaAnnouncementSmall />
                    <AirpodsAnnouncement />
                  </>
                )}

                <Card content={content} backgroundImage={backgroundImage} />
              </div>
            );
          })}
        </div>
      </Carousel>
    </Section>
  );
}
