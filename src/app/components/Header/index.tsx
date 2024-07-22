import {JSX} from 'react';
import logo from '@/assets/logo.webp';
import Image from 'next/image';

/**
 * Renders the header component.
 *
 * @return {JSX.Element} JSX element representing the header.
 */
export function Header(): JSX.Element {
  return (
    <header className='py-8 w-full max-w-7xl mx-auto'>
      <Image src={logo} alt='Shop' width={52} height={52} quality={1} />
    </header>
  );
}
