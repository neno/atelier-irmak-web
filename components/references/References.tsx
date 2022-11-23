import { FC } from 'react';
import Image from 'next/image';
import { changeImageFormat } from 'lib/helpers';
import Link from 'next/link';
import { ContentContainer } from '@components/content-container';
import { motion } from 'framer-motion';

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
                  <h3 className='py-6 text-2xl'>{title}</h3>
                </a>
              </Link>
              {/* <h4 className='sr-only'>{subtitle}</h4>
                <p>{excerpt}</p> */}
            </div>
          </motion.div>
        )
      )}
    </div>
  );
};
