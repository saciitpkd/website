import Image from "next/image";
import { AnnouncementSection } from "@/components/AnnouncementSection";
import { withBasePath } from "@/lib/basePath";
import { EventCalendar } from "@/components/EventCalendar";
import { ImageGallery } from "@/components/ImageGallery";
import { PageShell } from "@/components/PageShell";
import announcements from "../../content/announcements.json";
import events from "../../content/events.json";
import home from "../../content/home.json";
import type { Announcement, CalendarEvent, HomeContent } from "@/types/content";

const homeData = home as HomeContent;
const ann = announcements as Announcement[];
const ev = events as CalendarEvent[];

export default function HomePage() {
  const year = homeData.secretariesDisplayYear;
  const secretaries =
    homeData.secretariesByYear[year] ??
    Object.values(homeData.secretariesByYear)[0] ??
    [];

  return (
    <PageShell>
      <div className="mx-auto max-w-5xl px-3 py-6 sm:px-4">
        <section
          id="announcements"
          className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:items-start"
        >
          <AnnouncementSection announcements={ann} />
          <EventCalendar events={ev} />
        </section>

        <section id="about-us" className="mt-10">
          <h2 className="font-display mb-3 text-xl text-stone-900 sm:text-2xl">
            About Us
          </h2>
          <p className="mb-6 hyphens-auto text-justify text-sm leading-relaxed text-stone-800 sm:text-base">
            {homeData.aboutUs}
          </p>
          <ImageGallery images={homeData.aboutGallery} galleryId="firstGallery" />
        </section>

        <section id="councils" className="mt-10">
          <h2 className="font-display mb-3 text-xl text-stone-900 sm:text-2xl">
            Councils
          </h2>
          <p className="mb-6 hyphens-auto text-justify text-sm leading-relaxed text-stone-800 sm:text-base">
            {homeData.councilsIntro}
          </p>
          <ImageGallery
            images={homeData.councilGallery}
            galleryId="secondGallery"
          />
        </section>

        <section id="office-of-dean" className="mt-12">
          <h2 className="font-display mb-6 text-center text-xl sm:text-2xl">
            Office of Dean (Students)
          </h2>
          <div className="flex flex-wrap justify-center gap-8">
            {homeData.deanOffice.map((person) => (
              <div
                key={person.email}
                className="flex max-w-[280px] flex-col items-center text-center"
              >
                <Image
                  src={withBasePath(person.image)}
                  alt={person.name}
                  width={120}
                  height={120}
                  className="mb-3 h-[120px] w-[120px] rounded-full object-cover bg-stone-200"
                  unoptimized
                />
                <h3 className="text-lg font-bold text-stone-900">{person.name}</h3>
                <p className="mt-1 text-sm text-stone-600">{person.title}</p>
                <p className="text-sm text-stone-600">Email: {person.email}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="secretaries" className="mt-12 pb-8">
          <h2 className="font-display mb-6 text-center text-xl sm:text-2xl">
            Meet Our Secretaries
          </h2>
          <p className="mb-4 text-center text-sm text-stone-600">
            Tenure {year}–{Number(year) + 1}
          </p>
          <div className="flex flex-wrap justify-center gap-8">
            {secretaries.map((s) => (
              <div
                key={s.email}
                className="flex max-w-[260px] flex-col items-center text-center"
              >
                <Image
                  src={withBasePath(s.image)}
                  alt={s.name}
                  width={110}
                  height={110}
                  className="mb-3 h-[110px] w-[110px] rounded-full object-cover bg-stone-200"
                  unoptimized
                />
                <h3 className="text-base font-bold text-stone-900">{s.name}</h3>
                <p className="mt-1 text-sm text-stone-600">{s.title}</p>
                <p className="text-sm text-stone-600">Email: {s.email}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </PageShell>
  );
}
