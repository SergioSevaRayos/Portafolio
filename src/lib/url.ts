/**
 * Prefixes an absolute internal path with the configured `base` (empty in
 * local dev, `/Portafolio` once deployed to GitHub Pages) — needed for any
 * link/asset reference written as a literal string (`href="/proyectos"`),
 * since only Astro's own asset pipeline (astro:assets Image, bundled CSS/JS)
 * prefixes automatically.
 */
export function withBase(path: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return `${base}${path}`;
}
