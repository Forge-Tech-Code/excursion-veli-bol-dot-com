# Veli Bol Excursions — Claude Code Guide

## What this project is

Static marketing website for Veli Bol Excursions, a boat tour company in Bol, Croatia. Single-page scroll, built once per language (see "Languages"). No backend, no database. Builds to `dist/` and deploys to GitHub Pages via GitHub Actions.

## Commands

```bash
npm run dev      # dev server at http://localhost:5173
npm run build    # production build → dist/
npm run preview  # serve dist/ locally
```

## Tests

```bash
npm run build && npm test   # the tests read the BUILT site, so build first
```

`.github/workflows/ci.yml` runs exactly that on every pull request (and on pushes to `main`), as the
**Build and test** check — the one to make required for merging. Plain `node --test`, no framework:

| file | what it checks |
|---|---|
| `tests/general.test.mjs` | the same on every site: title, description, canonical, robots, `lang`, one `h1`, heading order, alt text, duplicate ids, dead `#links`, every local file the HTML or CSS references exists, JSON-LD parses and its `@id`s resolve, Open Graph, `noopener`, robots.txt, sitemap, CNAME, 404 |
| `tests/browser.test.mjs` | headless Chromium: the page hydrates with no console errors or failed requests, and never scrolls sideways at 320 / 390 / 768 / 1280px |
| `tests/page.test.mjs` | this site's own rules, most of them from this file — see the test names |
| `tests/site.config.mjs` | the only per-site input to the two shared files: origin, pages, languages |
| `tests/lib.mjs` | helpers: load a built page as a DOM (`linkedom`), read JSON-LD, serve `dist/` |

The browser tests block every request to another origin, so they never depend on the network. Locally,
`CHROMIUM_PATH=/path/to/chromium npm test` uses an existing Chromium instead of `npx playwright install
chromium`.

**When a test fails, fix the page, not the test** — unless the rule itself changed, in which case change
the test and this file in the same commit.

There is no `404.html` here, so the general 404 check is skipped (`notFoundPage: false` in `tests/site.config.mjs`). Writing the tests caught the German meta description at 173 characters; it is now 157.

## Stack

- **React 18** — UI
- **Vite 5** — build tool, `base: '/'` in `vite.config.js`
- **Tailwind CSS 3** — styling via utility classes + component layer in `src/index.css`
- **vite-react-ssg** (routes entry) — prerenders one static page per language
- **react-router-dom** — only as the build-time list of those pages (`src/routes.jsx`); nothing navigates through it. Every in-page link is an anchor (`#essentials`, `#about`, etc.)

## Project layout

```
src/
  components/
    Navbar.jsx       sticky nav, logo + hamburger, anchor links in dropdown
    Footer.jsx       address / phone / email / copyright
  sections/          one file per visible scroll section, assembled in App.jsx
    Hero.jsx
    Essentials.jsx   tour info, pricing, map (dark)
    About.jsx        (light)
    PrivateTour.jsx  private sunset charter, `tierPrices` (#private) (dark)
    Experience.jsx   "reasons to come aboard" grid (dark)
    FoodOnBoard.jsx  menu add-ons (light)
    Gallery.jsx      2-col photo grid (dark)
    Reviews.jsx      testimonials, `reviews` array (light)
    FAQ.jsx          accordion over `faq.items` (uses useState per item) (dark)
    BookingCTA.jsx   closing call-to-action (#book) (light)
  i18n/
    locales.js       the languages, their URLs, and which are LIVE
    en.js hr.js de.js  every user-visible string, one dictionary per language
    index.jsx        <LangProvider>, useLang(), and the same-shape check
  seo/
    Seo.jsx          the per-language <head>: title, description, canonical,
                     robots, hreflang, Open Graph, Twitter
    schema.js        the JSON-LD graph, built per language
    business.js      language-independent facts: phone, address, prices, rating
  App.jsx            orders all sections; takes `lang` from the route
  routes.jsx         one route per language
  main.jsx           ViteReactSSG entry
  index.css          @tailwind directives + .label, .section-heading, .btn-dark, .info-card
public/
  images/            boat.jpg, billboard.jpg — served as static assets
  favicon.svg
.github/
  workflows/
    deploy.yml       push to main → npm ci → npm run build → GitHub Pages
```

## Languages

| URL | file | dictionary | status |
|---|---|---|---|
| `/` | `dist/index.html` | `src/i18n/en.js` | live |
| `/hr/` | `dist/hr/index.html` | `src/i18n/hr.js` | **draft** |
| `/de/` | `dist/de/index.html` | `src/i18n/de.js` | **draft** |

**No user-visible text belongs in a component.** It goes in all three dictionaries under the same key and
is read with `const { t } = useLang()`. `src/i18n/index.jsx` checks at build time that `hr.js` and `de.js`
have exactly the keys of `en.js`, so a missing string fails `npm run build` and names the key instead of
shipping an empty heading. Lists that pair text with a price, an icon or a photo are keyed by **id, not
index** (`private.tiers.h1` ↔ `tierPrices.h1` in `PrivateTour.jsx`, `food.menu.grill` ↔ `prices.grill`,
photo alt text by file name), so a reorder cannot mis-pair them.

