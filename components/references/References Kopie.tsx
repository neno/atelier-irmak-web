import { FC } from 'react';
import Image from 'next/image';
import { changeImageFormat, truncate } from 'lib/helpers';
import Link from 'next/link';
import { ContentContainer } from '@components/content-container';
import { motion } from 'framer-motion';
import clsxm from '@lib/clsxm';

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
    <ContentContainer>
      <div className='grid grid-cols-3 gap-8'>
        {references.map(
          ({ title, slug, subtitle, excerpt, featuredImage }, index) => (
            <motion.div
              key={featuredImage.url}
              whileHover={{
                scale: 1.05,
                boxShadow: '0 20px 25px -5px #cbd5e1, 0 8px 10px -6px #cbd5e1',
              }}
            >
              <div className='relative aspect-square shadow-xl shadow-slate-300'>
                {featuredImage && (
                  <Link href={`/referenzen/${slug}`}>
                    <a className='absolute top-0 left-0 w-full h-full bg-primary'>
                      <Image
                        className='z-1'
                        src={changeImageFormat(featuredImage.url)}
                        alt={featuredImage.description}
                        layout='fill'
                        objectFit='cover'
                        objectPosition={
                          featuredImage.position ?? 'center center'
                        }
                      />
                      <div
                        className={clsxm(
                          'absolute z-2 bottom-0 left-0 w-full h-30 flex flex-col-reverse',
                          'bg-gradient-to-t from-black'
                        )}
                      >
                        <h3 className='p-6 text-2xl leading-tight text-gray'>
                          {title}
                        </h3>
                      </div>
                    </a>
                  </Link>
                )}
              </div>
              {/* <div className='p-4'>
                <Link href={`/referenzen/${slug}`}>
                  <a>
                    <h3 className='py-6 text-2xl'>{title}</h3>
                  </a>
                </Link>
                <h4 className='sr-only'>{subtitle}</h4>
                <p>{truncate(excerpt)}</p>
              </div> */}
            </motion.div>
          )
        )}
      </div>
    </ContentContainer>
  );
};
