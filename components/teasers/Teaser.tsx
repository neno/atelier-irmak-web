import React, { FC } from 'react';
import { TeaserType } from 'types';
import { ITeaserProps, TeaserComponentType } from './Teaser.types';
import { TeaserCompetences } from './TeaserCompetences';
import { TeaserMonthly } from './TeaserMonthly';
import { TeaserReferences } from './TeaserReferences';

const TeaserMap = new Map<TeaserType, TeaserComponentType>();
TeaserMap.set('Kompetenz', TeaserCompetences);
TeaserMap.set('Referenz', TeaserReferences);
TeaserMap.set('Der fliegende Teppich', TeaserMonthly);

const Teaser: FC<ITeaserProps> = ({
  type,
  slug,
  title,
  subtitle,
  excerpt,
  image: { url, description, position = 'right bottom' },
}) => {
  const TeaserComponent = TeaserMap.get(type);
  if (TeaserComponent) {
    return (
      <TeaserComponent
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
