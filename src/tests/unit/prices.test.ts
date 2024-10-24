import { describe, expect, it } from '@jest/globals';

import { Product } from '~/products-api';
import { formatPrice, getProductPrice } from '~utils/prices';

const productFixture: Product = {
    id: 1,
    slug: 'shoe',
    name: 'Shoe',
    description: 'A shoe',
    price: 100,
    imageSrc: 'shoe.webp',
};

describe('Product prices', () => {
    it('calculates product price correctly', () => {
        const price = getProductPrice(productFixture, 1);

        expect(price.basePrice).toBe(100);
        expect(price.discount).toBe(0);
        expect(price.totalPrice).toBe(121);
        expect(price.totalVat).toBe(21);
    });

    it('calculates total vat price correctly for 2 products', () => {
        const price = getProductPrice(productFixture, 2);

        expect(price.basePrice).toBe(100);
        expect(price.discount).toBe(0);
        expect(price.totalPrice).toBe(242);
        expect(price.totalVat).toBe(42);
    });

    it('applies discount for quantity greater than 3', () => {
        const price = getProductPrice(productFixture, 4);

        expect(price.basePrice).toBe(100);
        expect(price.discount).toBe(10);
        expect(price.totalPrice).toBe(471.9);
        expect(price.totalVat).toBe(81.9);
    });

    it('formats price correctly', () => {
        const price = formatPrice(100);

        expect(price).toBe('$100.00');
    });
});
