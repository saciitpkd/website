"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import type { RacScholar } from "@/types/content";

type Props = {
  scholars: RacScholar[];
};

export function RacScholars({ scholars }: Props) {
  const [q, setQ] = useState("");

  const filtered = useMemo(() => {
    const s = q.trim().toLowerCase();
    if (!s) return scholars;
    return scholars.filter((sch) =>
      `${sch.name} ${sch.department} ${sch.interests.join(" ")} ${sch.skills.join(" ")}`
        .toLowerCase()
        .includes(s),
    );
  }, [q, scholars]);

  return (
    <div className="mx-auto max-w-3xl px-3 py-8 text-stone-900 sm:px-4">
      <div className="mb-6 flex flex-wrap items-start gap-4">
        <Image
          src="/rac_logo.png"
          alt="RAC"
          width={72}
          height={72}
          className="h-16 w-auto object-contain"
          unoptimized
        />
        <div>
          <h1 className="font-display text-2xl font-bold sm:text-3xl">
            The Researchers&apos; Collective
          </h1>
          <p className="text-sm text-stone-600">
            <a
              href="https://iitpkd.ac.in/"
              className="text-sac-orange underline"
              target="_blank"
              rel="noreferrer"
            >
              IIT Palakkad
            </a>
          </p>
          <p className="text-sm text-stone-600">
            A Research Affairs Council initiative
          </p>
        </div>
      </div>
      <hr className="mb-4 border-stone-300" />
      <label className="mb-6 flex flex-col gap-1 text-sm">
        <span>Search</span>
        <input
          className="rounded border border-stone-300 px-3 py-2"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Name, department, skills…"
        />
      </label>
      <hr className="mb-6 border-stone-300" />

      <ul className="space-y-8">
        {filtered.map((sch) => (
          <li
            key={`${sch.name}-${sch.contactUrl}`}
            className="rounded-lg border border-stone-200 bg-white/90 p-4 shadow-sm"
          >
            <p className="text-lg font-semibold">{sch.name}</p>
            <p className="text-sm text-stone-600">
              <span>{sch.department}</span>
              {sch.contactUrl ? (
                <>
                  {" "}
                  ·{" "}
                  <a
                    href={sch.contactUrl}
                    className="text-sac-orange underline"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Contact
                  </a>
                </>
              ) : null}
            </p>
            {sch.interests.map((t, i) => (
              <p key={`i-${i}`} className="mt-2 text-sm">
                🔥 {t}
              </p>
            ))}
            {sch.skills.map((t, i) => (
              <p key={`s-${i}`} className="text-sm">
                🔨 {t}
              </p>
            ))}
            {sch.latex ? (
              <p className="text-sm text-stone-700">💻 LaTeX</p>
            ) : null}
          </li>
        ))}
      </ul>
    </div>
  );
}
