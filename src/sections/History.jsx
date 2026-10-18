import { useLang } from '../i18n'

// File names in /images/; the alt text is `history.photos` in each dictionary.
const feature = 'history-hull-on-the-stocks'

const photos = [
  'history-keel-and-ribs',
  'history-shipwrights-at-work',
  'history-framing-with-sea-view',
  'history-laying-the-deck',
  'history-painting-the-hull',
  'history-launched-in-bol',
]

export default function History() {
  const { t } = useLang()
  const h = t.history
  return (
    <section id="history" className="bg-cream py-20 sm:py-28 border-t border-soft">
      <div className="max-w-5xl mx-auto px-5 sm:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <p className="label mb-3">{h.label}</p>
          <h2 className="section-heading mb-5">{h.heading}</h2>
          <p className="font-sans text-gray-500 text-sm leading-relaxed">
            {h.body}
          </p>
        </div>

        {/* Feature photo */}
        <div className="rounded-3xl overflow-hidden shadow-lg aspect-[3/2] mb-3 sm:mb-4">
          <img
            src={`/images/${feature}.webp`}
            alt={h.photos[feature]}
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
          />
        </div>

        {/* Build grid — keel to launch */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
          {photos.map((name) => (
            <div key={name} className="aspect-[4/3] rounded-2xl overflow-hidden">
              <img
                src={`/images/${name}.webp`}
                alt={h.photos[name]}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
