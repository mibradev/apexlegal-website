import type { NextPage } from 'next'
import Head from 'next/head'
import Hero from '../components/hero'
import Features from '../components/features'
import About from '../components/about'
import Services from '../components/services'
import Contact from '../components/contact'
import Footer from '../components/footer'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Apex Legal</title>
        <meta
          name="description"
          content="Translation and language solutions."
        />
      </Head>
      <Hero />
      <Features />
      <About />
      <Services />
      <Contact />
      <Footer />
    </>
  )
}

export default Home
