import { CouncilPageView } from "@/components/CouncilPageView";
import data from "../../../content/councils/sports.json";
import type { CouncilBundle } from "@/types/content";

export default function SportsCouncilPage() {
  return <CouncilPageView data={data as CouncilBundle} />;
}