What is **not** translated: the business name, the guest review quotes and the Morten Smalby quote (they
are other people's words, and the Product review markup must match what is on the page), names, contact
details and prices.

**The Croatian and German are drafts written here, not by the client.** Until each is reviewed — Milan
for the Croatian, a native speaker for the German — its page is built but:

- carries `noindex, follow`,
- is left out of `sitemap.xml` and out of every hreflang set, and
- is linked from nowhere: **there is no language switcher yet**, deliberately.

The pages can be opened directly at `/hr/` and `/de/` to review them. **To launch a language:** have the
copy checked, set it to `true` in `LIVE` in `src/i18n/locales.js`, and add a language switcher (a plain
`<a>` to the other page — changing language is a change of document). The robots tag, the reciprocal
hreflang set, `og:locale:alternate` and the sitemap entries all follow from `LIVE` with no other edits.
After launch, submit the sitemap again in Search Console.

German compounds can be wider than a 320px phone: `Sonnen\u00ADuntergangs\u00ADtour` carries soft
hyphens so it breaks only when it has to. Check new long German words at 320px the same way.

The structured data's `@id`s: the website and the business hang off the root URL in every language (one
entity); everything describing a page — the WebPage, FAQ, Product, trip, charter — hangs off that page's
own URL. On the English page both are the root, so its ids are unchanged.

## Design tokens (tailwind.config.js)

| Token | Value | Used for |
|---|---|---|
| `cream` | `#F2EDE5` | page background |
| `cream-dark` | `#E8E1D7` | placeholder slots |
| `navy` | `#0C1B2B` | dark-section backgrounds (Essentials, PrivateTour, Experience, Gallery, FAQ) + Hero gradient |
| `navy-light` | `#142333` | cards inside dark sections |
| `amber` | `#C9973A` | labels, icons, accents |
| `ink` | `#1A1409` | body text |
| `soft` | `#DDD6CC` | borders, dividers |

Fonts: **Playfair Display** (serif — headings, logo, italic) · **Inter** (sans — body, labels, UI)

Both are **self-hosted** from `public/fonts/` — variable woff2, latin + latin-ext only — with
`@font-face` at the top of `src/index.css` and the two upright latin files preloaded in `index.html`.
No request goes to Google Fonts. latin-ext carries the Croatian č ć š ž đ; German needs only latin. To
refresh, take the same files from `@fontsource-variable/inter` / `playfair-display` and keep the
`unicode-range` lines as they are.

## Reusable CSS classes (src/index.css)

- `.label` — small amber spaced-caps section label
- `.section-heading` / `.section-heading-light` — Playfair Display bold h2
- `.btn-dark` — black filled CTA button
- `.btn-outline-light` — white outlined button (for use on dark/photo backgrounds)
- `.info-card` — white rounded card with shadow
- `.info-card-label` / `.info-card-value` — label + value typography inside info cards

## Section IDs (for anchor links)

`#home` · `#essentials` · `#about` · `#experience` · `#food` · `#private` · `#gallery` · `#reviews` · `#faq` · `#book` · `#contact` (footer)

Note: the Navbar links to `#essentials`, `#about`, `#private`, `#experience`, `#food`, `#gallery`, `#reviews` (the `navLinks` array), plus the logo (`#home`) and the Book button (`#book`). Remaining IDs exist for direct/deep linking.

**Section colour rhythm:** sections strictly alternate dark (`bg-navy`) ↔ light (`bg-cream`) down the page. Order: Hero(dark photo) · Essentials(dark) · About(light) · PrivateTour(dark) · History(light) · Experience(dark) · Food(light) · Gallery(dark) · Reviews(light) · FAQ(dark) · Booking(light). The dark Hero flows straight into the dark Essentials (intentional — the hero photo dissolves into the first section); strict alternation runs from Essentials down. Inserting or reordering a section flips this parity — expect to recolour the sections below it to keep the alternation. Dark sections use `section-heading-light`, `text-white/40–60`, `bg-navy-light` cards; light sections use `section-heading`, `text-gray-400–600`, `bg-white` cards + `border-t border-soft`.

## Content that changes seasonally

Wording changes go in **all three** dictionaries; figures live in one place each.

- **Ticket price** — `pricing.adult` in `src/seo/business.js` (the table in `Essentials.jsx` and the schema both read it); the price wording is `essentials.pricing` in the dictionaries
- **Food menu** — prices in `prices` in `src/sections/FoodOnBoard.jsx`; names and descriptions in `food.menu`
- **Tour details** — `essentials.cards` (duration, schedule, destination, group size) and `essentials.included`
- **Private charter** — prices in `tierPrices` in `src/sections/PrivateTour.jsx`; durations and what each includes in `private.tiers`
- **FAQ** — `faq.items` (also the FAQPage structured data)

## Adding photos

1. Drop image into `public/images/` (JPG or WebP, keep under 400 KB)
2. In `src/sections/Gallery.jsx`, add the file name (without `.webp`) to the `photos` array, and its alt text under `gallery.photos` with the same name in **each** dictionary.
3. Push to `main` — Actions builds and deploys automatically

## Deployment

- **GitHub Pages**: push to `main` triggers `.github/workflows/deploy.yml`
  - Actions pinned to exact versions: `checkout@v6.0.3`, `setup-node@v6.4.0`, `upload-pages-artifact@v5.0.0`, `deploy-pages@v5.0.0`
  - Node 26, `npm ci`, `npm run build`, artifact from `dist/`
  - Enable at: Settings → Pages → Source → GitHub Actions
- **Self-hosted**: see `Caddyfile` — drop `dist/` at `/var/www/veli-bol/`, Caddy handles HTTPS

## What's placeholder / not yet real

- All six Gallery slots are filled (`photos` array in `Gallery.jsx`); any slot with a falsy `src` falls back to a `cream-dark` "Photo coming soon" placeholder
- Google Maps embed in `Essentials.jsx` uses a placeholder embed URL — replace with a real embed from Google Maps if needed
- Crew bios — not present in current design (removed in redesign)
