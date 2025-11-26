import { singersService } from "@/services/singers";
import SingersSection from "../components/SingersSection";

export default function LineUp() {
  const singers = singersService.fetch();

  return (
    <SingersSection
      title="Line Up"
      singers={singers}
      announcementPosition={4}
    />
  );
}
