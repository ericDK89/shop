import {brl} from '@/utils/currency';
import Image from 'next/image';
import Link from 'next/link';
import {JSX} from 'react';

type ProductProps = {
    name: string,
    price: string,
    images: string[]
}

/**
 * Renders a product component.
 *
 * @param {ProductProps} props - The props for the component.
 * @return {JSX.Element} The rendered component.
 */
export default function Product({
  images,
  name,
  price,
}: ProductProps): JSX.Element {
  return (
    <Link href="#" className='
      bg-gradient-to-t
      from-greenGradient
      to-purpleGradient
      rounded-lg
      relative
      flex
      items-center
      justify-center
      overflow-hidden
      group
      keen-slider__slide
      '
    >
      <Image
        src={images[0]}
        alt='camiseta'
        width={520}
        height={480}
        quality={100}
        style={{objectFit: 'cover'}}
      />

      <footer className='
        absolute
        bottom-1
        left-1
        right-1
        rounded-md
        flex
        items-center
        justify-between
        bg-opacity-60
        bg-black p-8
        translate-y-full
        transition
        ease-in-out
        delay-150
        opacity-0
        group-hover:translate-y-0
        group-hover:opacity-100
        '
      >
        <strong className='text-lg'>{name} </strong>
        <span className='text-xl font-bold text-green-300'>
          {brl(price)}
        </span>
      </footer>
    </Link>
  );
}
