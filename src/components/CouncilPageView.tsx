"use client";

import { motion } from "framer-motion";
import { ImageGallery } from "@/components/ImageGallery";
import { LeadershipSection } from "@/components/LeadershipSection";
import { PageShell } from "@/components/PageShell";
import type { CouncilBundle } from "@/types/content";

type Props = {
  data: CouncilBundle;
};

export function CouncilPageView({ data }: Props) {
  const { council, page } = data;

  return (
    <PageShell>
      <main className="mx-auto max-w-5xl flex-1 px-3 py-8 sm:px-4">
        <div className="space-y-6">
          {council.secretary ? (
            <LeadershipSection
              council={council}
              councilTitle={council.council_title}
            />
          ) : null}

          <motion.section
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="rounded-lg border border-stone-200 bg-white/95 p-4 shadow sm:p-6"
          >
            <h2 className="font-display mb-3 text-xl font-semibold sm:text-2xl">
              {page.aboutTitle}
            </h2>
            <hr className="mb-4 border-stone-200" />
            <div className="space-y-4 text-justify text-sm leading-relaxed text-stone-800 sm:text-base">
              {page.aboutParagraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
            {page.convenors?.length ? (
              <div className="mt-6 space-y-3 border-t border-stone-200 pt-4">
                {page.convenors.map((c) => (
                  <div key={c.councilTitle}>
                    <p className="font-semibold">{c.councilTitle} Convenor:</p>
                    <p className="text-sm text-stone-700">
                      {c.name} —{" "}
                      <a
                        className="text-sac-orange underline"
                        href={`mailto:${c.email}`}
                      >
                        {c.email}
                      </a>
                    </p>
                  </div>
                ))}
              </div>
            ) : null}
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
            className="rounded-lg border border-stone-200 bg-white/95 p-4 shadow sm:p-6"
          >
            <h2 className="font-display mb-3 text-xl font-semibold sm:text-2xl">
              {page.galleryTitle}
            </h2>
            <hr className="mb-4 border-stone-200" />
            <ImageGallery
              images={page.galleryImages}
              galleryId={`${council.council_name}-gallery`}
            />
          </motion.section>
        </div>
      </main>
    </PageShell>
  );
}
