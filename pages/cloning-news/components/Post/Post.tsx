import { FC } from 'react';
import ReactMarkdown from 'react-markdown';

import { defaultLocale } from '../../../../locales/translate';
import Link from 'next/link';

interface Props {
  id: string;
  title: string;
  dateCreated: Date;
  author: string;
  imgUrl: string;
  imgDescription: string;
  text: string;
  slug: string;
}

const Post: FC<Props> = ({
  id,
  title,
  dateCreated,
  author,
  imgUrl,
  imgDescription,
  text,
  slug,
}) => {
  const date = new Date(dateCreated);
  const formattedDate = date.toLocaleDateString(defaultLocale, {
    year: 'numeric',
    month: 'short',
    day: '2-digit',
  });

  return (
    <Link
      href={`cloning-news/${slug}`}
      key={id}
      className='flex flex-col gap-2 w-64 hover:scale-105'
    >
      <img
        src={imgUrl}
        alt={imgDescription}
        className='rounded-md h-48 w-64 object-cover'
      />
      <p className='text-primary text-xs font-light'>{formattedDate}</p>
      <h2 className='text-darker text-sm font-bold'>{title}</h2>
      <ReactMarkdown className='text-xs font-light text-darker opacity-70'>{`${text.slice(
        0,
        80
      )}...`}</ReactMarkdown>
      <div className='border-b border-dark opacity-20 w-full'></div>
      <p className='text-primary text-xs font-light'>By: {author}</p>
    </Link>
  );
};

export default Post;
