import { referenceItem } from './fragments/_referenceItem';

export const getReferenceBySlugQuery = (slug: string) => `
  query {
    referenceCollection(where: {slug: "${slug}"}) {
      items {
        ... on Reference {
          title
          subtitle
          excerpt
          body
          location
          room
          placing
          rug {
            ... on Rug {
              name
              text
              origin
              palette
            }
          }
          galleryCollection {
            items {
              ... on Asset {
                url
                description
                title
                width
                height
              }
            }
          }
        }
      }
    }
  }
`;
