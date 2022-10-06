import { Module } from '@components/layout/Module';
import { FC } from 'react';
import clsxm from 'lib/clsxm';
import styles from './TeaserCompetences.module.css';
import TeaserHeading from './TeaserHeading';
import TeaserImage from './TeaserImage';
import { ITeaserProps } from './Teaser.types';

export const TeaserCompetences: FC<ITeaserProps> = ({
  slug,
  title,
  subtitle,
  excerpt,
  image: { url, description, position },
}) => {
  return (
    <div className='w-full py-12'>
      <div
        className={clsxm(
          'relative bg-gray',
          'before:block content-["*"] before:absolute before:top-[50%] before:left-0 before:bg-white before:h-[100%] before:w-[66.67%] lg:before:w-[50%] z-1 overflow-hidden'
        )}
      >
        <Module>
          {title && (
            <header className='lg:w-[75%] mx-4 mb-8 md:mb-0 lg:mb-8 2xl:w-[62.5%]'>
              <TeaserHeading heading={title} />
            </header>
          )}
          <div className={clsxm('relative z-2', styles.teaser)}>
            <div
              className={clsxm(
                'relative p-4 relative aspect-[4/3] md:aspect-square lg:aspect-[4/3]',
                styles.teaserImg
              )}
            >
              {url && (
                <TeaserImage
                  imageUrl={url}
                  altText={description}
                  position={position}
                />
              )}
            </div>
            <div
              className={clsxm(styles.teaserText, 'flex flex-col justify-end')}
            >
              {subtitle && (
                <h3 className='text-primary text-3xl lg:text-4xl p-4 pt-8 md:pt-4 leading-tight lg:leading-tight'>
                  {subtitle}
                </h3>
              )}
              {excerpt && <p className='p-4 md:pb-0'>{excerpt}</p>}
            </div>
          </div>
        </Module>
      </div>
    </div>
  );
};
