import { TeaserType } from 'types';
import { TeaserCompetences } from './TeaserCompetences';
import { TeaserMonthly } from './TeaserMonthly';
import { TeaserReferences } from './TeaserReferences';

export interface ITeaserProps {
  slug: string;
  type: TeaserType;
  title: string;
  subtitle: string;
  excerpt: string;
  image: {
    url: string;
    description: string;
    position: string;
  };
}

export type TeaserComponentType = typeof TeaserCompetences | typeof TeaserReferences | typeof TeaserMonthly

