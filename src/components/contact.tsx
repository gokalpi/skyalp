import { CheckIcon, EnvelopeIcon, ExclamationTriangleIcon, PhoneIcon } from '@heroicons/react/24/outline';
import { CheckCircleIcon } from '@heroicons/react/24/solid';
import React, { useState } from 'react';
import { z } from 'zod';

import Form from './form/form';
import TextInput from './form/text-input';
import TextAreaInput from './form/textarea-input';
import Modal from './modal';

const ContactSchema = z.object({
  name: z.string().min(1, 'Name is required.'),
  email: z.string().min(1, 'E-mail is required.').email('Please enter a valid email.'),
  company: z.string(),
  phone: z.string().min(1, 'Phone is required.'),
  message: z.string().min(1, 'Message is required.'),
});

export default function Contact() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [modalIcon, setModalIcon] = useState<React.ReactElement>(
    <CheckCircleIcon className='h-16 w-16 text-green-500' aria-hidden='true' />
  );
  const [modalTitle, setModalTitle] = useState('');
  const [modalMessage, setModalMessage] = useState('');

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
            <Form
              submitText='Submit'
              schema={ContactSchema}
              initialValues={{ name: '', email: '', company: '', phone: '', message: '' }}
              onSubmit={async (data) => {
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
                  setModalIcon(<ExclamationTriangleIcon className='h-16 w-16 text-red-500' aria-hidden='true' />);
                  setModalTitle('Message Not Sent');
                  setModalMessage(error);
                } else {
                  setModalIcon(<CheckCircleIcon className='h-16 w-16 text-green-500' aria-hidden='true' />);
                  setModalTitle('Message Sent');
                  setModalMessage(
                    'Your message is successfully sent to us. We will get back to you as soon as possible.'
                  );
                }

                setModalOpen(true);
              }}
              className='grid grid-cols-1 gap-y-6'
            >
              <TextInput name='name' label='Name' placeholder='Name' srOnly />
              <TextInput name='email' label='Name' type='email' placeholder='Email' srOnly />
              <TextInput name='company' label='Company' placeholder='Company' srOnly />
              <TextInput name='phone' label='Phone' placeholder='Phone' srOnly />
              <TextAreaInput name='message' label='Message' rows={4} placeholder='Message' srOnly />
            </Form>

            <Modal
              open={isModalOpen}
              setOpen={setModalOpen}
              icon={modalIcon}
              title={modalTitle}
              message={modalMessage}
              buttonText='Close'
            />
          </div>
        </div>
      </div>
    </section>
  );
}
