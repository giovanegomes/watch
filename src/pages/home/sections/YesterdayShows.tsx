import SingersCard from "@/pages/home/components/SingersCard";
import Announcement from "../../../components/Announcement";
import Carousel from "../../../components/Carrousel";
import { singersService } from "@/services/singers";

const LINE_UP = [
  { name: "Iron Maiden", image: "iron-maiden.png" },
  { name: "Alok", image: "alok.png" },
  { name: "Rita Ora", image: "rita-ora.png" },
  { name: "Dream Theater", image: "dream-theater.png" },
  { name: "announcement", image: "" },
  { name: "Dua Lipa", image: "dua-lipa.png" },
  { name: "Måneskin", image: "maneskin.png" },
  { name: "Emicida", image: "emicida.png" },
  { name: "Coldplay", image: "coldplay.png" },
  { name: "Justin Bieber", image: "justin-bieber.png" },
  { name: "Luísa Sonza", image: "luisa-sonza.png" },
  { name: "Marshmello", image: "marshmello.png" },
  { name: "Djavan", image: "djavan.png" },
  { name: "Offspring", image: "offspring.png" },
  { name: "Avril Lavigne", image: "avril-lavigne.png" },
  { name: "Black Pantera", image: "black-pantera.png" },
  { name: "Ed Sheeran", image: "ed-sheeran.jpg" },
];

export default function YesterdayShows() {
  const singers = singersService.fetch();

  return (
    <section className="w-full px-20 my-10">
      <h1 className="font-bold text-2xl mb-5">Yesterday Shows</h1>
      <Carousel>
        {singers.map(({ name, image }) => {
          if (name === "announcement")
            return <Announcement key="announcement" />;

          return <SingersCard key={name} name={name} backgroundImage={image} />;
        })}
      </Carousel>
    </section>
  );
}
