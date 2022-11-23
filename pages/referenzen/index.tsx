import React from 'react';
import { GetStaticProps, NextPage } from 'next';
import { fetchReferencePage } from 'lib/api';
import { IReferenzenPage } from 'types';
import { References } from '@components/references/References';
import { PageHeading } from '@components/page-heading/PageHeading';
import { ContentContainer } from '@components/content-container';

const Referenzen: NextPage<IReferenzenPage> = ({
  page,
  referenceCollection,
}) => {
  return (
    <>
      <PageHeading heading={page.heading} />
      <ContentContainer>
        <References references={referenceCollection.items} />
      </ContentContainer>
    </>
  );
};

export default Referenzen;

export const getStaticProps: GetStaticProps = async (_context) => {
  const { page, referenceCollection }: IReferenzenPage =
    await fetchReferencePage();

  return { props: { page, referenceCollection } };
};
