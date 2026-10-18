import { useLang } from '../i18n'

// Also the source for the Product review snippets — see src/seo/schema.js.
// The quotes are the guests' own words, so they stay as written on every
// language page; only the country is translated (`reviews.countries`).
export const reviews = [
  {
    name: 'Sofia M.',
    country: 'italy',
    text: 'Pure magic. Crystal water, kind crew. We did nothing and it was everything.',
  },
  {
    name: 'Lukas R.',
    country: 'germany',
    text: 'Best half-day in Croatia. Small boat, hidden bays exactly like the photos.',
  },
  {
    name: 'Emma & Tom',
    country: 'uk',
    text: "Milan made us feel like family. We'll be back next summer.",
  },
  {
    name: 'Camille D.',
    country: 'france',
    text: "The most relaxing day of our trip. They really mean 'no pressure'.",
  },
]

function Stars({ center = false }) {
  return (
    <div className={`flex gap-0.5${center ? ' justify-center' : ''}`}>
      {[...Array(5)].map((_, i) => (
        <svg key={i} className="w-4 h-4 text-amber" viewBox="0 0 20 20" fill="currentColor">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

export default function Reviews() {
  const { t } = useLang()
  const r = t.reviews
  return (
    <section id="reviews" className="bg-cream py-20 sm:py-28 border-t border-soft">
      <div className="max-w-5xl mx-auto px-5 sm:px-8">
        <div className="text-center mb-12">
          <p className="label mb-4">{r.label}</p>
          <h2 className="section-heading mb-4">{r.heading}</h2>
          <Stars center />
          <p className="font-sans text-sm text-gray-400 mt-3">
            {r.basedOn} ·{' '}
            <a
              href="https://maps.app.goo.gl/SpNcdWgtLhwKhRzH7?g_st=ac"
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber hover:text-ink underline underline-offset-2 transition-colors"
            >
              {r.viewOnGoogle}
            </a>
          </p>
        </div>

        <div className="max-w-3xl mx-auto mb-12 rounded-2xl border border-amber/30 bg-white shadow-md p-8 sm:p-10 text-center">
          <p className="label mb-5">{r.featuredLabel}</p>
          <blockquote className="font-serif italic text-ink text-lg sm:text-xl leading-relaxed">
            “The other standout from this visit was a sailing trip we did with
            Milan, the owner of the excursion boat Veli, based in Bol. I will be
            honest — I have done a lot of boat trips along the Dalmatian coast
            over the years, and a lot of them blur together. This one did not. It
            was just a fantastic experience, and Milan clearly knows what he is
            doing.”
          </blockquote>
          <p className="font-sans text-sm text-gray-500 mt-6">
            Morten Smalby ·{' '}
            <a
              href="https://mortensmalby.com/bol-croatia/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber hover:text-ink underline underline-offset-2 transition-colors"
            >
              Bol on Brač Island — A Local’s Guide
            </a>
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          {reviews.map(({ name, country, text }) => (
            <div key={name} className="bg-white rounded-2xl p-6 relative">
              <div className="flex items-start justify-between mb-3">
                <Stars />
                <span className="font-serif text-4xl leading-none text-amber/30 -mt-2">"</span>
              </div>
              <p className="font-sans text-sm text-gray-600 leading-relaxed mb-4">"{text}"</p>
              <div>
                <p className="font-sans font-semibold text-ink text-sm">{name}</p>
                <p className="font-sans text-xs text-gray-400">{r.countries[country]}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://maps.app.goo.gl/SpNcdWgtLhwKhRzH7?g_st=ac"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-dark text-xs tracking-widest uppercase"
          >
            {r.readAll}
          </a>
        </div>
      </div>
    </section>
  )
}
