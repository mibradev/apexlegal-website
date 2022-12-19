import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import {
  ChatBubbleBottomCenterTextIcon,
  DocumentMagnifyingGlassIcon,
  LanguageIcon,
  PencilSquareIcon,
  ScaleIcon,
} from '@heroicons/react/24/outline'
import heroImage from '../images/hero.jpg'

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
      <Header />
      <Features />
      <AboutUs />
      <Services />
    </div>
  )
}

function Header() {
  return (
    <div className="relative bg-cyan-900 text-white">
      <Image
        src={heroImage}
        alt="Hero image"
        fill
        className="absolute object-cover w-full h-full opacity-10"
      />
      <div className="relative z-10">
        <div className="p-6 md:px-12 lg:px-24 xl:px-48">
          <div className="space-y-6">
            <Navbar />
            <Hero />
          </div>
        </div>
      </div>
    </div>
  )
}

function Navbar() {
  return (
    <header>
      <h1 className="text-xl font-bold">Apex Legal</h1>
    </header>
  )
}

function Hero() {
  return (
    <main className="mx-auto max-w-4xl space-y-8 py-24 text-center">
      <div className="space-y-6">
        <h1 className="text-3xl text-bold">
          The Translation Agency You Can Trust!
        </h1>
        <p className="text-lg text-cyan-100">
          Our devoted lawyer linguists and translators have the required
          knowledge and hands-on experience that give solid grounds for your
          high expectations.
        </p>
      </div>
      <a
        href="#"
        className="inline-block bg-pink-700 text-pink-100 px-8 py-3 rounded-md text-xl text-bold shadow-md"
      >
        Contact us
      </a>
    </main>
  )
}

function Features() {
  return (
    <div className="p-6 md:px-12 lg:px-24 xl:px-48">
      <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        <div className="space-y-2">
          <h2 className="text-xl text-bold text-cyan-900">
            A Powerful Human Touch
          </h2>
          <p>
            Your words are personal. We respect that. So, your words stay in
            human hands from beginning to end. Your documents are human
            translated & human approved.
          </p>
        </div>
        <div className="space-y-2">
          <h2 className="text-xl text-bold text-cyan-900">Quality</h2>
          <p>
            We are typically aware that mistranslation may cost you millions!
            Our robust quality assurance system makes us the most accurate
            translation company and helps you reduce costs.
          </p>
        </div>
        <div className="space-y-2">
          <h2 className="text-xl text-bold text-cyan-900">Industry Experts</h2>
          <p>
            A translation should not only be written well, but should be written
            in the language your industry understands. Our dedicated team of
            lawyer linguists have the knowledge and experience to convey
            messages using the typical language of law.
          </p>
        </div>
        <div className="space-y-2">
          <h2 className="text-xl text-bold text-cyan-900">Dedication</h2>
          <p>
            APEX LEGAL team is dedicated to delivering the best services to meet
            all the needs of clients engaged in language related matters.
          </p>
        </div>
        <div className="space-y-2">
          <h2 className="text-xl text-bold text-cyan-900">Affordable Cost</h2>
          <p>
            We have specially designed packages to address the translation needs
            of all our customers. Our affordable and competitive prices start
            from $0.05/word so that all the businesses can pursue their dream of
            going global.
          </p>
        </div>
        <div className="space-y-2">
          <h2 className="text-xl text-bold text-cyan-900">
            Confidentiality and Privacy
          </h2>
          <p>
            We always protect the confidentiality and privacy of your documents.
            All of our linguists sign non-disclosure agreements.
          </p>
        </div>
      </section>
    </div>
  )
}

