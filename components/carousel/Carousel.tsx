import React, { ReactNode, useRef } from 'react';
import SwiperCore, { Navigation, Pagination, A11y } from 'swiper';
import { Swiper } from 'swiper/react';
// import ChevronRightIcon from '@material-ui/icons/ChevronRight';
// import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import clsxm from 'lib/clsxm';
import styles from './Carousel.module.css';
import 'swiper/css';

SwiperCore.use([Navigation, Pagination, A11y]);

interface IProps {
  children: ReactNode;
  sliderHeight?: number;
  slidesPerView?: number | 'auto';
  spaceBetween?: number;
  breakpoints?: {};
}

export const Carousel: React.FunctionComponent<IProps> = ({
  children,
  sliderHeight = 565,
  slidesPerView = 1,
  spaceBetween = 0,
  breakpoints = false,
}) => {
  const navPrevButton = useRef<HTMLButtonElement>(null);
  const navNextButton = useRef<HTMLButtonElement>(null);
  const paginationEl = useRef<HTMLDivElement>(null);

  return (
    <>
      {children && (
        <div className='relative w-full h-full'>
          {/* <button
            type='button'
            className={styles.btn}
            ref={navPrevButton}
            aria-label='Previous slide'
          >
            <ChevronLeftIcon fontSize='large' />
          </button> */}
          {/* <button
            type='button'
            className={styles.btn}
            ref={navNextButton}
            aria-label='Next slide'
          >
            <ChevronRightIcon fontSize='large' />
          </button> */}
          <Swiper
            className='w-full h-full bg-gray'
            slidesPerView={slidesPerView}
            spaceBetween={spaceBetween}
            // breakpoints={{}}
            // navigation={{
            //   prevEl: navPrevButton?.current,
            //   nextEl: navNextButton?.current,
            // }}
            // pagination={{
            //   el: paginationEl.current,
            //   clickable: true,
            // }}
            loop={true}
          >
            {children}
          </Swiper>
          {/* <div className={classes.pagination} ref={paginationEl}></div> */}
        </div>
      )}
    </>
  );
};

// import React, { FC } from 'react';
// import { ICarouselProps } from './Carousel.types';
// import clsxm from 'lib/clsxm';
// import CarouselImage from './CarouselImage';
// import styles from './Carousel.module.css';

// const Carousel: FC<ICarouselProps> = ({ assets }) => {
//   return (
//     <div className={clsxm('w-full relative', styles.wrapper)}>
//       <div className='flex'>
//         {assets.map(({ url, description, title, width, height }) => (
//           <CarouselImage
//             key={url}
//             url={url}
//             description={description}
//             title={title}
//             width={width}
//             height={height}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Carousel;
