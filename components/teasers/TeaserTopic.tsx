import { ContentContainer } from '@components/content-container';
import clsxm from 'lib/clsxm';
import React, { FC } from 'react';
import { ITeaserProps } from './Teaser.types';

export const TeaserTopic = () => {
  return (
    <ContentContainer>
      <div
        className={clsxm(
          'relative grid grid-cols-2 grid-rows-1 mt-16 h-[565px]',
          'before:z-0 before:block content-["*"] before:absolute before:h-[50%] before:w-[25%] before:top-[-4rem] before:left-[-4rem] before:translate-x-[-8] before:translate-y-[-8]',
          'before:bg-gray'
        )}
      >
        <div className='z-1 relative w-full h-full bg-white'></div>
        <div className='bg-gray w-full h-full grid content-center justify-center'>
          <div className='p-16 text-xl lg:text-3xl leading-normal lg:leading-normal bg-gray font-title'>
            Blaue Stunden in Traum und Schlaf: Verneh Kelim aus Aserbaidschan,
            193x125cm, um 1900
          </div>
        </div>
      </div>
    </ContentContainer>
  );
};
