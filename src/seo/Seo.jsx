import { Head } from 'vite-react-ssg'
import { useLang } from '../i18n'
import { LIVE, LIVE_LANGS, localeOgTag, localePath, localeTag } from '../i18n/locales'
import { SITE_URL, seo } from './business.js'

/** Absolute URL of a locale's page, e.g. https://excursion-veli-bol.com/hr/ */
export const localeUrl = (lang) => `${SITE_URL}${localePath[lang]}`

/**
 * Everything in <head> that differs between languages. index.html keeps only
 * what is identical on every page; adding any of these back there would emit
 * them twice.
 *
 * A draft language (LIVE[lang] false) is noindex and appears in nobody's
 * hreflang set — not even its own — so Google never pairs an unreviewed
 * translation with the English page. Live languages list every live language
 * INCLUDING themselves, plus x-default on English: Google ignores a set that
 * does not point back at itself.
 */
export default function Seo() {
  const { t, lang } = useLang()
  const url = localeUrl(lang)
  const live = LIVE[lang]
  const alternates = live && LIVE_LANGS.length > 1 ? LIVE_LANGS : []

  return (
    <Head>
      <html lang={localeTag[lang]} />
      <title>{t.meta.title}</title>
      <meta name="description" content={t.meta.description} />
      <link rel="canonical" href={url} />
      <meta
        name="robots"
        content={live ? 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' : 'noindex, follow'}
      />

      {alternates.map((l) => (
        <link key={l} rel="alternate" hrefLang={localeTag[l]} href={localeUrl(l)} />
      ))}
      {alternates.length > 0 && <link rel="alternate" hrefLang="x-default" href={localeUrl('en')} />}

      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Veli Bol Excursions" />
      <meta property="og:title" content={t.meta.ogTitle} />
      <meta property="og:description" content={t.meta.ogDescription} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={seo.ogImage} />
      <meta property="og:image:type" content="image/jpeg" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={t.meta.ogImageAlt} />
      <meta property="og:locale" content={localeOgTag[lang]} />
      {alternates.filter((l) => l !== lang).map((l) => (
        <meta key={l} property="og:locale:alternate" content={localeOgTag[l]} />
      ))}

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={t.meta.ogTitle} />
      <meta name="twitter:description" content={t.meta.ogDescription} />
      <meta name="twitter:image" content={seo.ogImage} />
      <meta name="twitter:image:alt" content={t.meta.ogImageAlt} />
    </Head>
  )
}
