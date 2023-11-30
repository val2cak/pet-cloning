import Link from 'next/link';
import { useRouter } from 'next/router';

import { translate } from '../../locales/translate';
import { navigationItems } from '../../constants/NavigationItems';

const Header: React.FC = () => {
  const router = useRouter();

  return (
    <header
      className={`bg-primary px-40 py-4 ${
        router.pathname === '/science' || router.pathname === '/cloning-news'
          ? 'opacity-100'
          : 'opacity-80'
      }`}
    >
      <div className='container mx-auto flex items-center justify-between'>
        <Link href='/' legacyBehavior>
          <a className='text-light text-md font-bold uppercase'>Pet Cloning</a>
        </Link>

        <nav>
          <ul className='flex space-x-4'>
            {navigationItems.map((link) => (
              <li key={link.id}>
                <Link href={link.link} legacyBehavior>
                  <a
                    className={`text-light text-sm font-medium ${
                      router.pathname === link.link
                        ? 'opacity-100 border-b-2 border-secondary flex justify-end items-start'
                        : 'opacity-50 hover:opacity-100'
                    }`}
                  >
                    {translate.navigation[link.text]}
                  </a>
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
