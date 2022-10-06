export interface IPage {
  heading: string;
  heroImage: IAsset;
  teasersCollection: TeasersCollection;
  latestReferencesCollection: IReferenceCollection;
}

export interface IReferenzenPage {
  page: {
    heading: string;
  };
  referenceCollection: IReferenceCollection;
}

export interface IAsset {
  url: string;
  title: string;
  description: string;
  width?: number;
  height?: number;
}

export interface IFixedSizedAsset extends IAsset {
  width: number;
  height: number;
}

export interface IReferenceCollection {
  items: IReferenceItem[];
}

export interface IReferenceItem {
  slug: string;
  title: string;
  subtitle: string;
  excerpt: string;
  featuredImage: IAsset;
}

export interface TeasersCollection {
  items: TeasersCollectionItem[];
}

export type TeaserType = 'Kompetenz' | 'Referenz';

export interface TeasersCollectionItem {
  slug: string;
  type: TeaserType;
  title: string;
  subtitle: string;
  excerpt: string;
  image: IAsset;
}

export interface IReferencePaths {
  referenceCollection: {
    items: { slug: string }[];
  };
}

export interface IReference {
  title: string;
  subtitle: string;
  excerpt: string;
  body: string;
  location: string;
  room: string;
  placing: string;
  rug: IRug;
  galleryCollection: {
    items: IFixedSizedAsset[];
  };
}

export interface IRug {
  name: string;
  text: string;
  origin: string;
  palette: string[] | null;
}
