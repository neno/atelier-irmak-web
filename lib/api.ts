import { IKompetenzenPage } from './../types';
import { getReferenceBySlugQuery } from './../graphql/reference-by-slug.query';
import { referencePageQuery } from 'graphql/reference-page.query';
import { referencePathsQuery } from 'graphql/reference-paths.query';
import {
  IPage,
  IReference,
  IReferenceCollection,
  IReferenceItem,
  IReferencePaths,
  IReferenzenPage,
} from 'types';
import { homePageQuery } from '../graphql/home-page.query';
import { mapDataToReference } from './helpers';
import { kompetenzenPageQuery } from 'graphql/kompetenzen-page-query';

const headers = {
  Authorization: `Bearer ${process.env.CONTENTFUL_API_KEY}`,
  'Content-Type': 'application/json',
};

async function fetchData(query: string) {
  try {
    const url =
      'https://graphql.contentful.com/content/v1/spaces/52k427pz1yee/environments/master';
    const result = await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify({ query }),
    });

    if (!result.ok) {
      throw result;
    }

    const { data } = await result.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}

export async function fetchHomePage(): Promise<IPage> {
  const { page } = await fetchData(homePageQuery);
  return page;
}

export async function fetchReferencePage(): Promise<IReferenzenPage> {
  const { page, referenceCollection } = await fetchData(referencePageQuery);
  return { page, referenceCollection };
}

export async function fetchReferencePaths(): Promise<IReferencePaths> {
  const data = await fetchData(referencePathsQuery);
  return data;
}

export async function getReferenceBySlug(
  slug: string
): Promise<IReference> {
  const query = getReferenceBySlugQuery(slug);
  const {
    referenceCollection: { items },
  } = await fetchData(query);

  return mapDataToReference(items?.[0]);
}

export async function fetchKompetenzenPage(): Promise<IKompetenzenPage> {
  const { landingpage } = await fetchData(kompetenzenPageQuery);
  return { ...landingpage };
}
