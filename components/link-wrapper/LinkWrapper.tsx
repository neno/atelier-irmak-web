import Link from 'next/link';
import React, { FC } from 'react';
import { LinkWrapperProps } from './LinkWrapper.types';

export const LinkWrapper: FC<LinkWrapperProps> = ({ children, path }) => {
  return (
    <Link href={`${path}`}>
      <a>{children}</a>
    </Link>
  );
};
