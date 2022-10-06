import { ContentContainer } from '@components/content-container';
import { FC } from 'react';
import { IPageHeadingProps } from './PageHeading.types';

export const PageHeading: FC<IPageHeadingProps> = ({ heading, tag = 'h1' }) => {
  const HTag = tag;
  return (
    <ContentContainer>
      <HTag className='text-4xl lg:text-5xl text-primary leading-tight lg:leading-tight'>
        {heading}
      </HTag>
    </ContentContainer>
  );
};
