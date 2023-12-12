import { createClient } from 'contentful';

interface GetBlogPostsOptions {
  skip?: number;
  limit?: number;
}

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

export const getEntries = async () => {
  const entries = await client.getEntries();
  return entries.items;
};

export const getTotalBlogPosts = async () => {
  const entries = await client.getEntries({ content_type: 'petCloning' });
  return entries.total;
};

export const getBlogPosts = async ({
  skip,
  limit,
}: GetBlogPostsOptions = {}) => {
  const entries = await client.getEntries({
    content_type: 'petCloning',
    skip,
    limit,
  });
  return entries.items;
};

export const getBlogPostBySlug = async (slug) => {
  const entry = await client.getEntries({
    content_type: 'petCloning',
    'fields.slug': slug,
  });

  return entry.items[0];
};
