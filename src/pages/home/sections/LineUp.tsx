import SingersCard from "@/pages/home/components/SingersCard";
import Announcement from "../../../components/Announcement";
import Carousel from "../../../components/Carrousel";
import { singersService } from "@/services/singers";

export default function LineUp() {
  const singers = singersService.fetch();

  return (
    <section className="w-full px-20 my-10">
      <h1 className="font-bold text-2xl mb-5">Line Up</h1>
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
