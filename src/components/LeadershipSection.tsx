import Image from "next/image";
import { FaEnvelope, FaInfoCircle, FaUser, FaUsers } from "react-icons/fa";
import { withBasePath } from "@/lib/basePath";
import type { CouncilData } from "@/types/content";

type Props = {
  council: CouncilData;
  councilTitle: string;
};

export function LeadershipSection({ council, councilTitle }: Props) {
  if (!council?.secretary) return null;

  const photoKey =
    council.secretary.studentEmail ?? council.secretary.email;
  const photoSrc = `/student/${photoKey}/photo.webp`;

  return (
    <section className="w-full rounded-lg border border-stone-200 bg-white/95 p-4 shadow-md sm:p-6">
      <div className="flex flex-col gap-4 sm:flex-row">
        <div className="flex justify-center sm:justify-start">
          <Image
            src={withBasePath(photoSrc)}
            alt={council.secretary.full_name}
            width={128}
            height={128}
            className="h-24 w-24 rounded-full object-cover shadow sm:h-32 sm:w-32"
            unoptimized
          />
        </div>
        <div className="min-w-0 flex-1">
          <h1 className="mb-3 flex items-center gap-2 font-display text-xl font-semibold sm:text-2xl">
            <FaInfoCircle className="shrink-0 text-sac-orange" />
            {councilTitle}
          </h1>
          <div className="space-y-2 text-sm sm:text-base">
            <p className="flex flex-wrap items-center gap-2 break-words">
              <FaUser className="shrink-0 text-sac-orange" />
              <strong>Secretary:</strong>
              <span>{council.secretary.full_name}</span>
            </p>
            <p className="flex flex-wrap items-center gap-2 break-all">
              <FaEnvelope className="shrink-0 text-sac-orange" />
              <strong>Email:</strong>
              <span>{council.secretary.email}</span>
            </p>
            {council.deputies?.length ? (
              <div className="mt-3">
                <p className="mb-2 flex items-center gap-2 font-medium">
                  <FaUsers className="text-sac-orange" />
                  Deputy Secretaries
                </p>
                <ul className="list-inside space-y-2 pl-2">
                  {council.deputies.map((d, i) => (
                    <li key={i} className="text-sm">
                      <span className="font-medium">{d.full_name}</span>
                      <span className="ml-2 text-stone-600">{d.email}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
