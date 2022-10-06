import React, { FC } from 'react';
import { TeaserType } from 'types';
import { TeaserCompetences } from './TeaserCompetences';
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

const Teaser: FC<ITeaserProps> = ({
  type,
  slug,
  title,
  subtitle,
  excerpt,
  image: { url, description, position = 'right bottom' },
}) => {
  if (type === 'Kompetenz') {
    return (
      <TeaserCompetences
        type={type}
        slug={slug}
        image={{
          url,
          description,
          position,
        }}
        title={title}
        subtitle={subtitle}
        excerpt={excerpt}
      />
    );
  }

  if (type === 'Referenz') {
    return (
      <TeaserReferences
        type={type}
        slug={slug}
        image={{
          url,
          description,
          position,
        }}
        title={title}
        subtitle={subtitle}
        excerpt={excerpt}
      />
    );
  }

  return null;
};

export default Teaser;
