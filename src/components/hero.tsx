import Image from 'next/image';

export default function Hero() {
  return (
    <div className='relative'>
      <div className='absolute inset-x-0 bottom-0 h-1/' />
      <div className='max-w-7xl mx-auto sm:px-6 lg:px-8 py-6 sm:py-10'>
        <div className='relative shadow-xl sm:rounded-2xl sm:overflow-hidden'>
          <div className='absolute inset-0'>
            <div className='relative h-full w-full'>
              <Image
                src='/assets/img/bg-01.jpg'
                alt='Keep calm and drink coffee'
                objectFit='cover'
                layout='fill'
                priority
              />
            </div>
            <div className='absolute inset-0 bg-[#3f4fb3] mix-blend-multiply' />
          </div>
          <div className='relative px-4 py-16 sm:px-6 sm:py-32 lg:py-48 lg:px-8'>
            <h1 className='text-center text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight'>
              <span className='block text-white'>Experienced, Personalized</span>
              <span className='block text-blue-400'>IT Consulting</span>
            </h1>
            <h2 className='py-12 mx-auto text-center text-blue-100'>
              Let us build the infrastructure for your success!
            </h2>
            <div className='mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center'>
              <div className='space-y-4 sm:space-y-0 sm:mx-auto'>
                <a
                  href='#about-us'
                  className='flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-blue-700 bg-white hover:bg-blue-50 sm:px-8'
                >
                  Find Out More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
