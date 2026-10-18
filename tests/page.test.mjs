// Checks specific to the Veli Bol page. Most of them hold a rule from
// CLAUDE.md in place — the draft-language switch, the colour rhythm, prices
// and reviews that must match their structured data — so a change that
// breaks one fails here first.
import { test, describe, before, after } from 'node:test'
import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import path from 'node:path'
import { chromium } from 'playwright'
import { DIST, loadPage, pageUrl, nodeOfType, graphNodes, typesOf, textOf, norm, cssFiles, isFile, serveDist } from './lib.mjs'
import { SITE_URL, business, pricing } from '../src/seo/business.js'
import { LANGS, LIVE, LIVE_LANGS, localePath, localeTag } from '../src/i18n/locales.js'
import en from '../src/i18n/en.js'
import hr from '../src/i18n/hr.js'
import de from '../src/i18n/de.js'

const dictionaries = { en, hr, de }
const pages = LANGS.map((lang) => ({ lang, path: localePath[lang], ...loadPage(localePath[lang]) }))
const sectionText = (document, id) => norm(textOf(document.getElementById(id)))
const euros = (s) => [...String(s).matchAll(/€\s?(\d+)/g)].map((m) => m[1])

/** The key paths of a dictionary, with array lengths, for comparing shapes. */
function shape(value, at = '') {
  if (Array.isArray(value)) return [`${at}[${value.length}]`, ...value.flatMap((v, i) => shape(v, `${at}[${i}]`))]
  if (value && typeof value === 'object') return Object.keys(value).flatMap((k) => shape(value[k], `${at}.${k}`))
  return [`${at}:${typeof value}`]
}

