import { translate } from '../../../../locales/translate';
import francoisImage from '../../../../public/images/francois.png';
import ronnyImage from '../../../../public/images/ronny.png';

const WhoWeAre = () => {
  const { title, text, francois, ronny } = translate.aboutUs.whoWeAre;

  return (
    <div className='w-full sm:px-8 px-40 2xl:px-56 sm:py-8 py-16 text-darker flex flex-col gap-6 bg-primary'>
      <div className='font-bold text-md sm:leading-4 leading-6'>{title}</div>
      <div className='font-light sm:text-sm text-base sm:leading-4 leading-5 whitespace-pre-line text-light'>
        {text}
      </div>
      <div className='flex sm:flex-col flex-row sm:gap-16 gap-32'>
        <div className='sm:w-full w-1/2 flex flex-col text-light sm:text-sm text-base sm:leading-4 leading-5 font-light gap-4'>
          <div className='flex flex-col'>
            <img
              src={francoisImage.src}
              alt={francois.name}
              className='rounded-md sm:w-full lg:w-60 w-72 2xl:w-80 object-cover'
            />
            <span className='font-medium text-sm text-dark'>
              {francois.name}
            </span>
            <span className='text-sm text-dark'>{francois.title}</span>
          </div>
          <span>{francois.description}</span>
        </div>
        <div className='sm:w-full w-1/2 flex flex-col text-light sm:text-sm text-base sm:leading-4 leading-5 font-light gap-4'>
          <div className='flex flex-col'>
            <img
              src={ronnyImage.src}
              alt={ronny.name}
              className='rounded-md sm:w-full lg:w-60 w-72 2xl:w-80 object-cover'
            />
            <span className='font-medium text-sm text-dark'>{ronny.name}</span>
            <span className='text-sm text-dark'>{ronny.title}</span>
          </div>
          <span>{ronny.description}</span>
        </div>
      </div>
    </div>
  );
};

export default WhoWeAre;
