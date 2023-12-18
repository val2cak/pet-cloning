import ReactMarkdown from 'react-markdown';
import dynamic from 'next/dynamic';

import { locale } from '../../locales/translate';

const BlogPost = ({ post }) => {
  const dateCreated = new Date(post.fields.dateCreated);

  const formattedDate = dateCreated.toLocaleDateString(locale, {
    year: 'numeric',
    month: 'short',
    day: '2-digit',
  });

  const Layout = dynamic(() => import('../Layout'), {
    ssr: false,
  });

  const lang =
    locale.slice(0, 1).toUpperCase() + locale.slice(1, locale.length);

  return (
    <Layout>
      <div className='sm:pl-8 pl-40 2xl:pl-56 sm:pr-8 sm:py-8 py-16 sm:pt-20 pt-24 flex flex-col sm:gap-6 gap-8 sm:w-full w-3/4'>
        <div className='flex flex-col gap-3'>
          <div className='text-dark sm:text-lg text-xl font-bold'>
            {post.fields[`title${lang}`]}
          </div>
          <div className='flex justify-between text-primary text-sm font-light'>
            <p>{formattedDate}</p>
          </div>
        </div>

        <img
          src={post.fields.image.fields.file.url}
          alt={post.fields.image.fields.description}
          className='w-full'
        />

        <div className='text-base font-light leading-5 text-dark space-y-4'>
          <ReactMarkdown>{post.fields[`text${lang}`]}</ReactMarkdown>
        </div>
      </div>
    </Layout>
  );
};

export async function getStaticPaths() {
  const posts = await import(`../../services/contentfulService`).then(
    (module) => module.getBlogPosts()
  );

  const paths = posts.map((post) => ({
    params: { slug: post.fields.slug },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const post = await import(`../../services/contentfulService`).then((module) =>
    module.getBlogPostBySlug(params.slug)
  );

  return {
    props: { post },
  };
}

export default BlogPost;
