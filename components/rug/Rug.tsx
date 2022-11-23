import { ContentContainer } from '@components/content-container';
import clsxm from '@lib/clsxm';
import React, { FC } from 'react';
import { IRugProps } from './Rug.types';
import styles from './Rug.module.css';
import TeaserImage from '@components/teasers/TeaserImage';
import { textWithLineBreak } from '@lib/helpers';
import { motion } from 'framer-motion';

const Rug: FC<IRugProps> = ({ body, detailImage }) => {
  return (
    <div className='container mx-auto pb-16'>
      <div className='grid grid-cols-12'>
        <p
          className={clsxm(
            'col-start-3 col-end-9',
            'text-xl lg:text-2xl leading-normal lg:leading-relaxed'
          )}
        >
          {textWithLineBreak(body)}
        </p>
      </div>
    </div>
  );
};

export default Rug;
