/**
 * Single source of truth for every piece of business information on the site.
 * Anything marked VERIFY must be confirmed with the chamber before the site goes live.
 */

export const SITE = {
  origin: 'https://premchamber.com',
  brand: 'Prem Chamber',
  brandHi: 'प्रेम चैम्बर',

  /** Advocates practising from the chamber. */
  advocates: [
    { name: 'Prempal Sharma', nameHi: 'प्रेमपाल शर्मा', role: 'Advocate', roleHi: 'अधिवक्ता' },
    {
      name: 'Ankit Bhardwaj',
      nameHi: 'अंकित भारद्वाज',
      role: 'Advocate & Oath Commissioner',
      roleHi: 'अधिवक्ता एवं ओथ कमिश्नर',
    },
  ],

  /** NAP (name / address / phone) — must match Google Business Profile character for character. */
  phone: '+918447842792',
  phoneDisplay: '+91 84478 42792',
  whatsapp: '918447842792',
  email: 'ankit@premchamber.com',
  emailFallback: 'advankitbh@gmail.com',

  chamber: {
    line1: 'Chamber No. 15, Tehsil Compound',
    line1Hi: 'चैम्बर नं. 15, तहसील कम्पाउंड',
    city: 'Ghaziabad',
    cityHi: 'गाज़ियाबाद',
    state: 'Uttar Pradesh',
    stateHi: 'उत्तर प्रदेश',
    pincode: '201001', // VERIFY: confirm the Tehsil Compound PIN
    /** VERIFY: drop a pin on Google Maps and paste the exact coordinates. */
    lat: 28.6692,
    lng: 77.4538,
    mapsUrl: '', // VERIFY: paste the Google Business Profile short link
  },

  hours: {
    // VERIFY: real chamber timings, including court days vs non-court days.
    weekdays: '10:00 – 18:00',
    saturday: '10:00 – 15:00',
    sunday: 'Closed',
  },

  /** Bar Council of India requires enrolment details to be shown. */
  barCouncil: {
    council: 'Bar Council of Uttar Pradesh',
    councilHi: 'बार काउंसिल ऑफ़ उत्तर प्रदेश',
    enrolmentNo: '', // VERIFY: mandatory before publishing
    practisingSince: '', // VERIFY: year of enrolment
  },

  /** Last time the fee/rate figures in the guides were checked against the official source. */
  ratesVerifiedOn: '2026-09-15',

  locale: {
    en: { htmlLang: 'en-IN' },
    hi: { htmlLang: 'hi-IN' },
  },
} as const;

export type Lang = 'en' | 'hi';

/**
 * The configured `base`, without a trailing slash. Empty when the site is
 * served from the root, which is the normal case; a GitHub Pages project site
 * is served from a sub-path and sets one.
 */
function basePrefix(): string {
  const b = (import.meta as { env?: { BASE_URL?: string } })?.env?.BASE_URL ?? '/';
  return b === '/' ? '' : b.replace(/\/$/, '');
}

/** Build a link: base prefix + locale segment + path. */
export function localePath(lang: Lang, path: string): string {
  const clean = path === '/' ? '' : path.replace(/\/$/, '');
  const withLocale = lang === 'hi' ? `/hi${clean}` : clean;
  return `${basePrefix()}${withLocale}` || '/';
}

/** Prefix a file in /public with the base, e.g. asset('/favicon.svg'). */
export function asset(path: string): string {
  return `${basePrefix()}${path}`;
}

