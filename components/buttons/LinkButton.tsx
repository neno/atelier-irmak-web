import clsxm from '@lib/clsxm';
import Link from 'next/link';
import React, { FC, ReactNode } from 'react';

interface ILinkButtonProps {
  children: ReactNode;
  path: string;
}

export const LinkButton: FC<ILinkButtonProps> = ({ children, path }) => {
  return (
    <Link href={path}>
      <a
        className={clsxm(
          'inline-block relative px-4 py-2 font-medium bg-primary text-white',
          'hover:bg-primary-light'
        )}
      >
        {children}
      </a>
    </Link>
  );
};
