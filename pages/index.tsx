import type { NextPage } from 'next'
import Head from 'next/head'
import { Inter } from '@next/font/google'
import Hero from '../components/hero'
import Features from '../components/features'
import Services from '../components/services'

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
      <Services />
    </div>
  )
}

function AboutUs() {
  return (
    <div className="p-6 2xl:px-48">
      <section className="space-y-4">
        <h2 className="text-3xl text-bold text-cyan-900">About us</h2>
        <p>
          Apex Legal is an English-Arabic translation and language solution
          agency founded in Egypt to serve clients anywhere in the Middle East
          and the world by a group of devoted translators and lawyer linguists.
          Our services are confined to the law and finance related area, which
          receive our undivided attention enabling us to professionally and
          impeccably utilize and maintain the relevant jargons and styles.
        </p>
        <p>
          Do not put your business at stake; you can completely depend our
          highly skilled and experienced linguists in processing your legal and
          financial materials as they perfectly understand the gravity of every
          single word, and will exert their utmost effort to maintain high
          quality and meet your deadlines.
        </p>
        <p>
          Through our supporting services, we aspire and spare no effort to be
          an essential part of your business and successfully prosper together.
        </p>
      </section>
    </div>
  )
}

function ContactUs() {
  return (
    <section className="h-screen flex flex-col justify-center items-center bg-cyan-900 text-cyan-100 space-y-8">
      <h2 className="text-3xl">Contact us</h2>
      <form
        className="w-full"
        name="contact"
        method="POST"
        data-netlify-honeypot="honey"
        data-netlify-recaptcha="true"
        data-netlify="true"
      >
        <div className="hidden">
          <label htmlFor="honey">honey</label>
          <input type="text" name="honey" id="honey" />
        </div>
        <div className="md:w-1/2 lg:w-2/5 xl:w-1/3 2xl:w-1/4 space-y-3 mx-auto px-8">
          <div className="space-y-3">
            <label className="block" htmlFor="name">
              Name <span className="text-red-500">*</span>
            </label>
            <input
              className="block w-full p-2 bg-stone-100 text-stone-900"
              type="text"
              name="name"
              id="name"
              required
            />
          </div>
          <div className="space-y-3">
            <label className="block" htmlFor="email">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              className="block w-full p-2 bg-stone-100 text-stone-900"
              type="email"
              name="email"
              id="email"
              required
            />
          </div>
          <div className="space-y-3">
            <label className="block" htmlFor="company">
              Company
            </label>
            <input
              className="block w-full p-2 bg-stone-100 text-stone-900"
              type="text"
              name="company"
              id="company"
            />
          </div>
          <div className="space-y-3">
            <label className="block" htmlFor="message">
              Message <span className="text-red-500">*</span>
            </label>
            <textarea
              className="block w-full p-2 bg-stone-100 text-stone-900"
              name="message"
              rows={3}
              id="message"
              required
            />
          </div>
          <div data-netlify-recaptcha="true"></div>
          <button
            className="bg-stone-900 text-stone-100 px-4 py-2"
            type="submit"
          >
            Send
          </button>
        </div>
      </form>
    </section>
  )
}

export default Home
