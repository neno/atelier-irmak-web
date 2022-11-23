import Link from 'next/link';

export const Nav = () => {
  return (
    <nav className='invisible md:visible'>
      <ul className='list-none flex font-title text-lg lg:text-xl xl:text-2xl'>
        <li>
          <Link href='/kompetenzen'>
            <a className='py-4 pl-8'>Kompetenzen</a>
          </Link>
        </li>
        <li>
          <Link href='/referenzen'>
            <a className='py-4 pl-8'>Referenzen</a>
          </Link>
        </li>
        {/* <li>
          <Link href='/der-fliegende-teppich'>
            <a className='py-4 pl-8'>Der fliegende Teppich</a>
          </Link>
        </li> */}
        {/* <li>
          <Link href='/partner'>
            <a className='py-4 pl-8'>Partner</a>
          </Link>
        </li> */}
        <li>
          <Link href='/ueber-uns'>
            <a className='py-4 pl-8'>Über uns</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};
