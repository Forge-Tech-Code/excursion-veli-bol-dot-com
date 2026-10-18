import { useLang } from '../i18n'

export default function About() {
  const { t } = useLang()
  return (
    <section id="about" className="bg-cream py-20 sm:py-28 border-t border-soft">
      <div className="max-w-5xl mx-auto px-5 sm:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Photo */}
          <div className="relative rounded-3xl overflow-hidden shadow-lg aspect-[4/5] bg-cream-dark">
            <img
              src="/images/veli-bol-pride.webp"
              alt={t.about.imageAlt}
              className="w-full h-full object-cover"
              loading="lazy"
              decoding="async"
            />
            <div className="absolute bottom-3 right-3 bg-white rounded-2xl p-3 shadow-lg">
              <p className="font-sans text-[10px] text-gray-400 leading-none mb-0.5">{t.about.badgeTop}</p>
              <p className="font-sans font-semibold text-ink text-xs leading-none">{t.about.badgeBottom}</p>
            </div>
          </div>

          {/* Text */}
          <div>
            <p className="label mb-3">{t.about.label}</p>
            <h2 className="font-serif font-bold text-ink leading-tight mb-6" style={{ fontSize: 'clamp(2rem, 5vw, 3rem)' }}>
              {t.about.heading[0]}<br />{t.about.heading[1]}
            </h2>
            <p className="font-sans text-gray-500 text-sm leading-relaxed mb-8">
              {t.about.body}
            </p>

            <div className="flex flex-col gap-3">
              <a
                href="tel:+385957420929"
                className="inline-flex items-center gap-3 w-fit px-5 py-2.5 rounded-full border border-soft font-sans text-sm text-ink hover:border-amber hover:text-amber transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
                +385 95 742 09 29
              </a>

              <a
                href="mailto:milankarmelic@gmail.com"
                className="inline-flex items-center gap-3 w-fit px-5 py-2.5 rounded-full border border-soft font-sans text-sm text-ink hover:border-amber hover:text-amber transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
                milankarmelic@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
