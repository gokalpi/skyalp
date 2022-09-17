import sendgridMail from '@sendgrid/mail';
import type { NextApiRequest, NextApiResponse } from 'next';

sendgridMail.setApiKey(process.env.SENDGRID_API_KEY || '');

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case 'POST':
      handlePost(req, res);
      break;
    default:
      res.status(405).send('Method is not allowed');
      break;
  }
}

async function handlePost(req: NextApiRequest, res: NextApiResponse) {
  const { name, email, company, phone, message } = req.body;

  const msg = {
    to: 'ibrahim.gokalp@skyalp.co.uk',
    from: 'ibrahim.gokalp@skyalp.co.uk',
    subject: `Contact: ${name}`,
    text: `A new message has been received from the Skyalp.co.uk site.\n\n
    Name: ${name}\n\n
    Email: ${email}\n\n
    Company: ${company}\n\n
    Phone: ${phone}\n\n
    Message: ${message}`,
    html: `<p>A new message has been received from the Skyalp.co.uk site.</p>
      <p><strong>Name</strong>: ${name}</p>
      <p><strong>Email</strong>: ${email}</p>
      <p><strong>Company</strong>: ${company}</p>
      <p><strong>Phone</strong>: ${phone}</p>
      <p><strong>Message</strong>: ${message}</p>`,
  };

  sendgridMail.send(msg).then(
    () => {
      res.status(200).json({ status: 'success ' });
    },
    (error) => {
      if (error.response) {
        res.status(400).json(error.response.body);
      }
    }
  );
}
