import { useLang } from '../i18n'

// Charter prices, keyed like `private.tiers` in each dictionary (which holds
// the duration and what is included). Also the source for the Service offers
// in src/seo/schema.js.
export const tierPrices = { h1: '€150', h2: '€300', h3: '€400' }

// Photos down the right-hand side; the alt text is `private.photos` in each
// dictionary, keyed by the same file name.
const photos = [
  'aerial-bol-sunset',
  'couple-embracing-sunset-boat',
  'legs-dangling-off-boat-sunset',
  'excursion-boat-zlatni-rat-sunset',
]

export default function PrivateTour() {
  const { t } = useLang()
  const p = t.private
  return (
    <section id="private" className="bg-navy py-20 sm:py-28">
      <div className="max-w-5xl mx-auto px-5 sm:px-8">
        <div className="grid md:grid-cols-3 gap-14 items-center">

          {/* Left — pitch + tiers */}
          <div className="md:col-span-1">
            <p className="label mb-3">{p.label}</p>
            <h2 className="section-heading-light mb-4">{p.heading}</h2>
            <p className="font-sans text-sm text-white/60 leading-relaxed mb-8 max-w-md">
              {p.body}
            </p>

            {/* Headline rate */}
            <div className="mb-8">
              <p className="font-serif font-bold text-white text-5xl leading-none">
                {p.from} {tierPrices.h1}
              </p>
              <p className="font-sans text-xs text-white/40 mt-2 tracking-wide">
                {p.fromSub}
              </p>
            </div>

            {/* Tiers */}
            <div className="bg-navy-light border border-white/5 rounded-2xl px-5 divide-y divide-white/5 mb-8">
              {Object.entries(p.tiers).map(([key, { duration, includes }]) => (
                <div key={key} className="flex items-start gap-4 py-4">
                  <div className="w-8 h-8 rounded-full bg-amber/15 flex items-center justify-center shrink-0 text-amber">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-baseline justify-between gap-4 mb-0.5">
                      <p className="font-sans font-semibold text-white text-sm">{duration}</p>
                      <p className="font-serif font-bold text-amber text-base">{tierPrices[key]}</p>
                    </div>
                    <p className="font-sans text-white/40 text-sm">{includes}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* WhatsApp CTA */}
            <div className="wa-btn inline-block">
              <span className="wa-btn-ring" />
              <a
                href="https://wa.me/385957420929"
                target="_blank"
                rel="noopener noreferrer"
                className="relative z-10 flex items-center justify-center gap-3 py-3.5 px-7 rounded-full font-sans font-semibold text-white text-sm"
                style={{ backgroundColor: '#25D366' }}
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                {p.cta}
              </a>
            </div>
          </div>

          {/* Right — imagery */}
          <div className="md:col-span-2 grid grid-cols-2 gap-3 sm:gap-4">
            {photos.map((name) => (
              <div key={name} className="aspect-[4/3] rounded-2xl overflow-hidden">
                <img
                  src={`/images/${name}.webp`}
                  alt={p.photos[name]}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
            {/* Sunset over the headland — moved here from the gallery */}
            <div className="col-span-2 aspect-[16/9] rounded-2xl overflow-hidden">
              <img
                src="/images/sun-over-headland-sunset.webp"
                alt={p.photos['sun-over-headland-sunset']}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
