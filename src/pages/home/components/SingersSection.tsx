import TeslaAnnouncement from "@/components/TeslaAnnouncement";
import Carousel from "@/components/Carrousel";
import SingersCard from "./SingersCard";
import { Singer } from "@/services/singers";
import Section from "./Section";

export default function SingersSection({
  title,
  singers,
  announcementPosition,
}: PropsTypes) {
  return (
    <Section>
      <h1 className="font-bold text-2xl mb-5">{title}</h1>
      <Carousel>
        {singers.map(({ name, image }, index) => {
          return (
            <div key={`item-${index}`} className="flex flex-row gap-6">
              {announcementPosition === index && <TeslaAnnouncement />}

              <SingersCard name={name} backgroundImage={image} />
            </div>
          );
        })}
      </Carousel>
    </Section>
  );
}

type PropsTypes = {
  title: string;
  singers: Singer[];
  announcementPosition?: number;
};
