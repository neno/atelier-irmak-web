import { FC } from 'react';
import Image from 'next/image';
import { textWithLineBreak } from 'lib/helpers';
import { LinkWrapper } from '@components/link-wrapper/LinkWrapper';
import { ITeaserProps } from './Teaser.types';

export const TeaserMonthly: FC<ITeaserProps> = ({
  slug,
  title,
  subtitle,
  excerpt,
  image: { url, description, position = 'right bottom' },
}) => {
  return (
    <div className='w-full bg-gray pt-12 mt-12'>
      <div className='container mx-auto grid'>
        <header className='md:col-span-7 lg:col-span-6 mx-4 mb-12'>
          <h2 className='text-4xl lg:text-5xl text-primary leading-tight lg:leading-tight'>
            Der Fliegende Teppich
          </h2>
        </header>
      </div>

      <div className='relative pb-8 md:pb-16'>
        <div className='container mx-auto'>
          <div className='md:grid grid-cols-2 '>
            <div className='relative border-[1rem] border-white aspect-[4/3]'>
              <LinkWrapper slug={slug}>
                <Image
                  src={url}
                  className=''
                  alt={description}
                  layout='fill'
                  objectFit='cover'
                  objectPosition={position}
                />
              </LinkWrapper>
            </div>
            <div className='px-8 bg-gray flex flex-col justify-end'>
              <LinkWrapper slug={slug}>
                <h2 className='text-primary text-3xl lg:text-4xl pb-4 leading-tight lg:leading-tight'>
                  {title}: {subtitle}
                </h2>
              </LinkWrapper>
              <p>{textWithLineBreak(excerpt)}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
