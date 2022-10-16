import { ContentContainer } from '@components/content-container';
import clsxm from '@lib/clsxm';
import clsx from 'clsx';
import { textWithLineBreak } from 'lib/helpers';
import React, { FC } from 'react';

export const LeadText: FC<{ text: string }> = ({ text }) => {
  return (
    <ContentContainer>
      <div className={clsxm('grid grid-cols-12')}>
        <p
          className={clsx(
            'col-start-3 col-end-12',
            'text-xl lg:text-4xl leading-normal lg:leading-normal font-title'
          )}
        >
          {textWithLineBreak(text)}
        </p>
      </div>
    </ContentContainer>
  );
};
