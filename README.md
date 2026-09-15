# Prem Chamber — premchamber.com

Bilingual (English + Hindi) website for Prem Chamber, Advocates, Tehsil Compound, Ghaziabad.

Static site built with Astro. No database, no server, no tracking. Every page is
plain HTML by the time a visitor sees it, which is why it loads fast and ranks well.

```bash
npm install     # once
npm run dev     # http://localhost:4321
npm run build   # writes dist/
```

---

## ⚠️ Fill these in before the site goes live

Search for `VERIFY` in the source. These are things that must not be published
from guesswork, and a few are legally required.

| Where | What is missing | Why it matters |
| --- | --- | --- |
| `src/data/site.ts` → `barCouncil.enrolmentNo` | Enrolment number | The Bar Council expects enrolment details on an advocate's website. The footer and About page hide this block until it is filled. |
| `src/data/site.ts` → `barCouncil.practisingSince` | Year of enrolment | Shown on the About page. |
| `src/data/site.ts` → `chamber.pincode` | PIN of the Tehsil Compound | Currently `201001`. Confirm it. |
| `src/data/site.ts` → `chamber.lat` / `lng` | Exact coordinates | Used in the LocalBusiness structured data that Google Maps reads. Drop a pin, copy the numbers. |
| `src/data/site.ts` → `chamber.mapsUrl` | Google Business Profile link | The "Open in Google Maps" link on Contact stays hidden until this is set. |
| `src/data/site.ts` → `hours` | Real chamber timings | Currently placeholders. These also go into the structured data. |
| `src/data/site.ts` → `email` | `ankit@premchamber.com` | Set this up (Zoho Mail's free plan is enough) or change it back to the Gmail address. |
| `src/data/offices.ts` | Sub-Registrar office addresses | **Deliberately left empty.** A wrong address on an advocate's site sends a client to the wrong building. Fill `address` for an office and it appears in the table automatically; offices with no address are skipped. |
| `src/data/rates.ts` → `registrationCap` | Registration fee ceiling | Confirm against the current state notification. |

## Rates and figures go stale

`src/data/rates.ts` holds the stamp duty percentage, the registration fee and the
women's rebate. The calculator and the guides read from it.

When the state revises a rate:

1. Change the number in `src/data/rates.ts`.
2. Change `verifiedOn` to today's date.
3. Change `ratesVerifiedOn` in `src/data/site.ts` to the same date.

Guides with `hasRates: true` in their frontmatter show that date to the reader in
a visible box. This is deliberate — it is more honest than a number with no date,
and it protects the chamber when a rate changes.

---

## Where the content lives

```
src/
  data/site.ts              chamber details, address, phone — single source of truth
  data/rates.ts             stamp duty / registration figures
  data/offices.ts           Sub-Registrar offices (to be filled)
  data/careers.ts           roles the chamber hires for, and current vacancies
  data/services/            one file per service, English + Hindi in the same file
  content/guides/en/*.md    English guides
  content/guides/hi/*.md    Hindi guides
  i18n/ui.ts                every button, label and menu item, both languages
  i18n/pages.ts             home page copy, both languages
```

Changing a phone number or an address means editing `site.ts` only. It appears in
the header, the footer, every call button, the WhatsApp links and the structured data.

### Adding a guide

Create the same filename in both `src/content/guides/en/` and `src/content/guides/hi/`,
with the same `key` in the frontmatter. The `key` is what pairs the two languages and
what the URL is built from. Both files are needed, otherwise the language switcher
lands on a missing page.

Required frontmatter: `key`, `lang`, `title`, `metaTitle`, `description`, `answers`,
`updated`, `readingTime`. Optional: `featured` (shows on the home page), `order`
(sorting), `faqs` (becomes an FAQ block plus FAQ structured data), `sources`,
`services`, `related`, `hasRates`.

### Listing a vacancy

`src/data/careers.ts` has an `OPENINGS` array that is empty by default. While it is
empty the careers page says plainly that nothing is advertised and that applications
are still read. Add an entry and that turns into a listed vacancy, and a `JobPosting`
structured-data block is emitted for it so it can appear in Google's job results.
Remove the entry once the position is filled — a stale vacancy is worse than none.

No stipend figure is printed anywhere on that page, deliberately. It varies, and the
page says it is discussed directly instead.

### Adding a service

Copy an existing file in `src/data/services/`, change the content, then add it to
the array in `src/data/services/index.ts`. It then appears in navigation, the footer,
the home page, the services index and the enquiry form's subject list automatically.

---

## How enquiries reach the chamber

There is no form backend and no data is stored anywhere. The enquiry form composes
a WhatsApp message in the visitor's own browser and opens it on the chamber's number.
The visitor decides whether to send it.

This is deliberate: it is how people in Ghaziabad actually get in touch, it needs no
server, and it means the site holds no personal data at all — which keeps the privacy
position simple.

On phones there is also a fixed Call / WhatsApp bar at the bottom of every page.

---

## Bar Council compliance

Rule 36 of the Bar Council of India Rules prohibits advertising and solicitation by
advocates. The site is built around this:

- no claims of success, no ratings, no client testimonials anywhere;
- a first-visit disclaimer, dismissed once and remembered in the browser;
- the short disclaimer in the footer of every page;
- content written as information, not as promotion.

**Keep it this way.** Do not add "best lawyer in Ghaziabad", success rates, or client
reviews. Beyond the professional risk, that kind of copy is exactly what makes a site
read as marketing rather than as a chamber's own reference pages.

---

## Deploying

The build output in `dist/` is plain static files. Any of these work:

**Cloudflare Pages or Netlify (recommended, free).** Connect the repository, set the
build command to `npm run build` and the output directory to `dist`. Every push
redeploys. Free SSL, fast in India.

**GitHub Pages (free).** Already wired up: `.github/workflows/deploy-pages.yml`
builds on every push to `main`. In the repository, go to **Settings → Pages** and set
**Source** to **GitHub Actions** (not "Deploy from a branch" — the repository holds
source, not built HTML, so a branch deploy serves nothing).

A GitHub Pages *project* site is served from a sub-path, `/prem-chamber/`. The build
handles that through two environment variables the workflow sets for it:

| Variable | Effect |
| --- | --- |
| `SITE_URL` | Absolute origin used for canonical, hreflang and the sitemap |
| `BASE_PATH` | Prefixed onto every internal link, asset and markdown link |

Neither is set for a normal build, so `npm run build` still produces the root-served
site for premchamber.com. Once the real domain is in use, prefer Cloudflare Pages or
point the domain at Pages as a custom domain — either way the site is served from the
root and no base path is involved.

**Ordinary hosting (Hostinger, cPanel).** Run `npm run build` locally and upload the
contents of `dist/` to `public_html`. Repeat on every content change.

After the domain points at the site:

1. Add the property in **Google Search Console** and submit `https://premchamber.com/sitemap-index.xml`.
2. Create a **Google Business Profile** for the chamber. For a local practice this
   drives more enquiries than the website does. The name, address and phone must match
   `site.ts` character for character.
3. Check that both `https://premchamber.com` and `https://www.premchamber.com` resolve,
   with one redirecting to the other.

---

## What the site does for search

- Every page has its own title under 68 characters and its own meta description.
- English at `/`, Hindi at `/hi/`, with `hreflang` tags pairing them both ways.
- `LegalService` structured data on every page; `Article` on guides; `FAQPage` wherever
  there are FAQs; `BreadcrumbList` on inner pages; `Service` on service pages.
- `sitemap-index.xml` generated on every build, with language alternates.
- Internal linking between guides and the services they relate to, in both directions.
- No JavaScript is needed to read any page.
