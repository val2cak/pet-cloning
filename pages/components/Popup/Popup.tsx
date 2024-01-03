import { IoCloseOutline as CloseIcon } from 'react-icons/io5';
import { Brochures } from '../../../constants/Brochures';
import { locale } from '../../../locales/translate';

const Popup = ({ onClose }) => {
  const handleClickOutside = (event) => {
    if (!event.target.closest('.popup-container')) {
      onClose();
    }
  };

  const brochure = Brochures.find((brochure) => brochure.language === locale);

  const contentfulImageUrl = `https://images.ctfassets.net/${process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID}/${brochure.id}/${brochure.code}/Brochure.png`;

  return (
    <div
      className='fixed inset-0 flex items-center justify-center bg-darker bg-opacity-50 z-20'
      onClick={handleClickOutside}
    >
      <div className='text-center popup-container'>
        <button className='absolute text-light right-5 top-5' onClick={onClose}>
          <CloseIcon className='text-xl' />
        </button>
        <img
          src={contentfulImageUrl}
          alt='Brochure'
          className='h-screen'
          loading='lazy'
        />
      </div>
    </div>
  );
};

export default Popup;
