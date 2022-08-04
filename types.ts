export interface IPage {
  name: string;
  route: string;
  teasers: ITeaser[];
  latestReferences: any[];
}

export interface ITeaser {
  title: string;
  image: {
    url: string;
    alt: string;
    size: string;
  };
  bodyText: string;
  tagLine: string;
  teaserType: string;
}
