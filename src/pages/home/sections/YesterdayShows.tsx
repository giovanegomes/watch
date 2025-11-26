import { singersService } from "@/services/singers";
import SingersSection from "../components/SingersSection";

export default function YesterdayShows() {
  const singers = singersService.fetch();

  return <SingersSection title="Yesterday Shows" singers={singers} />;
}
