import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { PageShell } from "@/components/PageShell";
import { withBasePath } from "@/lib/basePath";
import raw from "../../../content/developers.json";
import type { DeveloperCard, DevelopersContent } from "@/types/content";

const developers = raw as DevelopersContent;

function DevGrid({ title, list }: { title: string; list: DeveloperCard[] }) {
  if (!list.length) return null;
  return (
    <div className="mt-10">
      <h2 className="font-display mb-6 text-center text-xl font-semibold sm:text-2xl">
        {title}
      </h2>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {list.map((dev) => (
          <article
            key={dev.name}
            className="overflow-hidden rounded-2xl border border-stone-200 bg-white/95 text-center shadow transition hover:scale-[1.02]"
          >
            <Image
              src={withBasePath(dev.image)}
              alt={dev.name}
              width={400}
              height={280}
              className="h-[220px] w-full object-cover sm:h-[280px]"
              unoptimized
            />
            <div className="p-4">
              <h3 className="font-display text-lg font-semibold">{dev.name}</h3>
              <p className="mb-3 text-sm text-stone-600">{dev.role}</p>
              <div className="flex justify-center gap-2">
                {dev.github ? (
                  <Link
                    href={dev.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded p-2 text-stone-700 hover:bg-stone-100"
                    aria-label={`${dev.name} GitHub`}
                  >
                    <FaGithub size={22} />
                  </Link>
                ) : null}
                {dev.linkedin ? (
                  <Link
                    href={dev.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded p-2 text-stone-700 hover:bg-stone-100"
                    aria-label={`${dev.name} LinkedIn`}
                  >
                    <FaLinkedin size={22} />
                  </Link>
                ) : null}
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

export default function DevelopersPage() {
  return (
    <PageShell>
      <main className="mx-auto max-w-5xl px-3 py-10 sm:px-4">
        <h1 className="font-display text-center text-3xl font-semibold">
          Meet the Developers
        </h1>
        <p className="mx-auto mt-3 max-w-2xl text-center text-stone-600">
          The team that built and maintains the SAC platform.
        </p>
        <DevGrid title="Coordinator" list={developers.coordinator} />
        <DevGrid title="Team Leads" list={developers.leads} />
        <DevGrid title="Developers" list={developers.developers} />
        <DevGrid title="Designers" list={developers.designers} />
      </main>
    </PageShell>
  );
}
