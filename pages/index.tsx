import type { GetStaticProps, NextPage } from 'next';
import { Hero } from '@components/hero/Hero';
import { TeaserCompetences } from '@components/teasers/TeaserCompetences';
import data from '../data/data.json';
import { TeaserReferences } from '@components/teasers/TeaserReferences';
import { TeaserMonthly } from '@components/teasers/TeaserMonthly';
import { References } from '@components/references/References';
import { IPage } from 'types';

const Home: NextPage<IPage> = ({ name, teasers }) => {
  return (
    <div>
      <Hero imageUrl={data.home.hero.imageUrl} text={data.home.hero.text} />
      {/* <Grid /> */}
      <TeaserCompetences
        heading={data.home.competences.heading}
        image={data.home.competences.image}
        text={data.home.competences.text}
      />
      <TeaserReferences
        heading={data.home.referenceTeaser.heading}
        image={data.home.referenceTeaser.image}
        text={data.home.referenceTeaser.text}
      />
      <References references={data.home.references} />
      <TeaserMonthly
        heading={data.home.flyingRug.heading}
        image={data.home.flyingRug.image}
        text={data.home.flyingRug.text}
      />
    </div>
  );
};

export default Home;

// export async function getStaticProps() {}
