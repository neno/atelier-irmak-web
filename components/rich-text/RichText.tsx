import React, { FC } from 'react';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import styles from './RichText.module.css';

export const RichText: FC<{ content: any }> = ({ content }) => {
  return (
    <div className={styles['markdown']}>
      {documentToReactComponents(content.json)}
    </div>
  );
};
