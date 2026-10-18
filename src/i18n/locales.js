/**
 * The locale table. Plain JS with no JSX and no imports, so the sitemap script
 * (scripts/generate-sitemap.mjs) can read it as well as the app.
 *
 * English is the root locale; every other language lives one directory down.
 * The base in vite.config.js is the absolute '/', so asset paths like
 * '/images/…' resolve the same at every depth — none of the relative-path
 * repair the sibling word-and-rijec site needs applies here.
 */
export const DEFAULT_LANG = 'en'

/** Every language the site is built in. */
export const LANGS = ['en', 'hr', 'de']

/**
 * Which languages are LIVE: indexable, in the sitemap and in the hreflang set.
 *
 * Croatian and German are draft translations awaiting the client's review, so
 * their pages build and can be opened by URL, but they carry `noindex`, are
 * left out of the sitemap and are not listed as alternates of the English
 * page. Nothing links to them yet — there is no language switcher. To launch
 * one, set it to true here and add the switcher; nothing else changes.
 */
export const LIVE = {
  en: true,
  hr: false,
  de: false,
}

export const LIVE_LANGS = LANGS.filter((l) => LIVE[l])

/** The URL path each locale answers on. Trailing slash: these are directories. */
export const localePath = {
  en: '/',
  hr: '/hr/',
  de: '/de/',
}

/** The `lang` attribute and the Open Graph locale for each. */
export const localeTag = {
  en: 'en',
  hr: 'hr',
  de: 'de',
}

export const localeOgTag = {
  en: 'en_US',
  hr: 'hr_HR',
  de: 'de_DE',
}
