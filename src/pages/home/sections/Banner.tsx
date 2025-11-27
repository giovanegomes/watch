import Slider from "@/components/Slider";
import Section from "../components/Section";
import { bannerService } from "@/services/banner";

export default function Banner() {
  const banners = bannerService.fetch();
  return (
    <Section>
      <Slider banners={banners} />
    </Section>
  );
}
