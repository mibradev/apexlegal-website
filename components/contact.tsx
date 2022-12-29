export default function Contact() {
  return (
    <>
      <div
        id="contact"
        className="flex items-center justify-center py-12 bg-sky-600"
      >
        <div className="w-full max-w-md space-y-8">
          <div>
            <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-white">
              Contact us
            </h2>
          </div>
          <form
            name="contact"
            action="/success"
            method="POST"
            data-netlify-honeypot="honey"
            data-netlify-recaptcha="true"
            data-netlify="true"
          >
            <div className="overflow-hidden">
              <div className="hidden">
                <label htmlFor="honey">honey</label>
                <input type="text" name="honey" id="honey" />
              </div>
              <div className="space-y-6 px-4 py-5 sm:p-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-white"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    autoComplete="name"
                    required
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-white"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    autoComplete="email"
                    required
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-white"
                  >
                    Message
                  </label>
                  <div className="mt-1">
                    <textarea
                      id="message"
                      name="message"
                      rows={3}
                      required
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
                      defaultValue={''}
                    />
                  </div>
                </div>
              </div>
              <div data-netlify-recaptcha="true"></div>
              <div className="px-4 py-3 text-right sm:px-6">
                <button
                  type="submit"
                  className="inline-flex justify-center rounded-md border border-transparent bg-white py-2 px-4 text-sm font-medium text-sky-600 shadow-sm hover:bg-sky-100 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2"
                >
                  Send
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}
