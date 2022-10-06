import { FC } from 'react';
import { ITeaserProps } from './Teaser.types';
import TeaserHeading from './TeaserHeading';
import TeaserImage from './TeaserImage';

export const TeaserReferences: FC<ITeaserProps> = ({
  slug,
  title,
  subtitle,
  excerpt,
  image: { url, description, position },
}) => {
  return (
    <div className='container mx-auto pb-12 md:pt-12'>
      <div className='md:grid md:grid-cols-8 pb-24 overflow-hidden'>
        {title && (
          <header className='md:col-span-7 lg:col-span-6 mx-4 mb-8'>
            <TeaserHeading heading={title} />
          </header>
        )}
        <div className='md:col-span-4 lg:col-span-5 relative aspect-[4/3] md:aspect-square lg:aspect-[4/3]'>
          {url && (
            <TeaserImage
              imageUrl={url}
              altText={description}
              position={position}
            />
          )}
        </div>
        <div className='relative md:col-span-4 lg:col-span-3 py-8 md:px-8 md:py-0 flex flex-col justify-end '>
          {subtitle && (
            <h3 className='text-primary text-3xl lg:text-4xl mb-8 leading-tight lg:leading-tight'>
              {subtitle}
            </h3>
          )}
          {excerpt && <p>{excerpt}</p>}
        </div>
      </div>
    </div>
  );
};
