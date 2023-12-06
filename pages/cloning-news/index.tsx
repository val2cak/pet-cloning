import dynamic from 'next/dynamic';
import capitalize from 'lodash';

import {
  getBlogPosts,
  getTotalBlogPosts,
} from '../../services/contentfulService';
import Layout from '../Layout';
import Pagination from './components/Pagination/Pagination';
import { locale } from '../../locales/translate';

const CloningNews = ({ posts, currentPage, totalPages }) => {
  const Post = dynamic(() => import('./components/Post/Post'), {
    ssr: false,
  });

  const lang =
    locale.slice(0, 1).toUpperCase() + locale.slice(1, locale.length);

  return (
    <Layout>
      <div className='sm:px-8 px-40 2xl:px-56 sm:pt-8 pt-16 pb-8 grid sm:grid-cols-1 lg:grid-cols-3 grid-cols-4 gap-6 w-full'>
        {posts.map((post) => (
          <div key={post.sys.id}>
            <Post
              title={post.fields[`title${lang}`]}
              dateCreated={post.fields.dateCreated}
              author={post.fields.author}
              imgUrl={post.fields.image.fields.file.url}
              imgDescription={post.fields.image.fields.description}
              text={post.fields[`text${lang}`]}
              slug={post.fields.slug}
            />
          </div>
        ))}
      </div>

      <Pagination currentPage={currentPage} totalPages={totalPages} />
    </Layout>
  );
};

export async function getServerSideProps({ query }) {
  const currentPage = parseInt(query.page) || 1;
  const postsPerPage = 8;

  const totalPosts = await getTotalBlogPosts();
  const totalPages = Math.ceil(totalPosts / postsPerPage);

  const skip = (currentPage - 1) * postsPerPage;
  const posts = await getBlogPosts({ skip, limit: postsPerPage });

  return {
    props: { posts, currentPage, totalPages },
  };
}

export default CloningNews;
