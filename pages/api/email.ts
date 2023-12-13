import { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';
import Mail from 'nodemailer/lib/mailer';

import { FormData } from '../../types/typeDefinitions';
import { animalTypes } from '../../constants/AnimalTypes';
import { translate } from '../../locales/translate';
import brochure from '../../public/Brochure2.png';

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

      const { replySubject, replyText } = translate.contactUs;

      const transport = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.MY_EMAIL,
          pass: process.env.MY_PASSWORD,
        },
      });

      const mailOptions: Mail.Options = {
        from: email,
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

      // Send confirmation email to the user
      const userConfirmationOptions: Mail.Options = {
        from: process.env.MY_EMAIL,
        to: email,
        subject: replySubject,
        html: `
          <img src="cid:brochure" alt="Brochure" />
        `,
        attachments: [
          {
            filename: 'Brochure2.png',
            cid: 'brochure',
            path: 'https://github.com/val2cak/pet-cloning/blob/develop/public/Brochure2.png',
          },
        ],
      };

      await transport.sendMail(mailOptions);
      await transport.sendMail(userConfirmationOptions);

      res.status(200).json({
        status: 'success',
        message: 'Email sent successfully',
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({
        status: 'error',
        message: 'Internal Server Error',
      });
    }
  } else {
    res.status(405).json({ status: 'error', message: 'Method Not Allowed' });
  }
}
