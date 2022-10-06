import Link from 'next/link';
import React, { FC } from 'react';
import { LinkWrapperProps } from './LinkWrapper.types';

export const LinkWrapper: FC<LinkWrapperProps> = ({
  children,
  slug,
  category = 'referenzen',
}) => {
  return (
    <Link href={`/${category}/${slug}`}>
      <a>{children}</a>
    </Link>
  );
};
