/* This example requires Tailwind CSS v2.0+ */
import { CheckBadgeIcon, ComputerDesktopIcon, GlobeEuropeAfricaIcon } from '@heroicons/react/24/outline';

const features = [
  {
    name: 'Our Experience',
    description:
      'After 27 years in the IT industry, we decided to alter direction. Now, we share our experience to help others. Our ramp up process is designed to empower your technical team and outfit them with the tools they need to succeed.',
    icon: CheckBadgeIcon,
  },
  {
    name: 'Our Approach',
    description:
      'Our service includes a comprehensive consult to help identify gaps and opportunities, a comprehensive report that includes a project plan with timelines and milestones, a cost analysis, and a schedule. We also offer a suite of quality products that will help you get there quickly and smoothly.',
    icon: ComputerDesktopIcon,
  },
  {
    name: 'Why Us?',
    description:
      'Business mentors are key—that’s why when it comes to client selection, we’re choosy. We want to give each of you the time and guidance they deserve. We didn’t get there alone. And neither will you. Call us today.',
    icon: GlobeEuropeAfricaIcon,
  },
];

export default function About() {
  return (
    <section
      id='about-us'
      className='relative w-full bg-slate-200 dark:bg-slate-800 pt-24 pb-16 sm:pt-64 sm:pb-24 lg:pt-64 lg:pb-48'
    >
      <div className='mx-auto max-w-none px-4 text-center sm:px-6 lg:px-8'>
        <h1>About Us</h1>
        <div className='mt-24'>
          <div className='grid grid-cols-1 gap-8 gap-y-20 sm:grid-cols-2 lg:grid-cols-3 max-w-none sm:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            {features.map((feature) => (
              <div key={feature.name} className='flex flex-col rounded-lg shadow-lg'>
                <div className='rounded-lg bg-slate-50 dark:bg-slate-700 px-6 pb-8 flex flex-col flex-1 justify-between'>
                  <div className='-mt-6'>
                    <div>
                      <span className='inline-flex items-center justify-center rounded-md bg-[#3f4fb3] p-3 shadow-lg'>
                        <feature.icon className='h-10 w-10 text-white' aria-hidden='true' />
                      </span>
                    </div>
                    <h2 className='mt-8'>{feature.name}</h2>
                    <p className='mt-5 text-base'>{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
