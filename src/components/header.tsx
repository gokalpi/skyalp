import { Fragment } from 'react';
import { Popover, Transition } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import Link from 'next/link';

import ThemeSwitcher from './theme-switcher';

const navigation = [
  { name: 'About Us', href: '/#about-us' },
  { name: 'Services', href: '/#services' },
  { name: 'Contact Us', href: '/#contact-us' },
];

export default function Header() {
  return (
    <Popover as='header' className='z-30 sticky top-0 bg-slate-50/95 dark:bg-slate-900/95'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between items-center py-2 md:space-x-10'>
          <div className='flex justify-start lg:w-0 lg:flex-1'>
            <Link href='/'>
              <a>
                <span className='sr-only'>SkyAlp Ltd</span>
                <div className='hidden dark:block'>
                  <Image
                    src='/assets/img/logo_white.png'
                    alt='SkyAlp Ltd logo'
                    width='162'
                    height='60'
                    className='hidden dark:block'
                  />
                </div>
                <div className='dark:hidden'>
                  <Image
                    src='/assets/img/logo.png'
                    alt='SkyAlp Ltd logo'
                    width='162'
                    height='60'
                    className='block dark:hidden'
                  />
                </div>
              </a>
            </Link>
          </div>

          <div className='md:hidden flex items-center'>
            <div className='mr-2 inline-flex justify-center items-center'>
              {/* Theme Switcher (Dark / light mode) */}
              <ThemeSwitcher />
            </div>

            <div className='-mr-2 -my-2'>
              <Popover.Button className='rounded-lg p-2 inline-flex items-center justify-center hover:bg-gray-200 dark:hover:bg-slate-600 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500'>
                <span className='sr-only'>Open menu</span>
                <Bars3Icon className='h-6 w-6' aria-hidden='true' />
              </Popover.Button>
            </div>
          </div>

          <div className='hidden md:flex space-x-10'>
            {navigation.map((item, index) => (
              <Link key={index} href={item.href}>
                <a className='no-underline'>{item.name}</a>
              </Link>
            ))}

            {/* Theme Switcher (Dark / light mode) */}
            <ThemeSwitcher />
          </div>
        </div>
      </div>

      <Transition
        as={Fragment}
        enter='duration-150 ease-out'
        enterFrom='opacity-0 scale-95'
        enterTo='opacity-100 scale-100'
        leave='duration-100 ease-in'
        leaveFrom='opacity-100 scale-100'
        leaveTo='opacity-0 scale-95'
      >
        <Popover.Panel focus className='absolute top-0 inset-x-0 p-2 transition transform origin-top md:hidden'>
          <div className='rounded-lg shadow-md bg-white dark:bg-slate-600 ring-1 ring-black ring-opacity-5 overflow-hidden'>
            <div className='px-5 pt-4 flex items-center justify-between'>
              <div className='relative w-8 h-8 md:w-12 md:h-12'>
                <div className='hidden dark:block'>
                  <Image
                    src='/assets/img/logo_icon_white.png'
                    alt='SkyAlp Ltd logo'
                    width='32'
                    height='32'
                    className='hidden dark:block'
                  />
                </div>
                <div className='dark:hidden'>
                  <Image
                    src='/assets/img/logo_icon.png'
                    alt='SkyAlp Ltd logo'
                    width='32'
                    height='32'
                    className='block dark:hidden'
                  />
                </div>
              </div>
              <div className='-mr-2'>
                <Popover.Button className='rounded-lg p-2 hover:bg-gray-200 dark:hover:bg-slate-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cyan-600'>
                  <span className='sr-only'>Close menu</span>
                  <XMarkIcon className='h-6 w-6' aria-hidden='true' />
                </Popover.Button>
              </div>
            </div>
            <div className='pt-5 pb-6'>
              <div className='px-2 space-y-1'>
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className='block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-50 dark:hover:bg-slate-500'
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}
