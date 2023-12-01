import {
  getBlogPostBySlug,
  getBlogPosts,
} from '../../services/contentfulService';

const BlogPost = ({ post }) => {
  return (
    <div>
      <h1>{post.fields.title}</h1>
      <p>{post.fields.date}</p>
      <img
        src={post.fields.image.fields.file.url}
        alt={post.fields.image.fields.description}
      />
      <p>{post.fields.text}</p>
    </div>
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
