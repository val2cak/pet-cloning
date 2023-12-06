import Link from 'next/link';
import { translate } from '../../locales/translate';
import { useRouter } from 'next/router';
import menu from '../../assets/icons/menu.svg';

const BurgerNavigation = ({ isOpen, navigationItems, setIsOpen }) => {
  const router = useRouter();

  return (
    <main
      className={`${
        !isOpen ? 'translate-x-full' : 'translate-x-0'
      } top-0 transform translate fixed right-0 m-0 p-0 bg-primary w-screen transition duration-500 ease-in-out flex-col justify-center items-center h-screen z-40`}
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className='flex justify-end py-4 px-8'>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className='text-light focus:outline-none'
        >
          <img src={menu.src} className='rotate-90' />
        </button>
      </div>

      <ul className='flex flex-col p-8 gap-6'>
        {navigationItems.map((link) => (
          <li key={link.id}>
            <Link href={link.link} legacyBehavior>
              <a
                className={`w-fit text-light text-md font-medium ${
                  router.pathname === link.link
                    ? 'opacity-100 border-b-2 pb-2 border-secondary flex justify-start items-start'
                    : 'opacity-50 hover:opacity-100'
                }`}
              >
                {translate.navigation[link.text]}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default BurgerNavigation;
