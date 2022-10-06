import React from 'react';
import { NextPage } from 'next';
import { fetchReferencePaths, getReferenceBySlug } from 'lib/api';

import { Carousel } from '@components/carousel';
import { PageHeading } from '@components/page-heading';
import { IReference } from 'types';
import { CarouselSlide } from '@components/carousel/CarouselSlide';
import { SwiperSlide } from 'swiper/react';
import CarouselImage from '@components/carousel/CarouselImage';
import { imageWidth } from 'lib/helpers';
import { LeadText } from '@components/lead-text/LeadText';
import { ContentContainer } from '@components/content-container';
import { TeaserTopic } from '@components/teasers/TeaserTopic';
import { ReferencePageHeader } from '@components/reference-page-header/ReferencePageHeader';

const ReferenceDetailPage: NextPage<IReference> = ({
  title,
  excerpt,
  galleryCollection: { items },
}) => {
  const sliderHeight = 565;
  return (
    <>
      <ReferencePageHeader text={excerpt} assets={items} />
      {/* <TeaserTopic /> */}
      {/* <Carousel slidesPerView='auto' spaceBetween={16}>
        {items.map(({ url, title, description, width, height }) => (
          // <CarouselSlide
          //   key={url}
          //   url={url}
          //   title={title}
          //   description={description}
          //   width={width}
          //   height={height}
          // />
          <SwiperSlide
            key={url}
            style={{
              width: `${imageWidth(sliderHeight, width, height)}px`,
              height: `${sliderHeight}px`,
              backgroundColor: 'orange',
            }}
          >
            <CarouselImage
              url={url}
              title={title}
              description={description}
              width={imageWidth(sliderHeight, width, height)}
              height={sliderHeight}
            />
          </SwiperSlide>
        ))}
      </Carousel> */}
      <PageHeading heading={title} />
      <ContentContainer>
        <LeadText text={excerpt} />
      </ContentContainer>
    </>
  );
};

export default ReferenceDetailPage;

export const getStaticPaths = async () => {
  const {
    referenceCollection: { items },
  } = await fetchReferencePaths();
  console.log(items);

  const paths = items?.map((item) => ({
    params: {
      slug: item.slug,
    },
  }));

  return { paths, fallback: false };
};

export const getStaticProps = async ({ params }: { params: any }) => {
  const item = await getReferenceBySlug(params.slug);
  console.log(item);

  return { props: item };
};