describe('page: Veli Bol', () => {
  test('V01 the Croatian and German dictionaries have exactly the keys of the English one', () => {
    for (const lang of LANGS.filter((l) => l !== 'en')) {
      assert.deepEqual(shape(dictionaries[lang]), shape(en), `${lang}.js does not match en.js`)
    }
  })

  test('V02 no page links to a draft language, and draft languages are in nobody\'s hreflang', () => {
    const drafts = LANGS.filter((l) => !LIVE[l]).map((l) => localePath[l])
    for (const { path: p, document } of pages) {
      for (const a of document.querySelectorAll('a[href]')) {
        const href = a.getAttribute('href')
        assert.ok(!drafts.some((d) => href === d || href.startsWith(d) || href.startsWith(SITE_URL + d)), `${p} links to draft page ${href}`)
      }
      const alts = [...document.querySelectorAll('link[rel="alternate"][hreflang]')].map((l) => l.getAttribute('href'))
      for (const d of drafts) assert.ok(!alts.includes(SITE_URL + d), `${p} lists draft ${d} as an alternate`)
    }
  })

  test('V03 live languages carry a reciprocal hreflang set once there is more than one', () => {
    for (const { lang, path: p, document } of pages.filter((pg) => LIVE[pg.lang])) {
      const got = Object.fromEntries([...document.querySelectorAll('link[rel="alternate"][hreflang]')].map((l) => [l.getAttribute('hreflang'), l.getAttribute('href')]))
      const want = LIVE_LANGS.length > 1
        ? { ...Object.fromEntries(LIVE_LANGS.map((l) => [localeTag[l], pageUrl(localePath[l])])), 'x-default': pageUrl('/') }
        : {}
      assert.deepEqual(got, want, `${p} (${lang})`)
    }
  })

  for (const { lang, path: p, document } of pages) {
    describe(`${p}`, () => {
      test('V04 every section the menu and footer link to exists', () => {
        const ids = ['home', 'essentials', 'about', 'private', 'history', 'experience', 'food', 'gallery', 'reviews', 'faq', 'book', 'contact']
        assert.deepEqual(ids.filter((id) => !document.getElementById(id)), [])
        const nav = [...document.querySelectorAll('header a[href^="#"]')].map((a) => a.getAttribute('href'))
        for (const h of ['#essentials', '#about', '#private', '#experience', '#food', '#gallery', '#reviews', '#book']) {
          assert.ok(nav.includes(h), `the header has no link to ${h}`)
        }
      })

      test('V05 sections alternate navy and cream from Essentials down', () => {
        const order = ['essentials', 'about', 'private', 'history', 'experience', 'food', 'gallery', 'reviews', 'faq', 'book']
        const bands = order.map((id) => (document.getElementById(id).getAttribute('class').match(/\bbg-(navy|cream)\b/) ?? [])[1])
        bands.forEach((b, i) => assert.equal(b, i % 2 === 0 ? 'navy' : 'cream', `#${order[i]} is ${b}`))
      })

      test('V06 the ticket price matches the Product offer', () => {
        const product = nodeOfType(document, 'Product')
        assert.equal(product.offers.price, pricing.adult)
        assert.equal(product.offers.priceCurrency, 'EUR')
        assert.ok(euros(sectionText(document, 'essentials')).includes(pricing.adult), `€${pricing.adult} is not in the price table`)
        assert.ok(product.offers.priceValidUntil >= new Date().toISOString().slice(0, 10), 'priceValidUntil has passed — Search Console will flag the offer')
      })

      test('V07 the private charter prices match the structured data', () => {
        const charter = graphNodes(document).find((n) => n['@id']?.endsWith('#private'))
        const agg = charter.offers
        const prices = agg.offers.map((o) => o.price)
        assert.equal(Number(agg.offerCount), prices.length)
        assert.equal(agg.lowPrice, String(Math.min(...prices.map(Number))))
        assert.equal(agg.highPrice, String(Math.max(...prices.map(Number))))
        const shown = euros(sectionText(document, 'private'))
        for (const pr of prices) assert.ok(shown.includes(pr), `€${pr} is in the JSON-LD but not in the section`)
      })

      test('V08 every FAQPage question and answer is on the page, in this language', () => {
        const faq = nodeOfType(document, 'FAQPage')
        const qs = [...document.querySelectorAll('#faq button')].map((b) => norm(textOf(b)))
        assert.equal(faq.mainEntity.length, qs.length)
        for (const q of faq.mainEntity) {
          assert.ok(qs.includes(norm(q.name)), `question not on the page: ${q.name}`)
          assert.ok(sectionText(document, 'faq').includes(norm(q.acceptedAnswer.text)), `answer not in the HTML: ${q.name}`)
        }
        assert.deepEqual(faq.mainEntity.map((q) => q.name), dictionaries[lang].faq.items.map((i) => i.q))
      })

      test('V09 every marked-up review is shown on the page, and so is the review count', () => {
        const product = nodeOfType(document, 'Product')
        const reviews = sectionText(document, 'reviews')
        for (const r of product.review) {
          assert.ok(reviews.includes(norm(r.reviewBody)), `review not on the page: ${r.reviewBody}`)
          assert.ok(reviews.includes(r.author.name), `reviewer not on the page: ${r.author.name}`)
        }
        assert.equal(product.aggregateRating.reviewCount, business.rating.count)
        assert.ok(reviews.includes(business.rating.count), `the page does not show the ${business.rating.count} reviews the markup claims`)
      })

      test('V10 phone, WhatsApp and email links all use the business details', () => {
        for (const a of document.querySelectorAll('a[href^="tel:"]')) assert.equal(a.getAttribute('href'), `tel:${business.telephone}`)
        for (const a of document.querySelectorAll('a[href*="wa.me"]')) assert.equal(a.getAttribute('href'), business.whatsapp)
        for (const a of document.querySelectorAll('a[href^="mailto:"]')) assert.equal(a.getAttribute('href'), `mailto:${business.email}`)
        assert.ok(document.querySelectorAll('a[href*="wa.me"]').length >= 3, 'the WhatsApp booking buttons are missing')
      })

      test('V11 the hero image preload matches the hero <img>, so the browser keeps what it preloaded', () => {
        const pre = document.querySelector('link[rel="preload"][as="image"]')
        const img = document.querySelector('#home img')
        assert.equal(pre.getAttribute('imagesrcset'), img.getAttribute('srcset'))
        assert.equal(pre.getAttribute('imagesizes'), img.getAttribute('sizes'))
        assert.equal(img.getAttribute('fetchpriority'), 'high')
        assert.notEqual(img.getAttribute('loading'), 'lazy', 'the hero must not lazy-load')
      })

      test('V12 the structured data is one business, with this page\'s nodes on this page\'s URL', () => {
        const nodes = graphNodes(document)
        assert.equal(nodeOfType(document, 'LocalBusiness')['@id'], `${SITE_URL}/#business`)
        const webPage = nodeOfType(document, 'WebPage')
        assert.equal(webPage['@id'], `${pageUrl(p)}#webpage`)
        assert.equal(webPage.inLanguage, localeTag[lang])
        for (const n of nodes.filter((x) => typesOf(x).some((t) => ['FAQPage', 'Product', 'TouristTrip', 'Service'].includes(t)))) {
          assert.ok(n['@id'].startsWith(pageUrl(p) + '#'), `${typesOf(n)} @id ${n['@id']} is not on ${pageUrl(p)}`)
        }
      })

      test('V13 every photo has real alt text, in this language', () => {
        for (const img of document.querySelectorAll('img')) {
          assert.ok((img.getAttribute('alt') ?? '').trim().length > 10, `${img.getAttribute('src')} has no real alt text`)
        }
        assert.equal(sectionText(document, 'gallery').includes(dictionaries[lang].gallery.comingSoon), false, 'a gallery slot is showing its placeholder')
      })
    })
  }

  test('V14 nothing loads from Google Fonts, and the self-hosted fonts exist', () => {
    for (const { path: p, html } of pages) assert.doesNotMatch(html, /fonts\.(googleapis|gstatic)\.com/, `${p} still references Google Fonts`)
    const css = cssFiles().map((f) => readFileSync(f, 'utf8')).join('')
    assert.doesNotMatch(css, /fonts\.(googleapis|gstatic)\.com/)
    const faces = [...css.matchAll(/@font-face\{[^}]*\}/g)].map((m) => m[0])
    for (const family of ['Inter', 'Playfair Display']) assert.ok(faces.some((f) => f.includes(family)), `no @font-face for ${family}`)
    for (const f of faces) {
      const src = f.match(/url\(([^)]+)\)/)[1].replace(/['"]/g, '')
      assert.ok(isFile(path.join(DIST, src)), `${src} is missing`)
    }
  })

  test('V15 guest quotes are the same on every page — they are not translated', () => {
    const bodies = (doc) => nodeOfType(doc, 'Product').review.map((r) => r.reviewBody)
    for (const pg of pages.slice(1)) assert.deepEqual(bodies(pg.document), bodies(pages[0].document))
  })

  test('V16 every section heading is translated on the draft pages', () => {
    const headings = (doc) => [...doc.querySelectorAll('main h2')].map((h) => norm(textOf(h)))
    const english = headings(pages[0].document)
    for (const pg of pages.slice(1)) {
      const same = headings(pg.document).filter((h, i) => h === english[i])
      assert.deepEqual(same, [], `${pg.path} still has English headings`)
    }
  })
})

describe('page: Veli Bol in the browser', () => {
  let server
  let browser
  before(async () => {
    server = await serveDist()
    browser = await chromium.launch(process.env.CHROMIUM_PATH ? { executablePath: process.env.CHROMIUM_PATH } : {})
  })
  after(async () => {
    await browser?.close()
    await server?.close()
  })

  test('V17 a FAQ question opens its answer', async () => {
    const page = await browser.newPage()
    await page.route('**/*', (r) => (r.request().url().startsWith(server.origin) ? r.continue() : r.abort()))
    await page.goto(server.origin + '/', { waitUntil: 'networkidle' })
    const button = page.locator('#faq button').first()
    assert.equal(await button.getAttribute('aria-expanded'), 'false')
    await button.click()
    assert.equal(await button.getAttribute('aria-expanded'), 'true')
    const answer = page.locator('#faq-answer-0')
    await page.waitForFunction(() => document.getElementById('faq-answer-0').getBoundingClientRect().height > 20)
    assert.ok((await answer.boundingBox()).height > 20, 'the answer did not open')
    await page.close()
  })
})
