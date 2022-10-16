import { FC } from 'react';
import Image from 'next/image';
import clsxm from 'lib/clsxm';
import styles from './Hero.module.css';
import { changeImageFormat, textWithLineBreak } from 'lib/helpers';

interface HeroProps {
  heading: string;
  imageUrl: string;
  alText: string;
}

export const Hero: FC<HeroProps> = ({ heading, imageUrl, alText }) => {
  const img = changeImageFormat(imageUrl);
  return (
    <div className={clsxm('container mx-auto relative pb-16', styles.hero)}>
      <div
        className={clsxm(
          styles.heroImg,
          'relative shadow-xl shadow-slate-300',
          'aspect-square',
          'md:aspect-[2/1]'
        )}
      >
        <Image
          src={img}
          className=''
          alt={alText}
          layout='fill'
          objectFit='cover'
          objectPosition='right bottom'
        />
      </div>
      <div
        className={clsxm(
          styles.heroCaption,
          'bg-primary shadow-xl shadow-slate-500',
          'opacity-90',
          'p-8 lg:p-8 xl:p-12 2xl:p-16',
          'text-white text-xl lg:text-3xl font-title leading-relaxed lg:leading-tight',
          'flex items-center justify-content-center self-center'
        )}
      >
        <p dangerouslySetInnerHTML={{ __html: textWithLineBreak(heading) }} />
      </div>
    </div>
  );
};
