import { CouncilPageView } from "@/components/CouncilPageView";
import data from "../../../content/councils/hostel.json";
import type { CouncilBundle } from "@/types/content";

export default function HostelCouncilPage() {
  return <CouncilPageView data={data as CouncilBundle} />;
}
