import { useState, useEffect } from 'react'
import { useLang } from '../i18n'

// Section ids in menu order; the labels are `nav.links` in each dictionary.
const navLinks = ['essentials', 'about', 'private', 'experience', 'food', 'gallery', 'reviews']

export default function Navbar() {
  const { t } = useLang()
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-cream border-b border-soft transition-opacity duration-300 ${
        visible ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
    >
      <div className="max-w-5xl mx-auto px-5 sm:px-8 h-14 flex items-center justify-between">
        <a href="#home" className="font-serif text-lg text-ink leading-none">
          Veli Bol <em>Excursions</em>
        </a>

        <nav className="hidden sm:flex items-center gap-6">
          {navLinks.map((key) => (
            <a
              key={key}
              href={`#${key}`}
              className="font-sans text-xs tracking-widest uppercase text-ink/60 hover:text-ink transition-colors"
            >
              {t.nav.links[key]}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3 sm:gap-4">
          <a
            href="https://www.instagram.com/excursion_veli_bol/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="text-ink/60 hover:text-ink transition-colors"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
            </svg>
          </a>
          <a
            href="https://www.facebook.com/share/193sA2P542/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="text-ink/60 hover:text-ink transition-colors"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
            </svg>
          </a>
          <a
            href="https://www.tripadvisor.ca/Attraction_Review-g303802-d34501358-Reviews-Excursion_VELI_Bol-Bol_Brac_Island_Split_Dalmatia_County_Dalmatia.html"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="TripAdvisor"
            className="text-ink/60 hover:text-ink transition-colors"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12.006 4.295c-2.67 0-5.338.784-7.645 2.353H0l1.963 2.135a5.997 5.997 0 0 0 4.04 10.43 5.976 5.976 0 0 0 4.075-1.6L12 19.705l1.922-2.09a5.972 5.972 0 0 0 4.072 1.598 6 6 0 0 0 6-5.995 5.98 5.98 0 0 0-1.957-4.435L24 6.648h-4.35a13.573 13.573 0 0 0-7.644-2.353zM6.002 17.15a3.996 3.996 0 0 1 0-7.992 3.996 3.996 0 0 1 0 7.992zm5.998-4.05c0-2.671-1.942-4.962-4.504-5.953A11.98 11.98 0 0 1 12 6.255c1.531 0 3.063.303 4.504.892C13.943 8.138 12 10.43 12 13.1zm5.996 4.05a3.996 3.996 0 0 1 0-7.992 3.996 3.996 0 0 1 0 7.992zm0-6.11a2.109 2.109 0 0 0 0 4.219 2.109 2.109 0 0 0 0-4.22zm-11.994 0a2.109 2.109 0 0 0 0 4.219 2.109 2.109 0 0 0 0-4.22z" />
            </svg>
          </a>
          <a
            href="#book"
            className="btn-dark px-4 sm:px-7 text-xs tracking-widest uppercase"
          >
            {t.nav.book}
          </a>
        </div>
      </div>
    </header>
  )
}
