import { CouncilPageView } from "@/components/CouncilPageView";
import data from "../../../content/councils/academic.json";
import type { CouncilBundle } from "@/types/content";

export default function AcademicCouncilPage() {
  return <CouncilPageView data={data as CouncilBundle} />;
}
