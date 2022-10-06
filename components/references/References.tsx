import { Module } from '@components/layout/Module';
import { FC } from 'react';
import Image from 'next/image';
import { changeImageFormat } from 'lib/helpers';
import Link from 'next/link';

interface IReference {
  slug: string;
  title: string;
  subtitle: string;
  excerpt: string;
  featuredImage: {
    url: string;
    description: string;
    position?: string;
  };
}

interface IReferencesProps {
  references: IReference[];
}

export const References: FC<IReferencesProps> = ({ references }) => {
  return (
    <Module>
      <div className='grid grid-cols-3 gap-8'>
        {references.map(({ title, slug, subtitle, excerpt, featuredImage }) => (
          <div key={featuredImage.url}>
            <div className='relative aspect-square'>
              {featuredImage && (
                <Link href={`/referenzen/${slug}`}>
                  <a>
                    <Image
                      src={changeImageFormat(featuredImage.url)}
                      alt={featuredImage.description}
                      layout='fill'
                      objectFit='cover'
                      objectPosition={featuredImage.position ?? 'center center'}
                    />
                  </a>
                </Link>
              )}
            </div>
            <div className='p-4'>
              <Link href={`/referenzen/${slug}`}>
                <a>
                  <h3 className='py-4 text-2xl text-primary'>{title}</h3>
                </a>
              </Link>
              <h4 className='sr-only'>{subtitle}</h4>
              <p>{excerpt}</p>
            </div>
          </div>
        ))}
      </div>
    </Module>
  );
};
