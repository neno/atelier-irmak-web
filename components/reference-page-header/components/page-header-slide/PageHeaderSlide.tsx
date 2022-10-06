import CarouselImage from '@components/carousel/CarouselImage';
import { imageWidth } from 'lib/helpers';
import React, { FC } from 'react';
import { SwiperSlide } from 'swiper/react';
import { IPageHeaderSlideProps } from './PageHeaderSlide.types';

export const PageHeaderSlide: FC<IPageHeaderSlideProps> = ({
  url,
  title,
  description,
  width,
  height,
  sliderHeight,
}) => {
  const imgWidth = imageWidth(sliderHeight, width, height);

  return (
    <SwiperSlide
      key={url}
      style={{
        width: `100%`,
        height: `100%`,
      }}
    >
      <CarouselImage
        url={url}
        title={title}
        description={description}
        width={imgWidth}
        height={sliderHeight}
      />
    </SwiperSlide>
  );
};
