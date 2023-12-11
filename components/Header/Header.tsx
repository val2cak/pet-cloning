import Link from 'next/link';
import { useRouter } from 'next/router';
import { FC, useState } from 'react';

import { translate } from '../../locales/translate';
import { navigationItems } from '../../constants/NavigationItems';
import menu from '../../assets/icons/menu.svg';
import BurgerMenu from '../BurgerMenu/BurgerMenu';

const Header: FC = () => {
  const router = useRouter();
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header
      className={`absolute top-0 left-0 right-0 sm:px-8 px-40 2xl:px-56 py-4 z-10 h-14 items-center ${
        isMobileMenuOpen
          ? 'opacity-95'
          : router.pathname === '/science' ||
            router.pathname === '/cloning-news' ||
            router.pathname === '/cloning-news/[slug]'
          ? 'opacity-100'
          : 'opacity-80'
      } ${router.pathname === '/' ? 'bg-transparent' : 'bg-primary'}`}
    >
      <div className='container mx-auto flex items-center justify-between'>
        <Link href='/' className='text-light text-md font-bold uppercase'>
          {translate.common.petCloning}
        </Link>

        <div className='sm:flex hidden'>
          <button
            onClick={toggleMobileMenu}
            className='text-light focus:outline-none'
          >
            <img src={menu.src} />
          </button>
        </div>

        {isMobileMenuOpen && (
          <BurgerMenu
            isOpen={isMobileMenuOpen}
            setIsOpen={setMobileMenuOpen}
            navigationItems={navigationItems}
          />
        )}

        <nav className='sm:hidden flex'>
          <ul className='flex space-x-4'>
            {navigationItems.map((link) => (
              <li key={link.id}>
                <Link
                  href={link.link}
                  className={`text-light text-sm font-medium ${
                    router.pathname === link.link ||
                    (router.pathname.includes('cloning-news') &&
                      link.link === '/cloning-news')
                      ? 'opacity-100 border-b-2 border-secondary flex justify-end items-start'
                      : 'opacity-50 hover:opacity-100'
                  }`}
                >
                  {translate.navigation[link.text]}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
