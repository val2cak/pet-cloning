import { createClient } from 'contentful';

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

export const getEntries = async () => {
  const entries = await client.getEntries();
  return entries.items;
};

export const getBlogPosts = async () => {
  const entries = await client.getEntries({ content_type: 'petCloning' });
  return entries.items;
};

export const getBlogPostBySlug = async (slug) => {
  const entry = await client.getEntries({
    content_type: 'petCloning',
    'fields.slug': slug,
  });

  return entry.items[0];
};
