import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { withBasePath } from "@/lib/basePath";

type PageShellProps = {
  children: React.ReactNode;
  /** Optional background image URL under public/ */
  backgroundImage?: string;
};

export function PageShell({
  children,
  backgroundImage = "/bg1.webp",
}: PageShellProps) {
  return (
    <div
      className="flex min-h-screen flex-col bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url('${withBasePath(backgroundImage)}')`,
      }}
    >
      <SiteHeader />
      <div className="flex-1">{children}</div>
      <SiteFooter />
    </div>
  );
}
