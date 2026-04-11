import { CouncilPageView } from "@/components/CouncilPageView";
import data from "../../../content/councils/research.json";
import type { CouncilBundle } from "@/types/content";

export default function ResearchCouncilPage() {
  return <CouncilPageView data={data as CouncilBundle} />;
}
