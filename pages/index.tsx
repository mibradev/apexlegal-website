import type { NextPage } from 'next'
import Head from 'next/head'
import { Inter } from '@next/font/google'
import Hero from '../components/hero'
import Features from '../components/features'
import Services from '../components/services'
import About from '../components/about'
import Contact from '../components/contact'

const inter = Inter({ subsets: ['latin'] })

const Home: NextPage = () => {
  return (
    <div className={inter.className}>
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
    </div>
  )
}

export default Home
