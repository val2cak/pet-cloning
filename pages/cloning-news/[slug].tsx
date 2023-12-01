import {
  getBlogPostBySlug,
  getBlogPosts,
} from '../../services/contentfulService';
import Layout from '../Layout';

const BlogPost = ({ post }) => {
  return (
    <Layout>
      <div className='pl-40 py-16 pt-24 flex flex-col gap-8 w-3/4'>
        <div className='flex flex-col gap-3'>
          <div className='text-dark text-xl font-bold'>{post.fields.title}</div>
          <div className='flex justify-between text-primary text-sm font-light'>
            <p>{post.fields.dateCreated}</p>
            <p>By: {post.fields.author}</p>
          </div>
        </div>

        <img
          src={post.fields.image.fields.file.url}
          alt={post.fields.image.fields.description}
          className='w-full'
        />

        <div className='text-base font-light leading-5 text-dark'>
          {post.fields.text}
        </div>
      </div>
    </Layout>
  );
};

export async function getStaticPaths() {
  const posts = await getBlogPosts();

  const paths = posts.map((post) => ({
    params: { slug: post.fields.slug },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const post = await getBlogPostBySlug(params.slug);

  return {
    props: { post },
  };
}

export default BlogPost;
