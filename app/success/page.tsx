import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Your message has been sent successfully',
  description: 'Translation and language solutions.',
}

export default function Success() {
  return (
    <>
      <div className="bg-white py-24 sm:py-32 lg:py-40">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="sm:text-center">
            <h1 className="text-center text-3xl font-bold tracking-tight text-gray-900">
              Your message has been sent successfully
            </h1>
            <p className="mt-2 text-center text-sm text-gray-600">
              <Link
                href="/"
                className="font-medium text-cyan-600 hover:text-cyan-500"
              >
                Return to home page
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
