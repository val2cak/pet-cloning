import Link from 'next/link';
import { translate } from '../../../../locales/translate';

const InTheNews = () => {
  const { title, article1, article2, article3 } = translate.aboutUs.inTheNews;

  return (
    <div className='w-full sm:px-8 px-40 2xl:px-56 sm:py-8 py-16 text-darker flex flex-col gap-6'>
      <div className='font-bold text-md sm:leading-4 leading-6'>{title}</div>

      <div className='flex sm:flex-col flex-row justify-between gap-4 text-dark'>
        <Link
          href={
            'https://usbeketrica.com/fr/article/chats-et-chiens-augmentes-comment-le-transhumanisme-s-est-empare-de-la-question-animale'
          }
          target='_blank'
          className={`sm:w-full w-1/3 flex flex-col items-start justify-start gap-3 border-primary border-opacity-30 rounded-lg p-4 border shadow-md cursor-pointer transition-all duration-300 ease-in-out hover:scale-105`}
        >
          <span>{article1.date}</span>
          <span>{article1.country}</span>
          <span className='text-darker font-medium'>{article1.page}</span>
        </Link>
        <Link
          href={
            'https://slobodnadalmacija.hr/mozaik/panorama/francuski-znanstvenik-u-splitu-klonira-ljubimce-doznali-smo-cijene-i-detalje-postupka-ispravljamo-i-genetske-bolesti-1370318'
          }
          target='_blank'
          className={`sm:w-full w-1/3 flex flex-col items-start justify-start gap-3 border-primary border-opacity-30 rounded-lg p-4 border shadow-md cursor-pointer transition-all duration-300 ease-in-out hover:scale-105`}
        >
          <span>{article2.date}</span>
          <span>{article2.country}</span>
          <span className='text-darker font-medium'>{article2.page}</span>
        </Link>
        <Link
          href={
            'https://net.hr/danas/rtl-danas/francuski-znanstvenik-u-splitu-klonira-kucne-ljubimce-4d76a2de-dd88-11ee-bbaf-0a205096a2b9'
          }
          target='_blank'
          className={`sm:w-full w-1/3 flex flex-col items-start justify-start gap-3 border-primary border-opacity-30 rounded-lg p-4 border shadow-md cursor-pointer transition-all duration-300 ease-in-out hover:scale-105`}
        >
          <span>{article3.date}</span>
          <span>{article3.country}</span>
          <span className='text-darker font-medium'>{article3.page}</span>
        </Link>
      </div>
    </div>
  );
};

export default InTheNews;
