"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { MdArrowDropDown, MdMenu } from "react-icons/md";

const nav = [
  { label: "Home", href: "/" },
  { label: "Academics", href: "/academics" },
  { label: "Technical", href: "/technical" },
  { label: "Cultural", href: "/cultural" },
  { label: "Hostel", href: "/hostel" },
  { label: "Sports", href: "/sports" },
];

const moreLinks = [
  { label: "Developers", href: "/developers" },
  { label: "Wall of fame", href: "/walloffame" },
  { label: "Researchers' Collective", href: "/rac/researchers-collective" },
];

const pgLinks = [
  { label: "PG", href: "/post-graduate" },
  { label: "Research", href: "/research" },
];

export function SiteHeader() {
  const [scrollY, setScrollY] = useState(0);
  const [drawer, setDrawer] = useState(false);
  const [pgOpen, setPgOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const opacity = Math.min(scrollY / 500, 1);
  const textOnDark = scrollY > 100;

  return (
    <header
      className="sticky top-0 z-50 border-b border-white/10 py-2 transition-colors"
      style={{
        background: `rgba(0,0,0,${opacity})`,
        backgroundImage: "url('/background.webp')",
        backgroundSize: "cover",
      }}
    >
      <div className="mx-auto flex max-w-6xl items-center gap-2 px-3 sm:px-4">
        <Link href="/" className="mr-auto flex items-center py-1">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/sac/saclogo_horizontal.webp"
            alt="SAC IIT Palakkad"
            className="h-8 w-auto sm:h-10"
          />
        </Link>

        <button
          type="button"
          className="rounded p-2 text-sac-orange sm:hidden"
          aria-label="Open menu"
          onClick={() => setDrawer(true)}
        >
          <MdMenu size={26} />
        </button>

        <nav className="hidden items-center gap-1 sm:flex">
          {nav.slice(0, 2).map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`rounded px-2 py-1 text-sm transition-colors hover:text-white ${
                textOnDark ? "text-white" : "text-black"
              }`}
            >
              {item.label}
            </Link>
          ))}

          <div className="relative">
            <button
              type="button"
              className={`flex items-center rounded px-2 py-1 text-sm transition-colors hover:text-white ${
                textOnDark ? "text-white" : "text-black"
              }`}
              onClick={() => {
                setPgOpen((v) => !v);
                setMoreOpen(false);
              }}
            >
              PG/Research
              <MdArrowDropDown className="ml-0.5" />
            </button>
            {pgOpen ? (
              <div className="absolute right-0 mt-1 min-w-[10rem] rounded border border-stone-200 bg-white py-1 shadow-lg">
                {pgLinks.map((l) => (
                  <Link
                    key={l.href}
                    href={l.href}
                    className="block px-3 py-2 text-sm text-stone-800 hover:bg-stone-100"
                    onClick={() => setPgOpen(false)}
                  >
                    {l.label}
                  </Link>
                ))}
              </div>
            ) : null}
          </div>

          {nav.slice(2).map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`rounded px-2 py-1 text-sm transition-colors hover:text-white ${
                textOnDark ? "text-white" : "text-black"
              }`}
            >
              {item.label}
            </Link>
          ))}

          <div className="relative">
            <button
              type="button"
              className={`flex items-center rounded px-2 py-1 text-sm transition-colors hover:text-white ${
                textOnDark ? "text-white" : "text-black"
              }`}
              onClick={() => {
                setMoreOpen((v) => !v);
                setPgOpen(false);
              }}
            >
              More
              <MdArrowDropDown className="ml-0.5" />
            </button>
            {moreOpen ? (
              <div className="absolute right-0 mt-1 min-w-[12rem] rounded border border-stone-200 bg-white py-1 shadow-lg">
                {moreLinks.map((l) => (
                  <Link
                    key={l.href}
                    href={l.href}
                    className="block px-3 py-2 text-sm text-stone-800 hover:bg-stone-100"
                    onClick={() => setMoreOpen(false)}
                  >
                    {l.label}
                  </Link>
                ))}
              </div>
            ) : null}
          </div>
        </nav>
      </div>

      {drawer ? (
        <div className="fixed inset-0 z-[60] sm:hidden">
          <button
            type="button"
            className="absolute inset-0 bg-black/50"
            aria-label="Close menu"
            onClick={() => setDrawer(false)}
          />
          <div className="absolute right-0 top-0 flex h-full w-44 flex-col gap-1 bg-black/90 p-4">
            {[...nav, ...pgLinks, ...moreLinks].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="py-2 text-left text-sm text-white"
                onClick={() => setDrawer(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  );
}
