import { createClient } from 'contentful';

export const contentfulClient = createClient({
  space: process.env.CONTENTFUL_SPACE_ID as string,
  accessToken: 'r8snCw1FrWqCp4JLR2KygjMwxoOGZmzPL4kX4Zwqccw',
  // accessToken:
  //   process.env.NODE_ENV === 'development'
  //     ? process.env.CONTENTFUL_PREVIEW_API_KEY as string
  //     : process.env.CONTENTFUL_API_KEY as string,
});