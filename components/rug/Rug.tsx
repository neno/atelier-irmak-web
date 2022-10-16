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
    <ContentContainer>
      <div className={clsxm(styles.rug)}>
        <div className={clsxm(styles.bg, 'bg-gray')}></div>
        <div
          className={clsxm(styles.body, 'p-8 leading-normal')}
          dangerouslySetInnerHTML={{ __html: textWithLineBreak(body) }}
        />
        <motion.div
          className={clsxm(
            styles.img,
            'relative overflow-hidden bg-primary shadow-xl shadow-slate-300'
          )}
          initial={{ y: 150 }}
          whileInView={{ y: 0 }}
          transition={{ type: 'spring', damping: 16, stiffness: 100 }}
        >
          <motion.div
            className='w-full h-full relative'
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', damping: 16, stiffness: 200 }}
          >
            <TeaserImage
              imageUrl={detailImage.url}
              altText={detailImage.description}
              position='bottom right'
            />
          </motion.div>
        </motion.div>
      </div>
    </ContentContainer>
  );
};

export default Rug;
