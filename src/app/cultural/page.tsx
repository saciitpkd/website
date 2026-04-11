import { CouncilPageView } from "@/components/CouncilPageView";
import data from "../../../content/councils/cultural.json";
import type { CouncilBundle } from "@/types/content";

export default function CulturalCouncilPage() {
  return <CouncilPageView data={data as CouncilBundle} />;
}
