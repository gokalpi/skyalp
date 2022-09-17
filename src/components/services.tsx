import { CodeBracketIcon, CubeIcon } from '@heroicons/react/24/outline';

export default function Services() {
  return (
    <section id='services' className='relative w-full pt-24 pb-16 sm:pt-64 sm:pb-24 lg:pt-64 lg:pb-48'>
      <div className='mx-auto max-w-none px-4 text-center sm:px-6 lg:px-8'>
        <h1>Our Services</h1>
        <div className='mt-12'>
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-8 gap-y-20 max-w-none sm:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='flex flex-col rounded-lg shadow-lg'>
              <div className='rounded-lg bg-slate-100 dark:bg-slate-700 px-6 pb-8 flex flex-col flex-1 justify-between'>
                <div className='-mt-6'>
                  <div>
                    <span className='inline-flex items-center justify-center rounded-md bg-[#3f4fb3] p-3 shadow-lg'>
                      <CodeBracketIcon className='h-10 w-10 text-white' aria-hidden='true' />
                    </span>
                  </div>
                  <h2 className='mt-8'>Development</h2>
                  <ul className='mt-5 list-none text-base'>
                    <li>React, Angular, Next.js</li>
                    <li>.Net based development</li>
                    <li>Cloud-based development (AWS and Azure)</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className='flex flex-col rounded-lg shadow-lg'>
              <div className='rounded-lg bg-slate-100 dark:bg-slate-700 px-6 pb-8 flex flex-col flex-1 justify-between'>
                <div className='-mt-6'>
                  <div>
                    <span className='inline-flex items-center justify-center rounded-md bg-[#3f4fb3] p-3 shadow-lg'>
                      <CubeIcon className='h-10 w-10 text-white' aria-hidden='true' />
                    </span>
                  </div>
                  <h2 className='mt-8'>Architecture & Design</h2>
                  <ul className='mt-5 list-none text-base'>
                    <li>End-to-end integration</li>
                    <li>Network and system architecture</li>
                    <li>Database technologies</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
