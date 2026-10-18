// The page's JSON-LD graph, assembled from the same data the sections render
// — the page's dictionary, the prices, the reviews — so the two can't drift
// apart. Built once per language by src/seo/StructuredData.jsx.
//
// @ids: the website and the business are one entity whatever the language, so
// they always hang off the root URL. Everything else describes THIS page in
// THIS language, so it hangs off the page's own URL — on the English page that
// is the root too, so the English ids are unchanged.
import { SITE_URL, business, pricing, seo } from './business.js'
import { localePath, localeTag } from '../i18n/locales.js'
import { tierPrices } from '../sections/PrivateTour.jsx'
import { reviews } from '../sections/Reviews.jsx'

const id = (fragment) => `${SITE_URL}/#${fragment}`

// '€150' -> '150'
const amount = (price) => price.replace(/[^\d.]/g, '')

// The guest testimonials exactly as the Reviews section shows them — Search
// Console flags a Product with no `review`, and Google requires that any review
// in the markup also be visible on the page. Each card renders five filled
// stars, so ratingValue is 5. The quotes are the guests' own words and are not
// translated, so they are the same on every language page.
const productReviews = reviews.map(({ name, text }) => ({
  '@type': 'Review',
  author: { '@type': 'Person', name },
  reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5', worstRating: '1' },
  reviewBody: text,
}))

export function buildGraph(t, lang) {
  const pageUrl = `${SITE_URL}${localePath[lang]}`
  const pageId = (fragment) => `${pageUrl}#${fragment}`
  const inLanguage = localeTag[lang]

  const tiers = Object.entries(t.private.tiers).map(([key, tier]) => ({ ...tier, price: tierPrices[key] }))
  const priceNumbers = tiers.map((tier) => Number(amount(tier.price)))

  const organization = {
    '@type': ['TravelAgency', 'LocalBusiness'],
    '@id': id('business'),
    name: business.name,
    alternateName: business.alternateName,
    url: `${SITE_URL}/`,
    image: seo.ogImage,
    logo: `${SITE_URL}/apple-touch-icon.png`,
    description: t.schema.orgDescription,
    slogan: t.schema.slogan,
    telephone: business.telephone,
    email: business.email,
    priceRange: '€€',
    currenciesAccepted: pricing.currency,
    foundingDate: business.foundingDate,
    hasMap: business.mapUrl,
    address: {
      '@type': 'PostalAddress',
      streetAddress: business.address.street,
      addressLocality: business.address.locality,
      addressRegion: business.address.region,
      addressCountry: business.address.country,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: business.geo.lat,
      longitude: business.geo.lng,
    },
    areaServed: t.schema.areaServed.map((name) => ({ '@type': 'Place', name })),
    sameAs: business.sameAs,
    makesOffer: [{ '@id': pageId('excursion') }, { '@id': pageId('private') }],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: business.rating.value,
      reviewCount: business.rating.count,
    },
  }

  const excursion = {
    '@type': 'Product',
    '@id': pageId('excursion'),
    name: t.schema.excursionName,
    description: t.schema.excursionDescription,
    image: seo.ogImage,
    brand: { '@id': id('business') },
    category: t.schema.category,
    offers: {
      '@type': 'Offer',
      price: pricing.adult,
      priceCurrency: pricing.currency,
      priceValidUntil: pricing.priceValidUntil,
      availability: 'https://schema.org/InStock',
      url: pageId('book'),
      seller: { '@id': id('business') },
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: business.rating.value,
      reviewCount: business.rating.count,
      bestRating: '5',
      worstRating: '1',
    },
    review: productReviews,
  }

  // The excursion described as a trip as well as a product — this is the shape
  // Google uses to understand what the tour actually is and where it goes.
  const trip = {
    '@type': 'TouristTrip',
    '@id': pageId('trip'),
    name: t.schema.tripName,
    description: t.schema.tripDescription,
    provider: { '@id': id('business') },
    touristType: t.schema.touristType,
    itinerary: {
      '@type': 'ItemList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          item: {
            '@type': 'Place',
            name: 'Bol, Brač',
            address: {
              '@type': 'PostalAddress',
              streetAddress: business.address.street,
              addressLocality: 'Bol',
              addressCountry: 'HR',
            },
          },
        },
        {
          '@type': 'ListItem',
          position: 2,
          item: { '@type': 'Place', name: t.schema.hvarBaysPlace },
        },
        {
          '@type': 'ListItem',
          position: 3,
          item: { '@type': 'Place', name: 'Bol, Brač' },
        },
      ],
    },
    offers: { '@id': pageId('excursion') },
  }

  // Typed as a Service, not a Product. Search Console flags any Product without
  // a rating, and the charter has no reviews of its own — the 38 Google reviews
  // are of the business as a whole, and reusing them here would be claiming a
  // rating for something nobody has rated. Service carries the same price range
  // without asking for one.
  const privateCharter = {
    '@type': 'Service',
    '@id': pageId('private'),
    name: t.schema.privateName,
    description: t.schema.privateDescription,
    image: `${SITE_URL}/images/aerial-bol-sunset.webp`,
    provider: { '@id': id('business') },
    serviceType: t.schema.privateServiceType,
    areaServed: { '@type': 'Place', name: t.schema.areaServed[0] },
    offers: {
      '@type': 'AggregateOffer',
      priceCurrency: pricing.currency,
      lowPrice: String(Math.min(...priceNumbers)),
      highPrice: String(Math.max(...priceNumbers)),
      offerCount: String(tiers.length),
      availability: 'https://schema.org/InStock',
      url: pageId('private'),
      seller: { '@id': id('business') },
      offers: tiers.map((tier) => ({
        '@type': 'Offer',
        name: `${t.schema.privateOfferName} — ${tier.duration}`,
        description: `${tier.duration} ${t.schema.privateOfferIncludes} ${tier.includes}.`,
        price: amount(tier.price),
        priceCurrency: pricing.currency,
        priceValidUntil: pricing.priceValidUntil,
        availability: 'https://schema.org/InStock',
        url: pageId('private'),
      })),
    },
  }

  const faqPage = {
    '@type': 'FAQPage',
    '@id': pageId('faq'),
    mainEntity: t.faq.items.map(({ q, a }) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: { '@type': 'Answer', text: a },
    })),
  }

  const website = {
    '@type': 'WebSite',
    '@id': id('website'),
    url: `${SITE_URL}/`,
    name: business.name,
    alternateName: business.alternateName,
    inLanguage,
    publisher: { '@id': id('business') },
  }

  const webPage = {
    '@type': 'WebPage',
    '@id': pageId('webpage'),
    url: pageUrl,
    name: t.meta.title,
    description: t.meta.description,
    isPartOf: { '@id': id('website') },
    about: { '@id': id('business') },
    primaryImageOfPage: { '@id': pageId('heroimage') },
    mainEntity: { '@id': pageId('excursion') },
    inLanguage,
  }

  const heroImage = {
    '@type': 'ImageObject',
    '@id': pageId('heroimage'),
    url: seo.heroImage,
    contentUrl: seo.heroImage,
    width: 2000,
    height: 1059,
    caption: t.schema.heroCaption,
  }

  return {
    '@context': 'https://schema.org',
    '@graph': [website, webPage, heroImage, organization, excursion, trip, privateCharter, faqPage],
  }
}
