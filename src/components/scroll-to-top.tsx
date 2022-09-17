import { ArrowUpCircleIcon } from '@heroicons/react/24/outline';
import { useState, useEffect } from 'react';

export default function ScrollToTop() {
  const [isButtonVisible, setButtonVisible] = useState(false);

  const toggleVisibility = () => (window.pageYOffset > 200 ? setButtonVisible(true) : setButtonVisible(false));

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <>
      {isButtonVisible && (
        <div
          className='cursor-pointer fixed z-40 bottom-2 lg:bottom-8 right-2 lg:right-8 rounded-full hover:bg-slate-300 dark:hover:bg-slate-600'
          onClick={scrollToTop}
        >
          <ArrowUpCircleIcon className='h-12 w-12' />
        </div>
      )}
    </>
  );
}
