import SingersCard from "@/pages/home/components/SingersCard";
import Announcement from "../../../components/Announcement";
import Carousel from "../../../components/Carrousel";
import { singersService } from "@/services/singers";

export default function RockSingers() {
  const singers = singersService.fetchByStyles("rock");

  return (
    <section className="w-full px-20 my-10">
      <h1 className="font-bold text-2xl mb-5">Rock Singers</h1>
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
