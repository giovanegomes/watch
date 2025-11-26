import { singersService } from "@/services/singers";
import SingersSection from "../components/SingersSection";

export default function WatchAgain() {
  const singers = singersService.fetch();

  return (
    <SingersSection
      title="Watch Again"
      singers={singers}
      announcementPosition={2}
    />
  );
}
