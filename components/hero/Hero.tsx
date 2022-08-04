import { Module } from '@components/layout/Module';
import clsxm from 'lib/clsxm';
import Image from 'next/image';
import { FC } from 'react';
import styles from './Hero.module.css';

interface HeroProps {
  imageUrl: string;
  text: string;
}

export const Hero: FC<HeroProps> = ({ imageUrl, text }) => {
  return (
    <div className={clsxm('container mx-auto relative', styles.hero)}>
      <div
        className={clsxm(
          styles.heroImg,
          'relative',
          'aspect-square',
          'md:aspect-[5/3]'
        )}
      >
        <Image
          // src='/images/Teppich-Laenggasse0338.jpg'
          // src='/images/Teppich-Brcic0324.jpg'
          // src='/images/Teppich-Born0054-2.jpg'
          // src='/images/Sunrise-v5-Ghashghai-meets-Bauhaus-SoFar-SoNear-Studio-for-Zollanvari.jpeg'
          src={imageUrl}
          className=''
          alt='Some alt text'
          layout='fill'
          objectFit='cover'
          objectPosition='right bottom'
        />
      </div>
      <div
        className={clsxm(
          styles.heroCaption,
          'bg-primary',
          'opacity-90',
          'p-8 lg:p-8 2xl:p-16',
          // 'p-6',
          'text-white text-xl lg:text-3xl font-title leading-relaxed lg:leading-tight',
          'flex items-center justify-content-center self-center'
        )}
      >
        <p>{text}</p>
      </div>
    </div>
  );
};
