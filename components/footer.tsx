export default function Footer() {
  return (
    <>
      <footer className="bg-gray-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center py-10 sm:flex-row-reverse sm:justify-between">
            <div className="flex gap-x-6">
              <a
                className="group"
                aria-label="Apex Legal on LinkedIn"
                href="https://www.linkedin.com/company/apexlegal/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  aria-hidden="true"
                  className="h-6 w-6 fill-gray-500 group-hover:fill-gray-700"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                  xmlSpace="preserve"
                >
                  <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 01107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" />
                </svg>
              </a>
              <a
                className="group"
                aria-label="Apex Legal on Facebook"
                href="https://www.facebook.com/apexlegalco/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  aria-hidden="true"
                  className="h-6 w-6 fill-gray-500 group-hover:fill-gray-700"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 320 512"
                  xmlSpace="preserve"
                >
                  <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" />
                </svg>
              </a>
            </div>
            <p className="mt-6 text-sm text-gray-500 sm:mt-0">
              Copyright © 2023 Apex Legal. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  )
}
