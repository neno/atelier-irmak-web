import React, { FC } from 'react';

interface ITeaserHeadingProps {
  heading: string;
}

const TeaserHeading: FC<ITeaserHeadingProps> = ({ heading }) => {
  return (
    <h2 className='text-4xl lg:text-5xl leading-tight lg:leading-tight'>
      {heading}
    </h2>
  );
};

export default TeaserHeading;
