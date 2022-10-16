import { Carousel } from '@components/carousel';
import CarouselImage from '@components/carousel/CarouselImage';
import { ContentContainer } from '@components/content-container';
import { RugDefList } from '@components/rug-def-list/RugDefList';
import clsxm from 'lib/clsxm';
import { imageWidth } from 'lib/helpers';
import React, { FC, useEffect, useRef, useState } from 'react';
import { SwiperSlide } from 'swiper/react';
import { PageHeaderSlide } from './components/page-header-slide/PageHeaderSlide';
import styles from './ReferencePageHeader.module.css';
import { IReferencePageHeaderProps } from './ReferencePageHeader.types';
import FeatherIcon from 'feather-icons-react';
import { motion } from 'framer-motion';

export const ReferencePageHeader: FC<IReferencePageHeaderProps> = ({
  assets,
  heading,
  definition,
}) => {
  const sliderHeight = 565;
  const [showDefList, setShowDefList] = useState(false);
  const toggleDefListVisibility = () => setShowDefList(!showDefList);

  return (
    <ContentContainer>
      <header
        className={clsxm(
          'relative block',
          'before:z-0 before:block content-["*"] before:absolute before:h-[50%] before:w-[25%] before:top-[-4rem] before:right-[-4rem] before:translate-x-[-8] before:translate-y-[-8]',
          'before:bg-gray'
        )}
      >
        <div
          className={clsxm(
            'relative z-1 grid grid-cols-2 grid-rows-1 mt-8 overflow-hidden',
            `h-[${sliderHeight}px]`,
            'shadow-xl shadow-slate-300 z-10'
          )}
        >
          <div className={`h-full w-full`}>
            <Carousel
              slidesPerView={1}
              spaceBetween={0}
              sliderHeight={sliderHeight}
            >
              {assets.map(({ url, title, description, width, height }) => (
                <SwiperSlide key={url} className='w-full h-full bg-gray'>
                  <CarouselImage
                    url={url}
                    title={title}
                    description={description}
                    width={imageWidth(sliderHeight, width, height)}
                    height={sliderHeight}
                  />
                </SwiperSlide>
              ))}
            </Carousel>
          </div>
          <div
            className={clsxm(
              'relative h-full w-full grid grid-cols-1 grid-rows-1',
              styles.wrapper
            )}
          >
            <div
              className={clsxm(
                styles.text,
                'relative z-0 grid content-center justify-center bg-white'
              )}
            >
              <h1 className='py-16 px-32 text-5xl lg:text-6xl leading-tight lg:leading-tight'>
                {heading}
              </h1>
              <button
                className='absolute bottom-[48px] right-[48px]'
                onClick={toggleDefListVisibility}
                title='Stichwortliste einblenden'
              >
                <FeatherIcon icon='info' size={48} />
              </button>
            </div>
            <motion.div
              className={clsxm(
                styles.text,
                'relative z-10 grid content-center justify-center bg-primary'
              )}
              initial={{ y: '100%' }}
              animate={{
                y: showDefList ? '0%' : '100%',
              }}
              transition={{ type: 'spring', damping: 16, stiffness: 100 }}
            >
              <RugDefList items={definition} />
              <button
                className='absolute top-[48px] right-[48px] text-white'
                onClick={toggleDefListVisibility}
                title='Stichwortliste ausblenden'
              >
                <FeatherIcon icon='x' size={48} />
              </button>
            </motion.div>
          </div>
        </div>
      </header>
    </ContentContainer>
  );
};
