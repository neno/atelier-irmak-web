import React from 'react';
import { NextPage } from 'next';
import { fetchReferencePaths, getReferenceBySlug } from 'lib/api';

import { Carousel } from '@components/carousel';
import { PageHeading } from '@components/page-heading';
import { IReference } from 'types';
import { CarouselSlide } from '@components/carousel/CarouselSlide';
import { SwiperSlide } from 'swiper/react';
import CarouselImage from '@components/carousel/CarouselImage';
import { imageWidth, textWithLineBreak } from 'lib/helpers';
import { LeadText } from '@components/lead-text/LeadText';
import { ContentContainer } from '@components/content-container';
import { TeaserTopic } from '@components/teasers/TeaserTopic';
import { ReferencePageHeader } from '@components/reference-page-header/ReferencePageHeader';
import { RugDefList } from '@components/rug-def-list/RugDefList';
import Rug from '@components/rug/Rug';
import clsxm from '@lib/clsxm';
import { RichText } from '@components/rich-text';

const defList: Map<string, string> = new Map();
defList.set('name', 'Verneh Kelim');
defList.set('origin', 'Aserbaidschan');
defList.set('size', '200x170 cm');
defList.set('age', '1940 - 1950');
defList.set('location', 'Villa, Neuenburgersee');
defList.set('room', 'Schlafzimmer');
defList.set('placing', 'vor dem Bett');

const ReferenceDetailPage: NextPage<IReference> = ({
  title,
  subtitle,
  excerpt,
  body,
  description,
  definition,
  galleryItems,
}) => {
  const sliderHeight = 565;

  // return (
  //   <pre>
  //     {JSON.stringify(
  //       {
  //         title,
  //         subtitle,
  //         excerpt,
  //         body,
  //         definition,
  //         detailImage,
  //         galleryItems,
  //       },
  //       null,
  //       2
  //     )}
  //   </pre>
  // );

  return (
    <>
      <ReferencePageHeader
        heading={title}
        assets={galleryItems}
        definition={definition}
      />
      <ContentContainer>
        <div className='grid grid-cols-12'>
          <div className='col-start-3 col-end-11'>
            <LeadText text={excerpt} />
          </div>
        </div>

        <div className='grid grid-cols-12'>
          <h2
            className={clsxm(
              'col-start-3 col-end-11 py-12',
              'text-xl lg:text-5xl leading-normal lg:leading-tight'
            )}
          >
            {subtitle}
          </h2>
          <div className='col-start-3 col-end-9'>
            {description && <RichText content={description}></RichText>}
          </div>

          <p
            className={clsxm(
              'col-start-3 col-end-9',
              'text-xl lg:text-2xl leading-normal lg:leading-relaxed'
            )}
            dangerouslySetInnerHTML={{ __html: textWithLineBreak(body) }}
          ></p>
        </div>
      </ContentContainer>
    </>
  );
};

export default ReferenceDetailPage;

export const getStaticPaths = async () => {
  const {
    referenceCollection: { items },
  } = await fetchReferencePaths();
  // console.log(items);

  const paths = items?.map((item) => ({
    params: {
      slug: item.slug,
    },
  }));

  return { paths, fallback: false };
};

export const getStaticProps = async ({ params }: { params: any }) => {
  const reference = await getReferenceBySlug(params.slug);
  // console.log(item);

  return { props: reference };
};
