import React, { FC } from 'react';
import Image from 'next/image';
import { IFixedSizedAsset } from 'types';

const CarouselImage: FC<IFixedSizedAsset> = ({
  url,
  description,
  width,
  height,
}) => {
  const layout = width > height ? 'responsive' : 'fixed';
  return (
    <Image
      src={url}
      alt={description}
      width={width}
      height={height}
      layout={layout}
      objectFit='contain'
    />
  );
  // return (
  //   <div
  //     className={`flex-1 h-[${height}px] w-[${width}px] flex-1 bg-primary-light relative`}
  //   >
  //     <Image src={url} alt={description} layout='fill' objectFit='contain' />
  //   </div>
  // );
};

export default CarouselImage;

{
  /* <CloudinaryImage
  image={image}
  alt={image.alt}
  layout={image.width > image.height ? 'responsive' : 'fixed'}
  height={sliderHeight}
  width={imageWidth(image.width, image.height)}
  objectFit='contain'
  sizes={`(min-width: 960px) ${imageWidth(image.width, image.height)}px, 100vw`}
/>; */
}
