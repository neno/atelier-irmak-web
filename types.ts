export interface IPage {
  heading: string;
  heroImage: IAsset;
  teasersCollection: TeasersCollection;
  latestReferencesCollection: IReferenceCollection;
  flyingCarpetSection: IReferenceItem;
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

export type TeaserType = 'Kompetenz' | 'Referenz' | 'Der fliegende Teppich';

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

export interface IReferenceQueryData {
  title: string;
  subtitle: string;
  excerpt: string;
  body: string;
  location: string;
  room: string;
  placing: string | null;
  rug: {
    name: string;
    text: string;
    origin: string;
    size: string;
    age: string;
    palette: string;
    detailImage: IFixedSizedAsset;  
  };
  galleryCollection: {
    items: IFixedSizedAsset[];
  };
}

export interface IReference {
  title: string;
  subtitle: string;
  excerpt: string;
  body: string;
  definition: IReferenceDefintion;
  detailImage: IFixedSizedAsset;
  galleryItems: IFixedSizedAsset[];
}

export type TReferenceDefintionKey = 'name' | 'origin' | 'size' | 'age' | 'location' | 'room' | 'placing';
// export type TReferenceDefintion = Map<TReferenceDefintionKey, string>;

export interface IReferenceDefintion {
  name: string;
  origin: string;
  size: string;
  age: string;
  location: string;
  room: string;
  placing: string | null;
}
export interface IRug {
  name: string;
  text: string;
  origin: string;
  palette: string[] | null;
  detailImage: IAsset;
}
