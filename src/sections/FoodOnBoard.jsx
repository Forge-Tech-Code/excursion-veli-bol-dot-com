import { useLang } from '../i18n'

// Menu prices, keyed like `food.menu` in each dictionary (name + description).
const prices = { grill: '€55', kids: '€30', cold: '€20', pancakes: '€10' }

export default function FoodOnBoard() {
  const { t } = useLang()
  const f = t.food
  return (
    <section id="food" className="bg-cream py-20 sm:py-28 border-t border-soft">
      <div className="max-w-5xl mx-auto px-5 sm:px-8">
        <div className="max-w-xl">
          <div className="flex items-center gap-2 mb-3">
            <svg className="w-3.5 h-3.5 text-amber" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 8.25v-1.5m0 1.5c-1.355 0-2.697.056-4.024.166C6.845 8.51 6 9.473 6 10.608v2.513m6-4.871c1.355 0 2.697.056 4.024.166C17.155 8.51 18 9.473 18 10.608v2.513M15 8.25v-1.5m-6 1.5v-1.5m12 9.75l-1.5.75a3.354 3.354 0 01-3 0 3.354 3.354 0 00-3 0 3.354 3.354 0 01-3 0 3.354 3.354 0 00-3 0L3 18m0-13.5h18" />
            </svg>
            <p className="label">{f.label}</p>
          </div>

          <h2 className="section-heading mb-2">{f.heading}</h2>
          <p className="font-sans text-sm text-gray-400 mb-10">
            {f.sub}
          </p>

          <div className="bg-white rounded-2xl shadow-md px-5 divide-y divide-soft">
            {Object.entries(f.menu).map(([key, { name, desc }]) => (
              <div key={key} className="flex items-start justify-between gap-4 py-5">
                <div>
                  <p className="font-sans font-semibold text-ink text-sm mb-1">{name}</p>
                  <p className="font-sans text-xs text-gray-400">{desc}</p>
                </div>
                <p className="font-serif font-bold text-ink text-base shrink-0">{prices[key]}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
