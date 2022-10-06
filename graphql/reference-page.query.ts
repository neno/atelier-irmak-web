import { referenceItem } from './fragments/_referenceItem';

const pageId = '4CrkFwWIcmkZG6GSXvesWJ';

export const referencePageQuery = `
  query {
    page(id: "${pageId}") {
      heading
    }
    referenceCollection {
      items {
        ${referenceItem}
      }
    }
  }
`;
