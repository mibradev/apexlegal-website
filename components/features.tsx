import {
  EyeSlashIcon,
  ShieldCheckIcon,
  UserGroupIcon,
  CurrencyDollarIcon,
  AcademicCapIcon,
  HeartIcon,
} from '@heroicons/react/24/outline'

const features = [
  {
    name: 'Confidentiality and Privacy',
    description:
      'Confidentiality and privacy of your information are always protected. All of our linguists sign non-disclosure agreements ensuring strict adherence to all confidentiality policies.',
    icon: EyeSlashIcon,
  },
  {
    name: 'Quality Assurance',
    description:
      'Robust manual and automated quality assurance systems to ensure accurate translations and error-free language solutions.',
    icon: ShieldCheckIcon,
  },
  {
    name: 'Human Translation',
    description:
      'While automation is a must in quality assurance, your materials are handled exclusively by human hands from beginning to end. No machine translation is involved.',
    icon: UserGroupIcon,
  },
  {
    name: 'Affordable Cost',
    description:
      'Specially designed pricing packages covering the various needs of our clients. Affordable and competitive prices.',
    icon: CurrencyDollarIcon,
  },
  {
    name: 'Industry Experts',
    description:
      'Dedicated team of lawyer linguists with the knowledge and experience required to impeccably maintain the correct legal jargons and styles in different target legal systems.',
    icon: AcademicCapIcon,
  },
  {
    name: 'Dedication',
    description:
      'Client-oriented team dedicated to putting the client’s need first in order to provide the best services.',
    icon: HeartIcon,
  },
]

export default function Features() {
  return (
    <div id="features" className="bg-white py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-lg sm:mx-auto md:max-w-none">
          <div className="grid grid-cols-1 gap-y-16 md:grid-cols-2 md:gap-x-12 md:gap-y-16">
            {features.map((feature) => (
              <div
                key={feature.name}
                className="relative flex flex-col gap-6 sm:flex-row md:flex-col lg:flex-row"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-sky-500 text-white sm:shrink-0">
                  <feature.icon className="h-8 w-8" aria-hidden="true" />
                </div>
                <div className="sm:min-w-0 sm:flex-1">
                  <p className="text-lg font-semibold leading-8 text-gray-900">
                    {feature.name}
                  </p>
                  <p className="mt-2 text-base leading-7 text-gray-600">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
