'use client';

import {ProductResponse} from '@/app/(pages)/(home)/page';
import 'keen-slider/keen-slider.min.css';
import {useKeenSlider} from 'keen-slider/react';
import {JSX} from 'react';
import Product from '../Product';

type SliderProps = {
    products: ProductResponse[]
}

/**
 * Slider component.
 *
 * @param {SliderProps} props - The props for the Slider component.
 * @return {JSX.Element} The rendered Slider component.
 */
export default function Slider({products}: SliderProps): JSX.Element {
  const [slider] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48,
    },
  });

  return (
    <div className="keen-slider" ref={slider}>
      {products.map((product) => {
        return (
          <Product
            key={product.id}
            images={product.images}
            name={product.name}
            price={product.price}
          />
        );
      })}
    </div>
  );
}
