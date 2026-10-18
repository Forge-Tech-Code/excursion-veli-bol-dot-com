import { useLang } from '../i18n'
import { pricing } from '../seo/business.js'

// The text for the info cards, the included list and the price table is
// `essentials` in each dictionary; the figures live here and in business.js.
const ages = { adult: '10+', child: '4–10', infant: '0–4' }

export default function Essentials() {
  const { t } = useLang()
  const e = t.essentials
  return (
    <section id="essentials" className="bg-navy py-20 sm:py-28">
      <div className="max-w-5xl mx-auto px-5 sm:px-8">
        <div className="grid md:grid-cols-2 gap-14">

          {/* Left */}
          <div>
            <p className="label mb-3">{e.label}</p>
            <h2 className="section-heading-light mb-8">{e.heading}</h2>

            <div className="grid grid-cols-2 gap-3 mb-5">
              {Object.entries(e.cards).map(([key, { label, value, sub }]) => (
                <div key={key} className="bg-navy-light border border-white/5 rounded-2xl p-5">
                  <p className="text-[10px] font-sans font-semibold tracking-[0.15em] uppercase text-white/40 mb-1">{label}</p>
                  <p className="font-sans font-semibold text-white text-sm leading-snug">{value}</p>
                  {sub && <p className="text-xs text-white/40 mt-0.5">{sub}</p>}
                </div>
              ))}
            </div>

            <div className="bg-navy-light border border-white/5 rounded-2xl p-5">
              <p className="font-sans font-semibold text-white text-sm mb-4">{e.includedHeading}</p>
              <ul className="space-y-2.5">
                {e.included.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-white/60">
                    <svg className="w-4 h-4 text-amber shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right */}
          <div className="flex flex-col gap-5">
            {/* Pricing card */}
            <div className="bg-navy-light border border-white/5 rounded-2xl p-6">
              <p className="label mb-3">{e.pricing.label}</p>
              <h3 className="font-serif font-bold text-white text-2xl mb-5 leading-tight">
                {e.pricing.heading[0]}<br />{e.pricing.heading[1]}
              </h3>

              <div className="grid grid-cols-3 gap-3 mb-5">
                <div className="text-center">
                  <p className="font-sans text-[11px] text-white/50 font-medium mb-1">{e.pricing.adult}</p>
                  <p className="font-sans text-[10px] text-white/30 mb-2">{ages.adult}</p>
                  <p className="font-serif font-bold text-white text-2xl">€{pricing.adult}</p>
                  <p className="font-sans text-[10px] text-white/40 mt-1">{e.pricing.perPerson}</p>
                </div>
                <div className="text-center border-x border-white/5 px-2">
                  <p className="font-sans text-[11px] text-white/50 font-medium mb-1">{e.pricing.child}</p>
                  <p className="font-sans text-[10px] text-white/30 mb-2">{ages.child}</p>
                  <p className="font-serif font-bold text-white text-xl leading-tight">{e.pricing.halfPrice[0]}<br />{e.pricing.halfPrice[1]}</p>
                </div>
                <div className="text-center">
                  <p className="font-sans text-[11px] text-white/50 font-medium mb-1">{e.pricing.child}</p>
                  <p className="font-sans text-[10px] text-white/30 mb-2">{ages.infant}</p>
                  <p className="font-serif font-bold text-white text-2xl">{e.pricing.free}</p>
                </div>
              </div>

              <p className="font-sans text-xs text-white/40 italic mb-5">
                {e.pricing.familyNote}
              </p>

              <a href="tel:+385957420929" className="btn-outline-light w-full text-center tracking-widest uppercase text-xs">
                {e.cta}
              </a>
            </div>

            {/* Map */}
            <div className="bg-navy-light border border-white/5 rounded-2xl overflow-hidden">
              <iframe
                title={e.mapTitle}
                src="https://maps.google.com/maps?q=Excursion+boat+%22Veli%22+Bol&ll=43.2615951,16.6571911&z=17&output=embed"
                width="100%"
                height="200"
                style={{ border: 0, display: 'block' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
