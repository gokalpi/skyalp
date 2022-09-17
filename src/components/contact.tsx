import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

type FormData = {
  name: string;
  email: string;
  company: string;
  phone: string;
  message: string;
};

const ContactSchema = yup.object().shape({
  name: yup.string().required('Name is required.'),
  email: yup.string().required('E-mail is required.').email('Please enter a valid email.'),
  company: yup.string(),
  phone: yup.string().required('Phone is required.'),
  message: yup.string().required('Message is required.'),
});

export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(ContactSchema),
  });

  const onSubmit = handleSubmit(async (data) => {
    const res = await fetch('/api/contact', {
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    });

    const { error } = await res.json();
    if (error) {
      console.log(error);
      return;
    }

    alert('Your message is sent to us');
  });

  return (
    <section id='contact-us' className='relative bg-white dark:bg-slate-800'>
      <div className='absolute inset-0'>
        <div className='absolute inset-y-0 left-0 w-full md:w-1/3 bg-gray-50 dark:bg-slate-500' />
      </div>
      <div className='relative max-w-7xl mx-auto lg:grid lg:grid-cols-5'>
        <div className='bg-gray-50 dark:bg-slate-500 py-16 px-4 sm:px-6 lg:col-span-2 lg:px-8 lg:py-24 xl:pr-12'>
          <div className='max-w-lg mx-auto'>
            <h2 className='text-2xl font-extrabold tracking-tight sm:text-3xl'>Let&lsquo;s get in touch</h2>
            <p className='mt-3 text-lg leading-6'>
              Ready to start your next project with us? You can give us a call or send us an email or fill out the form
              and we will get back to you as soon as possible!
            </p>
            <dl className='mt-8 text-base'>
              <div>
                <dt className='sr-only'>Postal address</dt>
                <dd>
                  <p>
                    7 Bell Yard
                    <br />
                    London, United Kingdom, WC2A 2JR
                  </p>
                </dd>
              </div>
              <div className='mt-6'>
                <dt className='sr-only'>Phone number</dt>
                <dd className='flex'>
                  <PhoneIcon className='flex-shrink-0 h-6 w-6' aria-hidden='true' />
                  <span className='ml-3'>+44 (20) 3239-3623</span>
                </dd>
              </div>
              <div className='mt-3'>
                <dt className='sr-only'>Email</dt>
                <dd className='flex'>
                  <EnvelopeIcon className='flex-shrink-0 h-6 w-6' aria-hidden='true' />
                  <span className='ml-3'>ibrahim.gokalp@skyalp.co.uk</span>
                </dd>
              </div>
            </dl>
          </div>
        </div>
        <div className='py-16 px-4 sm:px-6 lg:col-span-3 lg:py-24 lg:px-8 xl:pl-12'>
          <div className='max-w-lg mx-auto lg:max-w-none'>
            <form className='grid grid-cols-1 gap-y-6' onSubmit={onSubmit}>
              <div>
                <label htmlFor='full-name' className='sr-only'>
                  Name
                </label>
                <input
                  {...register('name')}
                  type='text'
                  autoComplete='name'
                  className='block w-full shadow-sm py-3 px-4 bg-gray-50 border border-gray-300 text-gray-900 rounded-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                  placeholder='Name'
                />
                {errors.name && (
                  <span role='alert' className='text-red-700 dark:text-red-300 text-sm'>
                    {errors.name.message}
                  </span>
                )}
              </div>
              <div>
                <label htmlFor='email' className='sr-only'>
                  Email
                </label>
                <input
                  {...register('email')}
                  type='email'
                  autoComplete='email'
                  className='block w-full shadow-sm py-3 px-4 bg-gray-50 border border-gray-300 text-gray-900 rounded-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                  placeholder='Email'
                />
                {errors.email && (
                  <span role='alert' className='text-red-700 dark:text-red-300 text-sm'>
                    {errors.email.message}
                  </span>
                )}
              </div>
              <div>
                <label htmlFor='company' className='sr-only'>
                  Company
                </label>
                <input
                  {...register('company')}
                  type='text'
                  autoComplete='name'
                  className='block w-full shadow-sm py-3 px-4 bg-gray-50 border border-gray-300 text-gray-900 rounded-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                  placeholder='Company'
                />
                {errors.company && (
                  <span role='alert' className='text-red-700 dark:text-red-300 text-sm'>
                    {errors.company.message}
                  </span>
                )}
              </div>
              <div>
                <label htmlFor='phone' className='sr-only'>
                  Phone
                </label>
                <input
                  {...register('phone')}
                  type='tel'
                  autoComplete='tel'
                  className='block w-full shadow-sm py-3 px-4 bg-gray-50 border border-gray-300 text-gray-900 rounded-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                  placeholder='Phone'
                />
                {errors.phone && (
                  <span role='alert' className='text-red-700 dark:text-red-300 text-sm'>
                    {errors.phone.message}
                  </span>
                )}
              </div>
              <div>
                <label htmlFor='message' className='sr-only'>
                  Message
                </label>
                <textarea
                  {...register('message')}
                  rows={4}
                  className='block w-full shadow-sm py-3 px-4 bg-gray-50 border border-gray-300 text-gray-900 rounded-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                  placeholder='Message'
                  defaultValue={''}
                />
                {errors.message && (
                  <span role='alert' className='text-red-700 dark:text-red-300 text-sm'>
                    {errors.message.message}
                  </span>
                )}
              </div>
              <div>
                <button
                  type='submit'
                  className='inline-flex justify-center py-3 px-6 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
