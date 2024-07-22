'use server';

import {revalidateTag} from 'next/cache';

/**
 * This is the action function.
 */
export default async function action() {
  revalidateTag('products');
}
