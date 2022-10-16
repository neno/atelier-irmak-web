import { FC } from 'react';
import Image from 'next/image';
import { textWithLineBreak } from 'lib/helpers';
import { LinkWrapper } from '@components/link-wrapper/LinkWrapper';
import { ITeaserProps } from './Teaser.types';
import { LinkButton } from '@components/buttons';
import { ContentContainer } from '@components/content-container';

export const TeaserMonthly: FC<ITeaserProps> = ({
  slug,
  title,
  subtitle,
  excerpt,
  image: { url, description, position = 'right bottom' },
}) => {
  const path = `/referenzen/${slug}`;
  return (
    <div className='w-full bg-gray mb-[-64px]'>
      <ContentContainer>
        <div className='grid'>
          <header className='md:col-span-7 lg:col-span-6 mx-4 mb-12'>
            <h2 className='text-4xl lg:text-5xl leading-tight lg:leading-tight'>
              Der Fliegende Teppich
            </h2>
          </header>
        </div>
        <div className='md:grid grid-cols-2 '>
          <div className='relative border-[1rem] border-white aspect-[4/3] shadow-xl shadow-slate-300'>
            <LinkWrapper path={path}>
              <Image
                src={url}
                alt={description}
                layout='fill'
                objectFit='cover'
                objectPosition={position}
              />
            </LinkWrapper>
          </div>
          <div className='px-8 bg-gray flex flex-col justify-end'>
            <LinkWrapper path={path}>
              <h2 className='text-3xl lg:text-4xl pb-4 leading-tight lg:leading-tight'>
                {title}: {subtitle}
              </h2>
            </LinkWrapper>
            <p className='py-4'>{textWithLineBreak(excerpt)}</p>
            <p className='pt-4 pb-6'>
              <LinkButton path='/referenzen'>Mehr</LinkButton>
            </p>
          </div>
        </div>
      </ContentContainer>
    </div>
  );
};
