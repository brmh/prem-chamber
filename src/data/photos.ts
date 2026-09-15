import type { Lang } from './site';

/**
 * Photographs of the chamber.
 *
 * These cannot be pulled from the Google Business Profile — Google has no
 * keyless API for listing photos, and re-hosting them from its CDN is against
 * its terms. Put the original files (the same ones uploaded to Google, or any
 * others) anywhere on disk and run:
 *
 *     ./tools/prep-photos.sh ~/path/to/originals
 *
 * That writes web-sized copies into public/photos/ and prints the entries to
 * paste below. Until something is listed here the gallery does not render.
 *
 * Keep it to the chamber, the building and the work. No photographs of clients
 * or of their documents.
 */
export interface Photo {
  /** Filename inside public/photos/ */
  file: string;
  alt: string;
  altHi: string;
  width: number;
  height: number;
}

export const PHOTOS: Photo[] = [];

export function photoAlt(p: Photo, lang: Lang): string {
  return lang === 'hi' ? p.altHi : p.alt;
}
