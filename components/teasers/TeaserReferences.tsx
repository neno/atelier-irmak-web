import { LinkButton } from '@components/buttons';
import { ContentContainer } from '@components/content-container';
import { LinkWrapper } from '@components/link-wrapper/LinkWrapper';
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
    <ContentContainer>
      <div className='md:grid md:grid-cols-8 pb-24 overflow-hidden'>
        <header className='md:col-span-7 lg:col-span-6 mx-4 mb-8'>
          <TeaserHeading heading={title} />
        </header>
        <div className='md:col-span-4 lg:col-span-5 relative aspect-[4/3] md:aspect-square lg:aspect-[4/3] shadow-xl shadow-slate-300'>
          <TeaserImage
            imageUrl={url}
            altText={description}
            position={position}
          />
        </div>
        <div className='relative md:col-span-4 lg:col-span-3 py-8 md:px-8 md:py-0 flex flex-col justify-end '>
          <LinkWrapper path={`/referenzen`}>
            <h3 className='text-3xl lg:text-4xl mb-8 leading-tight lg:leading-tight'>
              {subtitle}
            </h3>
          </LinkWrapper>
          <p>{excerpt}</p>
          <p className='pt-4'>
            <LinkButton path='/referenzen'>
              Lassen Sie sich inspirieren
            </LinkButton>
          </p>
        </div>
      </div>
    </ContentContainer>
  );
};
