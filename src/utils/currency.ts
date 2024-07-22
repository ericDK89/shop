/**
 * Converts the given price to Brazilian Real (BRL) currency format.
 * @param {string | number} price - The price to be converted.
 * @return {string} The price in BRL currency format.
 */
export function brl(price: string | number): string {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(Number(price));
}
