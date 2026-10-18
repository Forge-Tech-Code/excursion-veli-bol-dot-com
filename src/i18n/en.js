// Every user-visible string on the English page. hr.js and de.js must have
// exactly the same keys — the build fails naming the key if they drift.
//
// Lists that pair text with something non-textual (a price, an icon, a photo)
// are keyed by id, not index, so a reorder can never mis-pair them.

export default {
  meta: {
    title: 'Boat Tours from Bol, Croatia | Veli Bol Excursions',
    description:
      'Half-day boat tours from Bol on Brač — hidden Adriatic bays off Hvar, two swimming stops, snorkeling, paddleboards and a slow lunch aboard. €65 per adult.',
    ogTitle: 'Boat Tours from Bol, Croatia — Veli Bol Excursions',
    ogDescription:
      'A quiet half-day boat tour from Bol, Brač to the hidden bays of Hvar. Swimming stops, snorkeling, paddleboards, slow lunch. Family-run since 1994.',
    ogImageAlt: 'Veli Bol boat anchored in a hidden Adriatic bay near Bol, Croatia',
  },

  nav: {
    links: {
      essentials: 'Tour',
      about: 'About',
      private: 'Private',
      experience: 'Experience',
      food: 'Food',
      gallery: 'Gallery',
      reviews: 'Reviews',
    },
    book: 'Book',
  },

  hero: {
    ariaLabel: 'Veli Bol Excursions — boat tours from Bol, Brač',
    imageAlt:
      'Aerial view of the Veli Bol excursion boat anchored in a hidden Adriatic bay near Bol on Brač, Croatia',
    label: 'Bol · Brač · Croatia',
    srSuffix: ' — half-day boat tours from Bol, Brač, Croatia',
    lede: 'Half-day boat tours from Bol to the hidden bays of Hvar — swimming stops, a slow lunch, nothing rushed.',
    tagline: 'You decide where you want to swim',
    cta: 'Book your seat →',
    scroll: 'Scroll',
  },

  essentials: {
    label: 'Tour info · Half-day trip from Bol',
    heading: 'The essentials',
    cards: {
      duration: { label: 'Duration', value: 'Half day', sub: '6h total · 1h sail · 5h swim' },
      schedule: { label: 'Schedule', value: '10:00 – 16:00', sub: 'every day' },
      destination: { label: 'Destination', value: 'Island Hvar', sub: 'across the channel from Bol' },
      group: { label: 'Group size', value: '16ish', sub: 'as many as can hold onto the ropes' },
    },
    includedHeading: "What's included",
    included: [
      'Two different swimming stops per trip',
      'Every day a different bay',
      'Family and couples oriented',
      'No stress, no drama and no pressure',
      'Snorkeling equipment on board',
      'Stand up boards for all to share',
      'Slide for extra style points!',
    ],
    pricing: {
      label: 'Pricing',
      heading: ['Simple &', 'transparent'],
      adult: 'Adult',
      child: 'Child',
      perPerson: 'per person',
      halfPrice: ['Half', 'price'],
      free: 'Free',
      familyNote: 'Family discount available — just ask.',
    },
    cta: 'Book your seat →',
    mapTitle: 'Excursion boat Veli, Bol',
  },

  about: {
    imageAlt: 'The Veli Bol wooden motosailer with her captain in Bol harbour, Brač',
    badgeTop: '🤍 Family-run',
    badgeBottom: 'EST. 1994',
    label: 'About us · Est. 1994',
    heading: ['A small boat.', 'Big Adriatic days.'],
    body:
      "Our wooden motosailer was handcrafted by my father, and we've been sailing her out of Bol since 2000. " +
      'Six tables on the main deck — one for each group — so you always have your own corner of the boat, in the shade. ' +
      'The upper deck is open and sunny, with platforms to jump from and a slide if you feel like it — and if not, ' +
      "there's snorkeling gear and paddleboards. Toilet aboard, food options available. We anchor where the water is " +
      'calm and the coves are quiet. No hidden fees, no extra costs — €65 for the ticket, €55 for the food package.',
  },

  private: {
    label: 'Private charter · Sunset from Bol',
    heading: 'Private sunset tour',
    body:
      "The boat is yours, out on the Adriatic as the light turns to gold. It's an easy, " +
      'romantic way to spend an evening — timed for the sunset and booked simply by the ' +
      'hour, for as long as you like.',
    from: 'From',
    fromSub: 'per charter · 3 hours max',
    tiers: {
      h1: { duration: '1 hour', includes: 'A bottle of wine' },
      h2: { duration: '2 hours', includes: 'Wine + food on board' },
      h3: { duration: '3 hours', includes: 'Wine, food + a swim stop' },
    },
    cta: 'Enquire on WhatsApp',
    photos: {
      'aerial-bol-sunset': 'Aerial view of Bol on Brač under a fiery sunset sky',
      'couple-embracing-sunset-boat': 'Couple embracing on deck during a private sunset charter from Bol',
      'legs-dangling-off-boat-sunset': 'Legs dangling off the boat during a sunset cruise on the Adriatic',
      'excursion-boat-zlatni-rat-sunset': 'The Veli Bol excursion boat off Zlatni Rat beach at sunset',
      'sun-over-headland-sunset': 'The sun setting over the headland and the calm Adriatic off Bol',
    },
  },

  history: {
    label: 'Our story · Handbuilt in Bol',
    heading: 'Built by hand, by the whole village.',
    body:
      'She started as a keel and a stack of timber in a yard above the harbour. My father shaped ' +
      'every rib by eye, bending the wood plank by plank, and the neighbours came by to lend a ' +
      'hand, an opinion, and a coffee. No moulds, no factory — just the old Dalmatian way, a slow ' +
      'summer of sawdust and patience. When she finally slipped into the water off Bol, half the ' +
      "town was there to watch. She's carried our guests ever since.",
    photos: {
      'history-hull-on-the-stocks': 'The wooden hull of the Veli Bol boat taking shape on the stocks in Bol, 1994',
      'history-keel-and-ribs': 'The bare keel and ribs at the start of the build in Bol',
      'history-shipwrights-at-work': 'Two Dalmatian shipwrights working along the ribs of the wooden hull',
      'history-framing-with-sea-view': 'Framing the deck with the town of Bol and the Adriatic behind',
      'history-laying-the-deck': 'Laying the timber deck of the motosailer plank by plank',
      'history-painting-the-hull': 'Painting the finished wooden hull by hand in the yard above Bol harbour',
      'history-launched-in-bol': 'The finished Veli Bol boat afloat in Bol harbour on Brač',
    },
  },

  experience: {
    label: 'The experience · A day on the Adriatic',
    heading: 'Reasons to come aboard',
    reasons: {
      sun: { title: 'The Sun', sub: 'Adriatic gold, all day.' },
      sea: { title: 'The Sea', sub: 'Crystal clear, utterly calm.' },
      food: { title: 'The Food', sub: 'Fresh Croatian bites.' },
      stress: { title: 'No stress', sub: 'Leave it at the dock.' },
      pressure: { title: 'No pressure', sub: 'Your pace. Your call.' },
      drama: { title: 'No drama', sub: 'Good vibes only.' },
      crowd: { title: 'Small crowd aboard', sub: 'No strangers, just guests.' },
      royal: { title: 'Royal treatment', sub: 'Looked after, start to finish.' },
      slide: { title: 'Slide', sub: 'Because why not?' },
    },
  },

  food: {
    label: 'On board · Croatian food',
    heading: 'Food on board',
    sub: 'Optional add-ons — let us know when booking via WhatsApp.',
    menu: {
      grill: {
        name: 'Full grill',
        desc: '3-course meal: hot appetisers (anchovies on bruschetta, grilled cheese with olives) · grilled mackerel with vegetables · fresh crepes with Nutella, Lino Lada, fig jam or quince marmalade. Local red wine & water included.',
      },
      kids: { name: 'Kids menu', desc: 'Fish, water' },
      cold: { name: 'Cold plate', desc: 'Salted sardines, vegetables, wine' },
      pancakes: { name: 'Pancakes only', desc: 'With jam or nutella' },
    },
  },

  gallery: {
    label: 'Gallery · Bol, Brač & Hvar',
    heading: 'Postcards from the boat',
    sub: 'Real moments from real days out on the Adriatic, between Bol and the bays of Hvar.',
    comingSoon: 'Photo coming soon',
    photos: {
      'aerial-gulet-turquoise-cove': 'Aerial view of the Veli Bol boat anchored in a turquoise cove off Hvar',
      'woman-jumping-off-boat-slide': 'Guest jumping off the boat slide into the Adriatic',
      'underwater-diver-sunrays': 'Diver beneath sunrays in the clear water of a Hvar bay',
      'zlatni-rat-beach-bol-from-boat': 'Zlatni Rat beach at Bol on Brač seen from the boat',
      'rocky-cove-caves-swimmers': 'Swimmers by the rocky cove caves on the Adriatic coast',
      'kids-peace-sign-boat-cabin': 'Kids having fun in the cabin of the Veli Bol excursion boat',
      'aerial-boat-narrow-blue-cove': 'Aerial view of the boat moored in a narrow blue cove near Bol',
      'snorkeler-selfie-underwater': 'Snorkeler taking a selfie in the clear Adriatic water',
      'group-swimming-with-floatie': 'Guests swimming with a floatie at an Adriatic swim stop',
      'gulet-anchored-pine-shore': 'The wooden motosailer anchored along a pine-lined Hvar shore',
      'aerial-gulet-clear-shallows': 'Aerial view of the boat over the clear shallows of a hidden bay',
      'underwater-freediver-woman': 'Freediver exploring the seabed on a snorkeling stop',
      'woman-paddleboard-cheering': 'Guest cheering on one of the boat’s stand-up paddleboards',
      'rocky-cove-caves-splash': 'Guests splashing into the sea by the cove caves near Bol',
      'aerial-white-boat-cove': 'Aerial view of the excursion boat in a quiet Adriatic cove',
      'gulet-deck-passengers-ships-wheel': 'Passengers on the main deck beside the ship’s wheel',
    },
  },

  reviews: {
    label: 'Reviews · Boat tours from Bol',
    heading: '100% Recommend',
    basedOn: 'Based on 38 guest reviews',
    viewOnGoogle: 'View on Google',
    featuredLabel: 'As featured in',
    countries: { italy: 'Italy', germany: 'Germany', uk: 'UK', france: 'France' },
    readAll: 'Read all reviews on Google',
  },

  faq: {
    label: 'FAQ · Boat trips from Bol',
    heading: 'Good to know',
    items: [
      {
        q: 'Where does the boat leave from?',
        a: 'From Porat — Ul. Bolskih Pomoraca, on the Bol waterfront, a few minutes on foot from the centre of town. We cast off at 10:00 and are back around 16:00.',
      },
      {
        q: 'Where does the boat tour go?',
        a: 'Across the channel from Bol to the island of Hvar. We pick a different bay each day depending on the wind and the sea — and you decide where you want to swim.',
      },
      {
        q: 'How long is the trip?',
        a: 'Six hours in total: about an hour under way and five hours at anchor, split across two different swimming stops.',
      },
      {
        q: 'How much does the boat trip cost?',
        a: 'The ticket is €65 per adult, half price for children 4–10 and free for under-4s. Food on board is a separate, optional add-on. There are no hidden fees, and a family discount is available — just ask.',
      },
      {
        q: 'Is lunch included?',
        a: 'Not in the ticket price. The full grill is €55 — hot appetisers, grilled mackerel with vegetables, fresh crepes, with local red wine and water. There is also a €30 kids menu, a €20 cold plate and €10 pancakes. Let us know when you book.',
      },
      {
        q: 'What is on board?',
        a: 'Snorkeling equipment, stand-up paddleboards to share, a slide and jump platforms. Six tables in the shade on the main deck — one per group — an open sun deck above, and a toilet aboard.',
      },
      {
        q: 'Can we book the whole boat privately?',
        a: 'Yes. Private sunset charters run by the hour, from €150 for one hour up to €400 for three, with wine, food on board and a swim stop depending on the length. Message us on WhatsApp to arrange one.',
      },
      {
        q: 'What if the weather is bad?',
        a: 'We monitor forecasts closely. If conditions are unsafe we reschedule or fully refund — your choice.',
      },
      {
        q: 'Is it suitable for children?',
        a: 'Yes. Family and kids are very welcome. Life jackets available for all ages.',
      },
      {
        q: 'What should I bring?',
        a: 'Swimwear, sunscreen, a towel, and anything you want to drink. We bring the rest.',
      },
      {
        q: 'How many guests per trip?',
        a: 'There’s no fixed cap — some days it’s just a handful, other days the boat is fuller, but there’s always room and it never feels crowded.',
      },
      {
        q: 'How do I confirm my booking?',
        a: "Send us a WhatsApp with your name and preferred date. We'll confirm within a few hours.",
      },
    ],
  },

  book: {
    label: 'Book your spot · Bol, Brač',
    heading: 'Ready to join us?',
    body:
      'Message us on WhatsApp to check availability on the boat and confirm your ' +
      'spot. We reply within a few hours.',
    cta: 'Message us on WhatsApp',
    departureLabel: 'Departure',
  },

  footer: {
    blurb: ['Family-run from Bol, Brač since 1994.', 'A handful of guests, a different hidden bay every day.'],
    explore: 'Explore',
    links: {
      essentials: 'Tour Info',
      about: 'About',
      experience: 'Experience',
      food: 'Food',
      gallery: 'Gallery',
      reviews: 'Reviews',
      faq: 'FAQ',
    },
    contact: 'Get in touch',
    place: 'Bol, Croatia.',
  },

  // Words that appear only in the JSON-LD (src/seo/schema.js).
  schema: {
    orgDescription:
      'Family-run half-day boat excursions from Bol on Brač island, Croatia. Hidden Adriatic bays off the island of Hvar, two swimming stops, snorkeling and paddleboards, and a slow lunch aboard a handcrafted wooden motosailer.',
    slogan: 'A quiet half-day on the Adriatic.',
    areaServed: ['Bol, Brač, Croatia', 'Brač island, Croatia', 'Hvar island, Croatia', 'Split-Dalmatia County, Croatia'],
    excursionName: 'Half-Day Boat Excursion from Bol to Hvar',
    excursionDescription:
      'A quiet half-day on the Adriatic — across the channel from Bol to the island of Hvar for two swimming stops in hidden bays, with snorkeling equipment, stand-up paddleboards and a slide, plus an optional slow lunch aboard a family-run wooden motosailer. Departs Bol at 10:00 and returns around 16:00.',
    category: 'Boat tour',
    tripName: 'Half-day boat trip from Bol to the bays of Hvar',
    tripDescription:
      'Six hours from Bol harbour: about an hour under way and five hours at anchor, split across two different bays across the channel on Hvar. A different bay every day.',
    touristType: ['Families', 'Couples', 'Swimmers and snorkelers'],
    hvarBaysPlace: 'Hidden bays on the island of Hvar, Croatia',
    privateName: 'Private Sunset Boat Charter from Bol',
    privateDescription:
      'The whole boat to yourselves for a sunset charter out of Bol, booked by the hour — one to three hours, with wine, food on board and a swim stop depending on the length.',
    privateServiceType: 'Private boat charter',
    privateOfferName: 'Private sunset charter',
    privateOfferIncludes: 'private charter. Includes:',
    heroCaption: 'The Veli Bol excursion boat anchored in a hidden Adriatic bay near Bol on Brač, Croatia',
  },
}
