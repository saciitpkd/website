"use client";

import { useCallback, useMemo, useRef, useState } from "react";
import { MdCircle, MdPlayArrow } from "react-icons/md";
import type { Announcement } from "@/types/content";

type Props = {
  announcements: Announcement[];
};

export function AnnouncementSection({ announcements }: Props) {
  const [startIndex, setStartIndex] = useState(0);
  const itemsToShow = 3;
  const containerRef = useRef<HTMLDivElement>(null);

  const displayed = useMemo(
    () => announcements.slice(startIndex, startIndex + itemsToShow),
    [announcements, startIndex],
  );
  const canGoNext = startIndex + itemsToShow < announcements.length;
  const canGoPrev = startIndex > 0;

  const handleNext = useCallback(() => {
    if (canGoNext) setStartIndex((p) => p + itemsToShow);
  }, [canGoNext]);

  const handlePrev = useCallback(() => {
    if (canGoPrev) setStartIndex((p) => p - itemsToShow);
  }, [canGoPrev]);

  return (
    <div className="mx-auto mb-4 flex w-full max-w-[740px] min-w-0 flex-col overflow-hidden rounded-lg p-2 sm:min-w-[300px]">
      <div className="mb-2 flex items-center">
        <h2 className="font-display mr-2 text-xl text-stone-900 sm:text-2xl">
          Announcements
        </h2>
        {canGoPrev ? (
          <button
            type="button"
            onClick={handlePrev}
            className="mr-2 flex h-7 w-7 items-center justify-center rounded border-0 bg-sac-orange text-sac-orange-soft"
            aria-label="Previous announcements"
          >
            <MdPlayArrow className="rotate-180 text-lg" />
          </button>
        ) : null}
        {canGoNext ? (
          <button
            type="button"
            onClick={handleNext}
            className="flex h-7 w-7 items-center justify-center rounded border-0 bg-sac-orange text-sac-orange-soft"
            aria-label="Next announcements"
          >
            <MdPlayArrow className="text-lg" />
          </button>
        ) : null}
      </div>
      <div className="mb-2 h-1.5 w-[26%] rounded-full bg-sac-orange" />

      <div ref={containerRef} className="mb-2">
        {announcements.length === 0 ? (
          <p className="mt-5 text-center text-sm italic text-stone-500">
            No announcements available.
          </p>
        ) : (
          displayed.map((a, i) => (
            <div key={a.id}>
              <div className="mb-2 flex items-start gap-2">
                <MdCircle className="mt-1 shrink-0 text-base text-sac-orange" />
                <p className="break-words text-sm leading-relaxed sm:text-base">
                  {a.body}
                </p>
              </div>
              {i < displayed.length - 1 ? (
                <hr className="mx-auto my-4 w-4/5 border-stone-300" />
              ) : null}
            </div>
          ))
        )}
      </div>
    </div>
  );
}
