import { PageShell } from "@/components/PageShell";
import raw from "../../../content/wall-of-fame.json";

const data = raw as Record<string, Record<string, string>>;

export default function WallOfFamePage() {
  const years = Object.keys(data).reverse();

  return (
    <PageShell>
      <main className="mx-auto max-w-5xl px-3 py-10 sm:px-4">
        <div>
          <h1 className="font-display text-center text-3xl font-semibold text-stone-900">
            Past Student Secretaries
          </h1>
          <p className="mx-auto mt-3 max-w-xl text-center text-stone-600">
            Recognizing the leaders who have shaped our student community
          </p>
          <hr className="mx-auto my-8 max-w-2xl border-stone-300" />
        </div>

        <div className="space-y-10">
          {years.map((year) => (
            <section
              key={year}
              className="rounded-xl border border-stone-200 bg-white/95 p-5 shadow-sm"
            >
              <h2 className="font-display mb-4 border-b border-sac-orange/40 pb-2 text-xl font-semibold text-sac-orange">
                {year}
              </h2>
              <ul className="grid gap-3 sm:grid-cols-2">
                {Object.entries(data[year]).map(([role, name]) => (
                  <li
                    key={role}
                    className="flex flex-col rounded-lg bg-stone-50/80 px-3 py-2 text-sm sm:flex-row sm:items-center sm:justify-between"
                  >
                    <span className="font-medium text-stone-800">{role}</span>
                    <span
                      className={
                        name === "No secretary"
                          ? "text-stone-400"
                          : "text-stone-700"
                      }
                    >
                      {name}
                    </span>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </main>
    </PageShell>
  );
}
