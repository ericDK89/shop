import {stripe} from '@/lib/stripe';
import Stripe from 'stripe';


/**
 * Get products from Stripe.
 * @return {Promise<Response>} The response containing the products.
 */
export async function GET(): Promise<Response> {
  try {
    const response = await stripe.products.list({
      expand: ['data.default_price'],
    });

    const products = response.data.map((product) => {
      const price = product.default_price as Stripe.Price;

      return {
        id: product.id,
        name: product.name,
        images: product.images,
        description: product.description,
        isActive: product.active,
        price: price.unit_amount! / 100,
      };
    });

    return Response.json(products, {status: 200});
  } catch (error: any) {
    console.error('Error: ', error);
    return Response.json({error: error.message}, {status: 500});
  }
}
