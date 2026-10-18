import { useLang } from '../i18n'

// Section ids in menu order; the labels are `footer.links` in each dictionary.
const footerLinks = ['essentials', 'about', 'experience', 'food', 'gallery', 'reviews', 'faq']

export default function Footer() {
  const { t } = useLang()
  return (
    <footer id="contact" className="bg-ink text-cream/60 font-sans">
      <div className="max-w-5xl mx-auto px-5 sm:px-8 py-14 grid sm:grid-cols-3 gap-10">
        <div>
          <div className="font-serif text-cream text-lg mb-3">
            Veli Bol <em>Excursions</em>
          </div>
          <p className="text-xs leading-relaxed text-cream/50">
            {t.footer.blurb[0]}<br />
            {t.footer.blurb[1]}
          </p>
        </div>

        <div>
          <div className="label-light text-amber text-[10px] mb-3">{t.footer.explore}</div>
          <nav className="flex flex-col gap-2 text-xs text-cream/60">
            {footerLinks.map((key) => (
              <a key={key} href={`#${key}`} className="hover:text-cream transition-colors">{t.footer.links[key]}</a>
            ))}
          </nav>
        </div>

        <div>
          <div className="label-light text-amber text-[10px] mb-3">{t.footer.contact}</div>
          <ul className="text-xs space-y-2 text-cream/60">
            <li>
              <a href="tel:+385957420929" className="hover:text-cream transition-colors">
                +385 95 742 09 29
              </a>
            </li>
            <li>
              <a href="mailto:milankarmelic@gmail.com" className="hover:text-cream transition-colors">
                milankarmelic@gmail.com
              </a>
            </li>
            <li>
              <a href="https://wa.me/385957420929" target="_blank" rel="noopener noreferrer" className="hover:text-cream transition-colors">
                WhatsApp
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/excursion_veli_bol/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hover:text-cream transition-colors"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
                Instagram
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 max-w-5xl mx-auto px-5 sm:px-8 py-5">
        <p className="text-[11px] text-cream/30">
          © {new Date().getFullYear()} Veli Bol Excursions. {t.footer.place}
        </p>
      </div>
    </footer>
  )
}
