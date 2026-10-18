// What the shared tests (general / browser) need to know about this site.
// The pages come from the locale table: a language marked LIVE there must be
// indexable and in the sitemap, and a draft must be noindex and left out.
import { LANGS, LIVE, localePath, localeTag } from '../src/i18n/locales.js'

export const site = {
  origin: 'https://excursion-veli-bol.com',
  pages: LANGS.map((lang) => ({ path: localePath[lang], lang: localeTag[lang], indexable: LIVE[lang] })),
  notFoundPage: false,
}
