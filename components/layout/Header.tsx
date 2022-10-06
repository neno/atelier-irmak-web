import { Logo } from '@components/logo/Logo';
import { Nav } from '@components/nav/Nav';
import Link from 'next/link';
import { FC } from 'react';

export const Header: FC = () => {
  return (
    <div className='container mx-auto px-4 py-2 text-primary-dark bg-white flex items-center justify-between'>
      <Link href='/'>
        <a>
          <Logo />
        </a>
      </Link>
      <Nav />
    </div>
  );
};
