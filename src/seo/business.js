// Single source of truth for the business facts that appear in structured data,
// meta tags and the sitemap. Everything here must match what's on the page —
// Google penalises schema that contradicts the visible content.

export const SITE_URL = 'https://excursion-veli-bol.com'

export const business = {
  name: 'Veli Bol Excursions',
  alternateName: 'Excursion Veli Bol',
  legalNameNote: 'Family-run since 1994',
  foundingDate: '1994',
  telephone: '+385957420929',
  telephoneDisplay: '+385 95 742 09 29',
  email: 'milankarmelic@gmail.com',
  whatsapp: 'https://wa.me/385957420929',
  address: {
    street: 'Porat — Ul. Bolskih Pomoraca',
    locality: 'Bol',
    region: 'Brač',
    country: 'HR',
  },
  geo: { lat: 43.2621, lng: 16.6558 },
  mapUrl: 'https://maps.app.goo.gl/SpNcdWgtLhwKhRzH7',
  // Every profile the business controls. Listing them all lets Google collapse
  // them into one entity instead of guessing at several.
  sameAs: [
    'https://www.instagram.com/excursion_veli_bol/',
    'https://www.facebook.com/share/193sA2P542/',
    'https://www.tripadvisor.ca/Attraction_Review-g303802-d34501358-Reviews-Excursion_VELI_Bol-Bol_Brac_Island_Split_Dalmatia_County_Dalmatia.html',
    'https://maps.app.goo.gl/SpNcdWgtLhwKhRzH7',
  ],
  rating: { value: '5', count: '38' },
}

// Ticket prices, in EUR. Mirrors the pricing table in Essentials.jsx.
export const pricing = {
  adult: '65',
  currency: 'EUR',
  // Offers without an end date get flagged in Search Console; bump this when
  // the season's prices are confirmed.
  priceValidUntil: '2027-12-31',
}

// The <title> and meta description are per language — `meta` in src/i18n/*.js.
export const seo = {
  ogImage: `${SITE_URL}/og-image.jpg`,
  heroImage: `${SITE_URL}/images/hero.webp`,
}
