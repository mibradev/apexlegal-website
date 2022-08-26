import Head from 'next/head'

export default function Home() {
  return (
    <main className="h-screen flex justify-center items-center bg-stone-900 text-stone-100">
      <Head>
        <title>Apex Legal</title>
        <meta name="description" content="Translation and language solutions." />
      </Head>

      <h1 className="text-5xl">
        Apex Legal
      </h1>
    </main>
  )
}
