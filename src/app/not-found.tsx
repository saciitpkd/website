import Link from "next/link";
import { PageShell } from "@/components/PageShell";

export default function NotFound() {
  return (
    <PageShell>
      <main className="mx-auto max-w-lg px-4 py-20 text-center">
        <h1 className="font-display text-4xl font-bold text-stone-900">404</h1>
        <p className="mt-4 text-stone-600">This page could not be found.</p>
        <Link
          href="/"
          className="mt-8 inline-block rounded bg-sac-orange px-5 py-2 text-sm font-medium text-black hover:bg-sac-orange/90"
        >
          Back to home
        </Link>
      </main>
    </PageShell>
  );
}
