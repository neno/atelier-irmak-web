import type { GetStaticProps, NextPage } from 'next';
import { Hero } from '@components/hero/Hero';
import { References } from '@components/references/References';
import { IPage } from 'types';
import { fetchHomePage } from 'lib/api';
import Teaser from '@components/teasers/Teaser';

const Home: NextPage<{ page: IPage }> = ({
  page: {
    heroImage,
    heading,
    teasersCollection,
    latestReferencesCollection,
    flyingCarpetSection,
  },
}) => {
  return (
    <>
      {heroImage && (
        <Hero
          imageUrl={heroImage?.url}
          heading={heading}
          alText={heroImage?.description}
        />
      )}

      {teasersCollection.items.map((teaser) => (
        <Teaser
          key={teaser.slug}
          slug={teaser.slug}
          type={teaser.type}
          title={teaser.title}
          subtitle={teaser.subtitle}
          excerpt={teaser.excerpt}
          image={{
            url: teaser.image?.url,
            description: teaser.image?.description,
            position: 'right bottom',
          }}
        />
      ))}

      {latestReferencesCollection.items.length > 0 && (
        <References references={latestReferencesCollection.items} />
      )}

      <Teaser
        type='Der fliegende Teppich'
        slug={flyingCarpetSection.slug}
        title={flyingCarpetSection.title}
        subtitle={flyingCarpetSection.subtitle}
        excerpt={flyingCarpetSection.excerpt}
        image={{
          url: flyingCarpetSection.featuredImage.url,
          description: flyingCarpetSection.featuredImage.description,
          position: 'center center',
        }}
      />
    </>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async (_context) => {
  const page: IPage = await fetchHomePage();

  return { props: { page } };
};
