import { PageShell } from "@/components/PageShell";
import { RacScholars } from "@/components/RacScholars";
import raw from "../../../../content/rac-scholars.json";
import type { RacScholar } from "@/types/content";

const scholars = raw as RacScholar[];

export default function RacPage() {
  return (
    <PageShell>
      <RacScholars scholars={scholars} />
    </PageShell>
  );
}
