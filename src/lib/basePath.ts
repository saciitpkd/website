/** Set at build time for subpath hosting (e.g. GitHub Pages project site). */
export const basePath =
  (process.env.NEXT_PUBLIC_BASE_PATH ?? "").replace(/\/$/, "") || "";

/** Prefix root-relative public URLs (`/foo`) when the app is served under a base path. */
export function withBasePath(path: string): string {
  if (!path.startsWith("/")) return path;
  return basePath ? `${basePath}${path}` : path;
}
