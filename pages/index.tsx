import type { NextPage } from 'next'
import Head from 'next/head'

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
      <div className="bg-gradient-to-r from-cyan-900 to-cyan-700 text-cyan-100">
        <Header />
        <Hero />
      </div>
      <Features />
      <AboutUs />
    </>
  )
}

function Header() {
  return (
    <header className="p-6 pb-0">
      <h1 className="text-xl font-bold">Apex Legal</h1>
    </header>
  )
}

function Hero() {
  return (
    <main className="p-6 space-y-6 py-24 text-center">
      <h1 className="text-3xl text-bold">Lorem ipsum dolor sit.</h1>
      <p className="text-lg text-cyan-200">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus saepe
        nesciunt asperiores itaque amet quas.
      </p>
      <a
        href="#"
        className="inline-block bg-gradient-to-r from-cyan-700 to-cyan-500 text-cyan-100 px-8 py-3 rounded-md text-xl text-bold shadow-md"
      >
        Contact us
      </a>
    </main>
  )
}

function Features() {
  return (
    <section className="p-6 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      <div className="space-y-2">
        <h1 className="text-xl text-bold text-cyan-900">
          A Powerful Human Touch
        </h1>
        <p>
          Your words are personal. We respect that. So, your words stay in human
          hands from beginning to end. Your documents are human translated &
          human approved.
        </p>
      </div>
      <div className="space-y-2">
        <h1 className="text-xl text-bold text-cyan-900">Quality</h1>
        <p>
          We are typically aware that mistranslation may cost you millions! Our
          robust quality assurance system makes us the most accurate translation
          company and helps you reduce costs.
        </p>
      </div>
      <div className="space-y-2">
        <h1 className="text-xl text-bold text-cyan-900">Industry Experts</h1>
        <p>
          A translation should not only be written well, but should be written
          in the language your industry understands. Our dedicated team of
          lawyer linguists have the knowledge and experience to convey messages
          using the typical language of law.
        </p>
      </div>
      <div className="space-y-2">
        <h1 className="text-xl text-bold text-cyan-900">Dedication</h1>
        <p>
          APEX LEGAL team is dedicated to delivering the best services to meet
          all the needs of clients engaged in language related matters.
        </p>
      </div>
      <div className="space-y-2">
        <h1 className="text-xl text-bold text-cyan-900">Affordable Cost</h1>
        <p>
          We have specially designed packages to address the translation needs
          of all our customers. Our affordable and competitive prices start from
          $0.05/word so that all the businesses can pursue their dream of going
          global.
        </p>
      </div>
      <div className="space-y-2">
        <h1 className="text-xl text-bold text-cyan-900">
          Confidentiality and Privacy
        </h1>
        <p>
          We always protect the confidentiality and privacy of your documents.
          All of our linguists sign non-disclosure agreements.
        </p>
      </div>
    </section>
  )
}

function AboutUs() {
  return (
    <section className="p-6 space-y-4">
      <h1 className="text-3xl text-bold text-cyan-900">About us</h1>
      <p>
        Apex Legal is an English-Arabic translation and language solution agency
        founded in Egypt to serve clients anywhere in the Middle East and the
        world by a group of devoted translators and lawyer linguists. Our
        services are confined to the law and finance related area, which receive
        our undivided attention enabling us to professionally and impeccably
        utilize and maintain the relevant jargons and styles.
      </p>
      <p>
        Do not put your business at stake; you can completely depend our highly
        skilled and experienced linguists in processing your legal and financial
        materials as they perfectly understand the gravity of every single word,
        and will exert their utmost effort to maintain high quality and meet
        your deadlines.
      </p>
      <p>
        Through our supporting services, we aspire and spare no effort to be an
        essential part of your business and successfully prosper together.
      </p>
    </section>
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
