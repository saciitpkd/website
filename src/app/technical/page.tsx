import { CouncilPageView } from "@/components/CouncilPageView";
import data from "../../../content/councils/technical.json";
import type { CouncilBundle } from "@/types/content";

export default function TechnicalCouncilPage() {
  return <CouncilPageView data={data as CouncilBundle} />;
}
