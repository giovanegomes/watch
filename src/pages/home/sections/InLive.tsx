import { stageService } from "@/services/stage";
import Section from "../components/Section";
import Carousel from "@/components/Carrousel";

const Card = ({ stage, image }: { stage: string; image: string }) => {
  return (
    <div
      className={`flex flex-col bg-[#3D3D3F] w-[440px] h-[288px] rounded-lg hover:border-primary hover:border-3`}
    >
      <div
        className="h-[208px] rounded-t-md bg-cover bg-center bg-no-repeat "
        style={{ backgroundImage: `url('/images/${image}')` }}
      />
      <div className="mx-4 flex flex-col justify-around flex-1 min-h-0">
        <div className="flex flex-row justify-between">
          <p className="text-sm text-primary">Demi Lovato</p>
          <div className="flex flex-row items-center gap-2">
            <div className="w-2 h-2 my-2 rounded-full bg-danger" />
            <p className="text-sm text-danger">Live</p>
          </div>
        </div>
        <div className="flex flex-row justify-between">
          <p className="text-sm">{stage}</p>
          <p className="text-sm">dd.mm.aa - 00:00 h</p>
        </div>
      </div>
    </div>
  );
};

export default function InLive() {
  const stages = stageService.fetch();

  return (
    <Section title="In Live">
      <Carousel>
        <div className="flex flex-row gap-6">
          {stages.map(({ stage, image }) => {
            return <Card key={stage} stage={stage} image={image} />;
          })}
        </div>
      </Carousel>
    </Section>
  );
}
