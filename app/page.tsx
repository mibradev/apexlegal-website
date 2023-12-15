import { Metadata } from 'next'
import Hero from '../components/hero'
import Features from '../components/features'
import About from '../components/about'
import Services from '../components/services'
import Contact from '../components/contact'
import Footer from '../components/footer'

export const metadata: Metadata = {
  title: 'Apex Legal',
  description: 'Translation and language solutions.',
}

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <About />
      <Services />
      <Contact />
      <Footer />
    </>
  )
}
