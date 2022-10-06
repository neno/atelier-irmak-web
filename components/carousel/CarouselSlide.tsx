import clsxm from 'lib/clsxm';
import { imageWidth } from 'lib/helpers';
import React, { FC } from 'react';
import { SwiperSlide } from 'swiper/react';
import { IAsset } from 'types';
import CarouselImage from './CarouselImage';
// import styles from '@components/carousel/Carousel.module.css';

export const CarouselSlide: FC<IAsset> = ({
  url,
  title,
  description,
  width = 480,
  height = 565,
}) => {
  const sliderHeight = 565;
  const sliderWidth = imageWidth(sliderHeight, width, height);
  console.log({ sliderWidth, sliderHeight });

  return (
    <SwiperSlide
      key={url}
      style={{
        width: `${sliderWidth}px`,
        height: `${sliderHeight}px`,
        backgroundColor: 'orange',
      }}
    >
      <CarouselImage
        url={url}
        title={title}
        description={description}
        width={sliderHeight}
        height={sliderWidth}
      />
    </SwiperSlide>
  );
};
