import { Carousel } from '@components/carousel';
import CarouselImage from '@components/carousel/CarouselImage';
import { ContentContainer } from '@components/content-container';
import clsxm from 'lib/clsxm';
import { imageWidth } from 'lib/helpers';
import React, { FC } from 'react';
import { SwiperSlide } from 'swiper/react';
import { PageHeaderSlide } from './components/page-header-slide/PageHeaderSlide';
import { IReferencePageHeaderProps } from './ReferencePageHeader.types';

export const ReferencePageHeader2: FC<IReferencePageHeaderProps> = ({
  assets,
  heading,
  definition,
}) => {
  const sliderHeight = 565;
  return (
    <ContentContainer>
      <div
        className={clsxm(
          'relative',
          'before:z-0 before:block content-["*"] before:absolute before:h-[50%] before:w-[25%] before:top-[-4rem] before:right-[-4rem] before:translate-x-[-8] before:translate-y-[-8]',
          'before:bg-gray'
        )}
      >
        <div
          className={clsxm(
            'relative grid grid-cols-2 grid-rows-1 mt-8 shadow-xl shadow-slate-300 z-1'
          )}
        >
          <div className={`z-1 relative w-full h-[${sliderHeight}px] bg-gray`}>
            <Carousel
              slidesPerView={1}
              spaceBetween={0}
              sliderHeight={sliderHeight}
            >
              {assets.map(({ url, title, description, width, height }) => (
                // <PageHeaderSlide
                //   key={url}
                //   url={url}
                //   title={title}
                //   description={description}
                //   width={width}
                //   height={sliderHeight}
                //   sliderHeight={height}
                // />
                <SwiperSlide
                  key={url}
                  style={{
                    width: `100%`,
                    height: `100%`,
                    backgroundColor: '#f1f5f9',
                  }}
                >
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
          <div className='relative z-1 bg-white w-full h-full grid content-center justify-center'>
            <h1 className='py-16 px-32 text-5xl lg:text-6xl leading-tight lg:leading-tight'>
              {heading}
            </h1>
          </div>
        </div>
      </div>
    </ContentContainer>
  );
};
