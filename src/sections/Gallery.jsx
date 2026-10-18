import { useLang } from '../i18n'

// File names in /images/, in grid order; the alt text is `gallery.photos` in
// each dictionary, keyed by the same name. A name with no file renders the
// "photo coming soon" placeholder.
const photos = [
  'aerial-gulet-turquoise-cove',
  'woman-jumping-off-boat-slide',
  'underwater-diver-sunrays',
  'zlatni-rat-beach-bol-from-boat',
  'rocky-cove-caves-swimmers',
  'kids-peace-sign-boat-cabin',
  'aerial-boat-narrow-blue-cove',
  'snorkeler-selfie-underwater',
  'group-swimming-with-floatie',
  'gulet-anchored-pine-shore',
  'aerial-gulet-clear-shallows',
  'underwater-freediver-woman',
  'woman-paddleboard-cheering',
  'rocky-cove-caves-splash',
  'aerial-white-boat-cove',
  'gulet-deck-passengers-ships-wheel',
]

function GallerySlot({ src, alt, comingSoon }) {
  if (src) {
    return (
      <div className="aspect-[3/4] sm:aspect-[4/3] rounded-2xl overflow-hidden">
        <img src={src} alt={alt} loading="lazy" decoding="async" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
      </div>
    )
  }
  return (
    <div className="aspect-[3/4] sm:aspect-[4/3] rounded-2xl bg-navy-light flex items-center justify-center">
      <p className="font-sans text-xs text-white/40 text-center px-4">{alt}<br /><span className="text-[10px] text-white/30">{comingSoon}</span></p>
    </div>
  )
}

export default function Gallery() {
  const { t } = useLang()
  const g = t.gallery
  return (
    <section id="gallery" className="bg-navy py-20 sm:py-28">
      <div className="max-w-5xl mx-auto px-5 sm:px-8">
        <div className="text-center mb-10">
          <p className="label mb-3">{g.label}</p>
          <h2 className="section-heading-light mb-2">{g.heading}</h2>
          <p className="font-sans text-sm text-white/40">{g.sub}</p>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:gap-4">
          {photos.map((name) => (
            <GallerySlot key={name} src={`/images/${name}.webp`} alt={g.photos[name]} comingSoon={g.comingSoon} />
          ))}
        </div>
      </div>
    </section>
  )
}
