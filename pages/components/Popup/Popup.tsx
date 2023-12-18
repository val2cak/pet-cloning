import { IoCloseOutline as CloseIcon } from 'react-icons/io5';
import brochure from '../../../public/images/brochure.png';

const Popup = ({ onClose }) => {
  const handleClickOutside = (event) => {
    if (!event.target.closest('.popup-container')) {
      onClose();
    }
  };

  return (
    <div
      className='fixed inset-0 flex items-center justify-center bg-darker bg-opacity-50 z-20'
      onClick={handleClickOutside}
    >
      <div className='text-center popup-container'>
        <button className='absolute text-light right-5 top-5' onClick={onClose}>
          <CloseIcon className='text-xl' />
        </button>
        <img src={brochure.src} alt='Brochure' className='sm:h-full h-screen' />
      </div>
    </div>
  );
};

export default Popup;
