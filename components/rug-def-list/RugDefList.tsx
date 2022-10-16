import clsxm from '@lib/clsxm';
import { t } from '@lib/helpers';
import React, { FC } from 'react';
import { IReferenceDefintion } from 'types';
import { IRugDefListProps } from './RugDefList.types';

const keys = ['name', 'origin', 'size', 'age', 'location', 'room', 'placing'];

export const RugDefList: FC<IRugDefListProps> = ({ items }) => {
  const filteredKeys = keys.filter(
    (key) => !!items[key as keyof IReferenceDefintion]
  );

  return (
    <dl className={clsxm('w-full', 'mx-auto', 'text-white')}>
      {filteredKeys.map((key) => (
        <React.Fragment key={key}>
          <dt className='font-bold text-sm font-title text-light'>{t(key)}</dt>
          <dd className='mb-4'>{items[key as keyof IReferenceDefintion]}</dd>
        </React.Fragment>
      ))}
    </dl>
  );
};
