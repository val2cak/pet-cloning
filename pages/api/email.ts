import { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';
import Mail from 'nodemailer/lib/mailer';

import { FormData } from '../../types/typeDefinitions';
import { animalTypes } from '../../constants/AnimalTypes';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    try {
      const {
        email,
        name,
        phoneMobile,
        message,
        animalType,
        cloningInfo,
        preservationInfo,
        petName,
      }: FormData = req.body;

      const transport = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.MY_EMAIL,
          pass: process.env.MY_PASSWORD,
        },
      });

      const mailOptions: Mail.Options = {
        from: process.env.MY_EMAIL,
        to: process.env.MY_EMAIL,
        subject: 'Pet cloning',
        text: `
        First and last name: ${name}
        Phone/Mobile: ${phoneMobile}
        Email: ${email}
        Type of animal: ${
          animalTypes.find((animal) => animal.id === animalType).name
        }
        What is your pet's name?: ${petName}
        Message: ${message}
        I want more info on cloning: ${cloningInfo ? 'Yes' : 'No'}
        I want more info on preservation: ${preservationInfo ? 'Yes' : 'No'}
        `,
      };

      await transport.sendMail(mailOptions);

      res.status(200).json({ message: 'Email sent' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}
