import { getBlogPosts } from '../../services/contentfulService';
import Layout from '../Layout';
import Post from './components/Post/Post';

const CloningNews = ({ posts }) => {
  return (
    <Layout>
      <div className='px-40 py-16 grid grid-cols-4 gap-6 w-full'>
        {posts.map((post) => (
          <Post
            id={post.sys.id}
            title={post.fields.title}
            dateCreated={post.fields.dateCreated}
            author={post.fields.author}
            imgUrl={post.fields.image.fields.file.url}
            imgDescription={post.fields.image.fields.description}
            text={post.fields.text}
            slug={post.fields.slug}
          />
        ))}
      </div>
    </Layout>
  );
};

export async function getStaticProps() {
  const posts = await getBlogPosts();

  return {
    props: { posts },
  };
}

export default CloningNews;
