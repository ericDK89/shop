import Slider from '@/app/components/Slider';
import {JSX} from 'react';

export type ProductResponse = {
    id: string,
    isActive: boolean,
    description: string,
    images: string[],
    name: string,
    price: string
}

/**
 *import image from 'next/image';
 Renders the Home component.
 * @return {JSX.Element} The rendered Home component.
 */
export default async function Home(): Promise<JSX.Element> {
  const res = await fetch('http://localhost:3000/api/stripe/list-products', {
    next: {
      revalidate: 60 * 60 * 24 * 15,
      tags: ['products'],
    },
  });

  if (!res.ok) {
    return <p>{res.status} | {res.statusText}</p>;
  }

  const data: ProductResponse[] = await res.json();

  return (
    <main
      className='
        flex
        max-w-[calc(100vw-((100vw-1180px)/2))]
        min-h-[656px]
        ml-auto
        '
    >
      <Slider products={data} />
    </main>
  );
}
