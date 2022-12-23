import TranslationIllustration from './illustrations/translation'
import EditingIllustration from './illustrations/editing'
import ProofreadingIllustration from './illustrations/proofreading'
import LegalLocalizationIllustration from './illustrations/legal_localization'
import TranscriptionIllustration from './illustrations/transcription'

export default function Services() {
  return (
    <div id="services" className="bg-white">
      <div className="my-24 text-center xl:mb-0">
        <h2 className="font text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
          Services
        </h2>
        <hr className="mx-auto mt-6 w-32 border-b-4 border-b-sky-500" />
      </div>
      <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-y-16 gap-x-8 pb-24 px-4 sm:px-6 sm:pb-0 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
        <div>
          <h3 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Translation
          </h3>
          <p className="mt-4 text-gray-500">
            Legal translation is the process of converting the legal materials
            from one language into another for use in legal settings and for
            legal purposes. Through this process, the meaning and intention of
            the source text must be maintained and there is no room for any
            error or inaccuracy; otherwise, ambiguity or, even, loopholes may
            arise, which is likely to compromise the concerned parties&apos;
            rights. Therefore, this process is handled by specialists with a
            vast knowledge of the applicable laws and regulations and the legal
            consequences of their translation.
          </p>
          <p className="mt-4 text-gray-500">
            We also offer financial translation services for organizations
            seeking to facilitate their internal management or conduct their
            external business with the purpose of reaching a specific local
            market or expanding their services internationally.
          </p>
        </div>
        <div className="h-2/3">
          <TranslationIllustration />
        </div>
      </div>
      <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-y-16 gap-x-8 pb-24 px-4 sm:px-6 sm:pb-0 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
        <div className="h-2/3 order-2 lg:order-none">
          <EditingIllustration />
        </div>
        <div className="order-1 lg:order-none">
          <h3 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Editing
          </h3>
          <p className="mt-4 text-gray-500">
            Editing is the process performed immediately after translation to
            ensure that the translation is true to the source and preserves the
            original meaning. Editors spot any error or change in terminology,
            grammar, or style or any problems with consistency or readability.
            Our editors are also field experts who are able to properly adapt
            the translated text, in terms of terminology and style, to the
            intended target audience in order to ensure correct and adequate
            understanding of the translated text.
          </p>
        </div>
      </div>
      <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-y-16 gap-x-8 pb-24 px-4 sm:px-6 sm:pb-0 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
        <div>
          <h3 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Proofreading
          </h3>
          <p className="mt-4 text-gray-500">
            After completion of editing, the proofreader ensures that there are
            no remaining errors that either have been missed by, or created
            during, the editing process. Proofreaders search thoroughly for
            errors or inconsistencies in spelling, grammar, style, and
            punctuation, review the text for repetition or omission of words or
            punctuation, and check the overall layout and fluency.
          </p>
        </div>
        <div className="h-2/3">
          <ProofreadingIllustration />
        </div>
      </div>
      <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-y-16 gap-x-8 pb-24 px-4 sm:px-6 sm:pb-0 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
        <div className="h-2/3 order-2 lg:order-none">
          <LegalLocalizationIllustration />
        </div>
        <div className="order-1 lg:order-none">
          <h3 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Legal Localization
          </h3>
          <p className="mt-4 text-gray-500">
            Localization is a more sophisticated and profound process than
            translation. Localization allows you to set the linguistic and
            cultural elements in context and adapt a text to the entire market,
            region, or locale. Meanwhile, legal localization is to meet all the
            legal requirements that are enforced in the user&apos;s region and
            ensure accuracy and consistency of content by using the perfectly
            applicable terminologies in ideal places, taking into account the
            applicable laws and regulations of the user&apos;s country.
          </p>
        </div>
      </div>
      <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-y-16 gap-x-8 pb-24 px-4 sm:px-6 sm:pb-0 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
        <div>
          <h3 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Transcription
          </h3>
          <p className="mt-4 text-gray-500">
            Our transcription services are done by human transcriptionists hired
            from a variety of industry backgrounds in order to guarantee a high
            accuracy for all transcripts. This allows us to provide a wider
            variety of services while maintaining authenticity and fast
            turnaround time.
          </p>
        </div>
        <div className="h-2/3">
          <TranscriptionIllustration />
        </div>
      </div>
    </div>
  )
}
