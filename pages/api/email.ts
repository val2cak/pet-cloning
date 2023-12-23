import { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';
import Mail from 'nodemailer/lib/mailer';

import { FormData } from '../../types/typeDefinitions';
import { animalTypes } from '../../constants/AnimalTypes';
import { availableLocales } from '../../locales/translate';
import { Brochures } from '../../constants/Brochures';

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
        language,
      }: FormData = req.body;

      const { replySubject, replyText } = availableLocales[language].contactUs;

      const transport = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.NEXT_PUBLIC_MY_EMAIL,
          pass: process.env.NEXT_PUBLIC_MY_PASSWORD,
        },
      });

      const mailOptions: Mail.Options = {
        from: email,
        to: process.env.NEXT_PUBLIC_MY_EMAIL,
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

      const brochure = Brochures.find(
        (brochure) => brochure.language === language
      );

      const contentfulImageUrl = `https://images.ctfassets.net/${process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID}/${brochure.id}/${brochure.code}/Brochure.png`;

      // Send confirmation email to the user
      const userConfirmationOptions: Mail.Options = {
        from: process.env.NEXT_PUBLIC_MY_EMAIL,
        to: email,
        subject: replySubject,
        text: replyText,
        attachments: [
          {
            filename: 'Petcloning.png',
            cid: 'brochure',
            path: contentfulImageUrl,
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
