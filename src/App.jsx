import { LangProvider } from './i18n'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Seo from './seo/Seo'
import StructuredData from './seo/StructuredData'
import Hero from './sections/Hero'
import Essentials from './sections/Essentials'
import About from './sections/About'
import History from './sections/History'
import Experience from './sections/Experience'
import FoodOnBoard from './sections/FoodOnBoard'
import PrivateTour from './sections/PrivateTour'
import Gallery from './sections/Gallery'
import Reviews from './sections/Reviews'
import FAQ from './sections/FAQ'
import BookingCTA from './sections/BookingCTA'

export default function App({ lang }) {
  return (
    <LangProvider lang={lang}>
      <Seo />
      <Navbar />
      <main>
        <Hero />
        <Essentials />
        <About />
        <PrivateTour />
        <History />
        <Experience />
        <FoodOnBoard />
        <Gallery />
        <Reviews />
        <FAQ />
        <BookingCTA />
      </main>
      <Footer />
      <StructuredData />
    </LangProvider>
  )
}
