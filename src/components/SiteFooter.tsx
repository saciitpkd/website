import Image from "next/image";
import { FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";
import { withBasePath } from "@/lib/basePath";

export function SiteFooter() {
  return (
    <footer className="mt-auto flex flex-wrap items-center justify-between gap-6 bg-gradient-to-t from-stone-900 via-stone-700 to-stone-100 px-6 py-6 text-white sm:px-12">
      <div className="flex flex-wrap items-center justify-center gap-4 sm:justify-start">
        <Image
          src={withBasePath("/logo/iitpkdlogosmall.webp")}
          alt="IIT Palakkad"
          width={80}
          height={80}
          className="h-16 w-auto object-contain"
          unoptimized
        />
        <div className="text-center sm:text-left">
          <h2 className="font-display text-lg text-[rgb(244,157,81)]">
            Student Affairs Council
          </h2>
          <div className="my-2 h-0.5 w-full bg-white" />
          <p className="text-sm text-[rgb(227,141,64)]">
            Indian Institute of Technology Palakkad
          </p>
          <p className="text-xs text-stone-300">
            Copyright © {new Date().getFullYear()}. All rights reserved.
          </p>
        </div>
      </div>

      <div className="w-full text-center sm:w-auto sm:text-right">
        <h3 className="text-lg font-semibold">Address</h3>
        <p className="text-sm text-stone-200">Indian Institute of Technology Palakkad</p>
        <p className="text-sm text-stone-200">Kanjikkode | Palakkad</p>
        <p className="text-sm text-stone-200">Kerala | Pin: 678623</p>
        <div className="mt-3 flex justify-center gap-4 sm:justify-end">
          <a
            href="https://twitter.com/PalakkadIIT"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white transition hover:text-sky-400"
            aria-label="Twitter"
          >
            <FaTwitter size={20} />
          </a>
          <a
            href="https://in.linkedin.com/school/iitpkd/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white transition hover:text-sky-600"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={20} />
          </a>
          <a
            href="https://www.youtube.com/@IITPalakkad_Official"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white transition hover:text-red-500"
            aria-label="YouTube"
          >
            <FaYoutube size={22} />
          </a>
        </div>
      </div>
    </footer>
  );
}
