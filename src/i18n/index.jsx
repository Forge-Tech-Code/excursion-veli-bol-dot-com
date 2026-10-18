import { createContext, useContext } from 'react'
import en from './en'
import hr from './hr'
import de from './de'
import { DEFAULT_LANG, LANGS } from './locales'

export const dictionaries = { en, hr, de }

/**
 * Every dictionary has to be the same shape as en.js. A missing key is not a
 * visible error — React renders `undefined` as nothing — so a typo in de.js
 * would ship a German page with a silently empty heading. This runs at module
 * load during the prerender, so a mismatch fails `npm run build` and names the
 * key. It is dead code in the client bundle.
 */
function assertSameShape(a, b, lang, path = '') {
  const here = path || '<root>'
  if (Array.isArray(a) || Array.isArray(b)) {
    if (!Array.isArray(a) || !Array.isArray(b)) throw new Error(`i18n: ${here} is an array in en.js and not in ${lang}.js`)
    if (a.length !== b.length) throw new Error(`i18n: ${here} has ${a.length} entries in en.js and ${b.length} in ${lang}.js`)
    a.forEach((item, i) => assertSameShape(item, b[i], lang, `${path}[${i}]`))
    return
  }
  if (typeof a === 'object' && a !== null) {
    if (typeof b !== 'object' || b === null) throw new Error(`i18n: ${here} is an object in en.js and not in ${lang}.js`)
    const missing = Object.keys(a).filter((k) => !(k in b))
    const extra = Object.keys(b).filter((k) => !(k in a))
    if (missing.length) throw new Error(`i18n: ${lang}.js is missing ${missing.map((k) => `${path}.${k}`).join(', ')}`)
    if (extra.length) throw new Error(`i18n: ${lang}.js has unknown key ${extra.map((k) => `${path}.${k}`).join(', ')}`)
    Object.keys(a).forEach((k) => assertSameShape(a[k], b[k], lang, `${path}.${k}`))
    return
  }
  if (typeof a !== typeof b) throw new Error(`i18n: ${here} is ${typeof a} in en.js and ${typeof b} in ${lang}.js`)
}

if (import.meta.env.DEV || import.meta.env.SSR) {
  LANGS.filter((l) => l !== DEFAULT_LANG).forEach((lang) => {
    assertSameShape(dictionaries[DEFAULT_LANG], dictionaries[lang], lang)
  })
}

const LangContext = createContext(null)

/**
 * Wraps one prerendered page. The language comes from the ROUTE, never from
 * state, so the prerendered markup and the first client render always agree.
 */
export function LangProvider({ lang, children }) {
  return <LangContext.Provider value={{ lang, t: dictionaries[lang] }}>{children}</LangContext.Provider>
}

/** `const { t, lang } = useLang()` — the dictionary for the current page. */
export function useLang() {
  const value = useContext(LangContext)
  if (!value) throw new Error('useLang() used outside <LangProvider>')
  return value
}
