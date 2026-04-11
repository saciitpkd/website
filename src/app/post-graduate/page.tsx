import { CouncilPageView } from "@/components/CouncilPageView";
import data from "../../../content/councils/postgraduate.json";
import type { CouncilBundle } from "@/types/content";

export default function PostgraduateCouncilPage() {
  return <CouncilPageView data={data as CouncilBundle} />;
}
