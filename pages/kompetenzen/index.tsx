import React from 'react';
import { GetStaticProps, NextPage } from 'next';
import { fetchKompetenzenPage, fetchReferencePage } from 'lib/api';
import { IAsset, IKompetenzenPage, IReferenzenPage } from 'types';
import { References } from '@components/references/References';
import { PageHeading } from '@components/page-heading/PageHeading';
import { ContentContainer } from '@components/content-container';
import { Hero } from '@components/hero/Hero';
import { LeadText } from '@components/lead-text/LeadText';
import { RichText } from '@components/rich-text';

const Kompetenzen: NextPage<IKompetenzenPage> = ({
  heading,
  lead,
  body,
  hero,
}) => {
  return (
    <>
      {/* <PageHeading heading={heading} />   */}
      {hero && (
        <Hero imageUrl={hero.url} heading={heading} alText={hero.description} />
      )}

      <ContentContainer>
        <div className='mx-48'>
          <LeadText text={lead} />
        </div>
      </ContentContainer>
      <ContentContainer>
        <div className="mx-48 grid grid-cols-2">
        {/* <div className="relative bg-white"></div> */}
        <RichText content={body} />
        </div>
      </ContentContainer>
    </>
  );
};

export default Kompetenzen;

export const getStaticProps: GetStaticProps = async (_context) => {
  const { heading, lead, body, hero }: IKompetenzenPage =
    await fetchKompetenzenPage();

  return { props: { heading, lead, body, hero } };
};
