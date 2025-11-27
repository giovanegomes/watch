import { singersService } from "@/services/singers";
import SingersSection from "../components/SingersSection";

export default function RockSingers() {
  const singers = singersService.fetchByStyles("rock");

  return (
    <SingersSection
      title="Rock Singers"
      singers={singers}
      announcementPosition={3}
    />
  );
}
