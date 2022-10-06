import React, { FC } from 'react';
import Image from 'next/image';
import { changeImageFormat } from 'lib/helpers';

interface ITeaserImageProps {
  imageUrl: string;
  altText: string;
  position: string;
}

const TeaserImage: FC<ITeaserImageProps> = ({
  imageUrl,
  altText,
  position,
}) => {
  const src = changeImageFormat(imageUrl);
  return (
    <div>
      <Image
        src={src}
        alt={altText}
        layout='fill'
        objectFit='cover'
        objectPosition={position}
      />
    </div>
  );
};

export default TeaserImage;
