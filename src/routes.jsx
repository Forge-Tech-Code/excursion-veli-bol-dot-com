import App from './App.jsx'
import { LANGS, localePath } from './i18n/locales'

// One route per language, each prerendered to its own static file:
//   /  → dist/index.html    /hr/ → dist/hr/index.html    /de/ → dist/de/index.html
// The router is only a build-time page list for vite-react-ssg. Nothing
// navigates through it at runtime — every link on the page is a fragment.
export const routes = LANGS.map((lang) => ({
  path: lang === 'en' ? '/' : localePath[lang].replace(/^\/|\/$/g, ''),
  element: <App lang={lang} />,
}))
