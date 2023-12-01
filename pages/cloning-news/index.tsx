import Layout from '../Layout';

import { getBlogPosts } from '../../services/contentfulService';

const CloningNews = ({ posts }) => {
  return (
    <Layout>
      <div>
        <h1>My Blog</h1>
        <ul>
          {posts.map((post) => (
            <li key={post.sys.id}>
              <h2>{post.fields.title}</h2>
              <p>{post.fields.date}</p>
              <img
                src={post.fields.image.fields.file.url}
                alt={post.fields.image.fields.description}
              />
              <p>{post.fields.text}</p>
            </li>
          ))}
        </ul>
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
