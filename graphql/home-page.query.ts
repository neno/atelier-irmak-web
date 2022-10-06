import { referenceItem } from './fragments/_referenceItem';
import { teaserItem } from './fragments/_teaserItem';

const pageId = '5ItUQCIMTkghnbx9Bp9Ulm';

export const homePageQuery = `
  query {
    page(id: "${pageId}") {
      heading
      heroImage {
        url
        title
        description
      }
      teasersCollection {
        items {
          ${teaserItem}
        }
      }
      latestReferencesCollection {
        items {
          ${referenceItem}
        }
      }
    }
  }
`;