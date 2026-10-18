import { useState } from 'react'
import { useLang } from '../i18n'

// The questions and answers are `faq.items` in each dictionary — also the
// source for the FAQPage structured data (src/seo/schema.js). Answers must stay
// factual: every one is drawn from the tour details elsewhere on the page.

function FAQItem({ q, a, id }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="border-b border-white/10 last:border-0">
      <h3>
        <button
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-controls={`faq-answer-${id}`}
          className="w-full flex items-center justify-between gap-4 py-5 text-left font-sans font-semibold text-white text-sm"
        >
          <span>{q}</span>
          <svg
            className={`w-4 h-4 text-white/40 shrink-0 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
            fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
          </svg>
        </button>
      </h3>
      {/* The answer stays in the DOM whether or not the item is open — collapsed
          with a grid row rather than unmounted, so crawlers see every answer in
          the prerendered HTML. */}
      <div
        id={`faq-answer-${id}`}
        className={`grid transition-[grid-template-rows] duration-200 ease-out ${
          open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
        }`}
      >
        <div className="overflow-hidden">
          <p className="font-sans text-sm text-white/50 leading-relaxed pb-5 -mt-1">{a}</p>
        </div>
      </div>
    </div>
  )
}

export default function FAQ() {
  const { t } = useLang()
  return (
    <section id="faq" className="bg-navy py-20 sm:py-28" aria-labelledby="faq-heading">
      <div className="max-w-5xl mx-auto px-5 sm:px-8">
        <div className="text-center mb-10">
          <p className="label mb-3">{t.faq.label}</p>
          <h2 id="faq-heading" className="section-heading-light">{t.faq.heading}</h2>
        </div>

        <div className="max-w-2xl mx-auto bg-navy-light border border-white/5 rounded-2xl px-6">
          {t.faq.items.map(({ q, a }, i) => (
            <FAQItem key={q} q={q} a={a} id={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