function AboutUs() {
  return (
    <div className="p-6 md:px-12 lg:px-24 xl:px-48">
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

function Services() {
  return (
    <div className="p-6 md:px-12 lg:px-24 xl:px-48">
      <section className="grid gap-6 2xl:grid-cols-4">
        <div className="relative py-12 mt-12 space-y-4 md:px-6 md:bg-gray-50 md:rounded-md md:shadow 2xl:col-span-2 2xl:last:col-start-2">
          <div className="flex justify-center">
            <LanguageIcon className="absolute -top-12 h-24 w-24 p-6 rounded-full bg-gradient-to-r from-cyan-700 to-cyan-500 text-cyan-100 shadow" />
          </div>
          <h2 className="text-3xl text-bold text-cyan-900 text-center">
            Translation Services
          </h2>
          <p className="text-justify">
            When it comes to legal translation, legal documents adhere to strict
            standards to leave no room for any error, omission or inaccuracy in
            translation of legal documents submitted. For instance, the legal
            translation of court documents must be 100% accurate, otherwise it
            may result in a lawsuit being thrown out or a case easily dismissed
            or an important argument being dismissed.
          </p>
          <p className="text-justify">
            APEX LEGAL offers financial services for institutions seeking to
            reach a specific local market or expand their services onto the
            international scene. APEX LEGAL’s financial translation process is
            managed by your personal account manager and executed by expert
            translators and editors, all bonded contractually by a
            non-disclosure agreement to ensure strict adherence to all security
            and confidentiality provisions.
          </p>
          <p className="text-justify">
            If your business documents involved any legal or financial texts or
            terminology, do not worry we have a team of specialized translators
            who are fully aware of the legal profession and all the applicable
            laws and regulations in Middle East in general.
          </p>
        </div>
        <div className="relative py-12 mt-12 space-y-4 md:px-6 md:bg-gray-50 md:rounded-md md:shadow 2xl:col-span-2 2xl:last:col-start-2">
          <div className="flex justify-center">
            <DocumentMagnifyingGlassIcon className="absolute -top-12 h-24 w-24 p-6 rounded-full bg-gradient-to-r from-cyan-700 to-cyan-500 text-cyan-100 shadow" />
          </div>
          <h2 className="text-3xl text-bold text-cyan-900 text-center">
            Proofreading Services
          </h2>
          <p className="text-justify">
            In order to have an accurate and error-free professional
            translation, you need expert proofreaders. Luckily, we have an
            experienced team on hand to take care of this!
          </p>
          <p className="text-justify">
            When adding the proofreading service to your order, your project
            will be meticulously revised by our specialized editing and
            proofreading team to ensure that no spelling mistakes or grammatical
            errors go unnoticed. When adding the proofreading service to your
            translation, our team of professional proofreaders will also ensure
            that the final project reads comfortably and has the proper tone to
            meet the text’s requirements.
          </p>
        </div>
        <div className="relative py-12 mt-12 space-y-4 md:px-6 md:bg-gray-50 md:rounded-md md:shadow 2xl:col-span-2 2xl:last:col-start-2">
          <div className="flex justify-center">
            <ScaleIcon className="absolute -top-12 h-24 w-24 p-6 rounded-full bg-gradient-to-r from-cyan-700 to-cyan-500 text-cyan-100 shadow" />
          </div>
          <h2 className="text-3xl text-bold text-cyan-900 text-center">
            Legal Localization Services
          </h2>
          <p className="text-justify">
            Localization goes deeper than translation, allowing you to
            communicate with or take depositions from multilingual clients while
            preserving the cultural nuances and feel of the original statement,
            as well as its precise meaning. Legal localization is also important
            when you are marketing your legal services or publishing research in
            another language, where misunderstandings could damage your client
            base or reputation.
          </p>
        </div>
        <div className="relative py-12 mt-12 space-y-4 md:px-6 md:bg-gray-50 md:rounded-md md:shadow 2xl:col-span-2 2xl:last:col-start-2">
          <div className="flex justify-center">
            <PencilSquareIcon className="absolute -top-12 h-24 w-24 p-6 rounded-full bg-gradient-to-r from-cyan-700 to-cyan-500 text-cyan-100 shadow" />
          </div>
          <h2 className="text-3xl text-bold text-cyan-900 text-center">
            Editing Services
          </h2>
          <p className="text-justify">
            We can take new inputs or considerations (such as a new target
            market) and edit the text to adapt to a particular local market.
            Apex Legal will conduct a thorough review of the documentation for
            accuracy, style, punctuation, potential cultural problems,
            consistency, grammar, readability, etc. Our editing services are
            designed to help our customer at every stage of a project. We also
            consent to working and coordinating with other agencies to ensure
            that you get the most accurate and reliable end product.
          </p>
        </div>
        <div className="relative py-12 mt-12 space-y-4 md:px-6 md:bg-gray-50 md:rounded-md md:shadow 2xl:col-span-2 2xl:last:col-start-2">
          <div className="flex justify-center">
            <ChatBubbleBottomCenterTextIcon className="absolute -top-12 h-24 w-24 p-6 rounded-full bg-gradient-to-r from-cyan-700 to-cyan-500 text-cyan-100 shadow" />
          </div>
          <h2 className="text-3xl text-bold text-cyan-900 text-center">
            Transcription Services
          </h2>
          <p className="text-justify">
            Our transcription services are done by human transcriptionists. We
            serve clients seeking academic, corporate, legal, and podcast
            transcription services! In order to guarantee a high accuracy for
            all transcripts, we hire transcriptionists from a variety of
            industry backgrounds. This allows us to provide a wider variety of
            transcription services while maintaining accuracy and fast
            turnaround time.
          </p>
        </div>
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
