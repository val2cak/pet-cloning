// Footer.tsx
import Link from 'next/link';
import {
  IoLogoTwitter,
  IoLogoWhatsapp,
  IoLogoInstagram,
} from 'react-icons/io5';

const Footer: React.FC = () => {
  return (
    <footer className='bg-darker text-light px-40 py-8 fixed w-full bottom-0'>
      <div className='container mx-auto flex flex-col items-center justify-between h-full gap-10'>
        <div className='w-full flex justify-between'>
          <span className='text-base font-bold'>Pet Cloning</span>
          <div className='text-sm text-light font-medium flex gap-6'>
            <span>
              <Link href='/about-us' legacyBehavior>
                <a className='opacity-50 hover:opacity-100'>About Us</a>
              </Link>
            </span>
            <span className='text-sm'>
              <Link href='/contact-us' legacyBehavior>
                <a className='opacity-50 hover:opacity-100'>Contact Us</a>
              </Link>
            </span>
          </div>
        </div>

        <div className='border-b border-light opacity-20 w-full'></div>

        <div className='w-full flex justify-between text-light font-medium'>
          <div className='text-md text-light font-medium flex gap-3'>
            <a
              href='https://whatsapp.com'
              target='_blank'
              rel='noopener noreferrer'
              className='opacity-50 hover:opacity-100'
            >
              <IoLogoWhatsapp />
            </a>

            <a
              href='https://twitter.com'
              target='_blank'
              rel='noopener noreferrer'
              className='opacity-50 hover:opacity-100'
            >
              <IoLogoTwitter />
            </a>

            <a
              href='https://instagram.com'
              target='_blank'
              rel='noopener noreferrer'
              className='opacity-50 hover:opacity-100'
            >
              <IoLogoInstagram />
            </a>
          </div>

          <div>
            <span className='opacity-50 text-sm'>
              © 2023, All Rights Reserved
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
