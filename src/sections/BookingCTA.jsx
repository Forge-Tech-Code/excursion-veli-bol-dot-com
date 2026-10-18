import { useLang } from '../i18n'
import { business } from '../seo/business.js'

export default function BookingCTA() {
  const { t } = useLang()
  const b = t.book
  return (
    <section
      id="book"
      className="bg-cream py-20 sm:py-28 border-t border-soft"
      style={{ background: 'radial-gradient(ellipse 80% 60% at 50% 110%, #f5dfa8 0%, #F2EDE5 55%)' }}
    >
      <div className="max-w-5xl mx-auto px-5 sm:px-8">
        <div className="max-w-sm mx-auto text-center">
          <p className="label mb-4">{b.label}</p>
          <h2 className="section-heading mb-4">{b.heading}</h2>
          <p className="font-sans text-sm text-gray-400 leading-relaxed mb-10">
            {b.body}
          </p>

          {/* Animated WhatsApp button */}
          <div className="wa-btn inline-block w-full mb-8">
            <span className="wa-btn-ring" />
            <a
              href="https://wa.me/385957420929"
              target="_blank"
              rel="noopener noreferrer"
              className="relative z-10 flex items-center justify-center gap-3 w-full py-4 px-6 rounded-full font-sans font-semibold text-white text-sm"
              style={{ backgroundColor: '#25D366' }}
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              {b.cta}
            </a>
          </div>

          {/* Departure card */}
          <div className="info-card flex items-center gap-3 text-left">
            <svg className="w-4 h-4 text-amber shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
            </svg>
            <div>
              <p className="info-card-label">{b.departureLabel}</p>
              <p className="info-card-value">{business.address.street}, {business.address.locality}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
