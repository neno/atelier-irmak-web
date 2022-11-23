import clsxm from '@lib/clsxm';
import React, { FC } from 'react';

export const LeadText: FC<{ text: string }> = ({ text }) => {
  return (
    <p
      className={clsxm(
        'col-start-3 col-end-12',
        'text-xl lg:text-4xl leading-normal lg:leading-normal font-title'
      )}
    >
      {text}
    </p>
  );
};
