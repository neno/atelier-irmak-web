import { textWithLineBreak } from 'lib/helpers';
import React, { FC } from 'react';

export const LeadText: FC<{ text: string }> = ({ text }) => {
  return (
    <div className='p-16 text-xl lg:text-4xl leading-normal lg:leading-normal bg-gray text-primary font-title'>
      {textWithLineBreak(text)}
    </div>
  );
};
