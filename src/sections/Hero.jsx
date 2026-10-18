import { useLang } from '../i18n'

export default function Hero() {
  const { t } = useLang()
  return (
    <section id="home" aria-label={t.hero.ariaLabel} className="relative min-h-screen flex flex-col justify-end pb-20 overflow-hidden">
      {/* Background */}
      <img
        src="/images/hero.webp"
        srcSet="/images/hero-800.webp 800w, /images/hero-1280.webp 1280w, /images/hero.webp 2000w"
        sizes="100vw"
        width={2000}
        height={1059}
        alt={t.hero.imageAlt}
        className="absolute inset-0 w-full h-full object-cover"
        style={{ objectPosition: '30% 35%' }}
        fetchpriority="high"
        decoding="async"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-navy/85 via-navy/45 to-navy/20" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-5 sm:px-8 w-full [text-shadow:0_2px_16px_rgba(12,27,43,0.55)]">
        <p className="font-sans text-[10px] tracking-[0.25em] uppercase text-white/70 mb-5">
          {t.hero.label}
        </p>

        {/* The visible wordmark is the h1, so the page's strongest heading also
            has to carry the query people actually search. The trailing phrase is
            read by crawlers and screen readers without changing the design. */}
        <h1 className="font-serif font-bold text-white leading-[1.05] mb-6" style={{ fontSize: 'clamp(2.8rem, 8vw, 5.5rem)' }}>
          Veli Bol<br />
          <em>Excursions</em>
          <span className="sr-only">{t.hero.srSuffix}</span>
        </h1>

        <p className="font-serif italic text-white/90 text-lg sm:text-xl max-w-md leading-snug mb-4">
          {t.hero.lede}
        </p>

        <p className="font-sans text-[10px] tracking-[0.25em] uppercase text-white/60 mb-8">
          {t.hero.tagline}
        </p>

        <div className="flex flex-wrap items-center gap-4">
          <a href="tel:+385957420929" className="btn-outline-light text-sm tracking-widest uppercase">
            {t.hero.cta}
          </a>
          <div className="wa-btn">
            <span className="wa-btn-ring" />
            <a
              href="https://wa.me/385957420929"
              target="_blank"
              rel="noopener noreferrer"
              className="relative z-10 inline-flex items-center gap-2 font-sans text-sm font-semibold text-white px-4 py-2 rounded-full"
              style={{ backgroundColor: '#25D366' }}
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10">
        <p className="font-sans text-[9px] tracking-[0.3em] uppercase text-white/40">{t.hero.scroll}</p>
      </div>
    </section>
  )
}
