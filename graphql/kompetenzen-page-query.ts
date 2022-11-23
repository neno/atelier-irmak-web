const pageId = '22f9M6IFl9NOrOtRkwwwxv';

export const kompetenzenPageQuery = `
  query {
    landingpage(id: "${pageId}") {
      hero {
        url
        width
        height
      }
      heading
      lead
      body {
        json
      }
    }
  }
`;
