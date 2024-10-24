import { describe, expect, it } from '@jest/globals';

import { Product } from '~/products-api';
import CartService from '~/services/cart-service';

describe('CartService', () => {
    let cartService: CartService;

    beforeEach(() => {
        cartService = new CartService();
    });

    it('should add a product to the cart', () => {
        const product = {
            id: 1,
            name: 'Product 1',
            slug: 'product-1',
            imageSrc: 'product-1.webp',
            description: 'Description 1',
            price: 100,
            discount: 10,
        };
        cartService.addProduct(product, 2);

        expect(cartService.cart.lines).toHaveLength(1);
        expect(cartService.cart.lines[0].productId).toBe(1);
        expect(cartService.cart.lines[0].quantity).toBe(2);
        expect(cartService.cart.lines[0].basePrice).toBe(100);
        expect(cartService.cart.lines[0].discount).toBe(0);
        expect(cartService.cart.lines[0].totalPrice).toBe(242);
        expect(cartService.cart.lines[0].totalVat).toBe(42);
    });

    it('should increase the quantity of a product if it is already in the cart', () => {
        const product: Product = {
            id: 1,
            name: 'Product 1',
            slug: 'product-1',
            imageSrc: 'product-1.webp',
            description: 'Description 1',
            price: 100,
        };
        cartService.addProduct(product, 2);
        cartService.addProduct(product, 3);

        expect(cartService.cart.lines).toHaveLength(1);
        expect(cartService.cart.lines[0].quantity).toBe(5);
        expect(cartService.cart.lines[0].basePrice).toBe(100);
        expect(cartService.cart.lines[0].discount).toBe(10);
        expect(cartService.cart.lines[0].totalPrice).toBe(592.9);
        expect(cartService.cart.lines[0].totalVat).toBe(102.9);
    });

    it('should add a customer to the cart', () => {
        const customer = {
            name: 'John Doe',
            email: 'john-doe@gmail.com',
            discountPercentage: 10,
            address: '123 Main St',
        };
        cartService.setCustomerInfo(customer);

        expect(cartService.cart.customer.name).toBe('John Doe');
        expect(cartService.cart.customer.discountPercentage).toBe(10);
        expect(cartService.cart.customer.address).toBe('123 Main St');
    });

    it('should remove a product from the cart', () => {
        cartService.addProduct(
            {
                id: 1,
                name: 'Product 1',
                slug: 'product-1',
                imageSrc: 'product-1.webp',
                description: 'Description 1',
                price: 100,
            },
            2,
        );
        cartService.addProduct(
            {
                id: 2,
                name: 'Product 2',
                slug: 'product-2',
                description: 'Description 2',
                imageSrc: 'product-2.webp',
                price: 200,
            },
            3,
        );

        cartService.removeProduct(1);

        expect(cartService.cart.lines).toHaveLength(1);
        expect(cartService.cart.lines[0].productId).toBe(2);
        expect(cartService.generateOrderSummary().totalPrice).toBe(726);
    });

    it('should get the total price of the cart with multiple items', () => {
        cartService.addProduct(
            {
                id: 1,
                name: 'Product 1',
                slug: 'product-1',
                imageSrc: 'product-1.webp',
                description: 'Description 1',
                price: 100,
            },
            2,
        );
        cartService.addProduct(
            {
                id: 2,
                name: 'Product 2',
                slug: 'product-2',
                description: 'Description 2',
                imageSrc: 'product-2.webp',
                price: 200,
            },
            3,
        );

        expect(cartService.getTotalPrice()).toBe(968);
    });

    it('should get the total price of the cart with a discount', () => {
        cartService.addProduct(
            {
                id: 1,
                name: 'Product 1',
                slug: 'product-1',
                imageSrc: 'product-1.webp',
                description: 'Description 1',
                price: 100,
            },
            2,
        );
        cartService.addProduct(
            {
                id: 2,
                name: 'Product 2',
                slug: 'product-2',
                description: 'Description 2',
                imageSrc: 'product-2.webp',
                price: 200,
            },
            4,
        );

        expect(cartService.getTotalPrice()).toBe(1197.9);
    });

    it('should get the total VAT of the cart', () => {
        cartService.addProduct(
            {
                id: 1,
                name: 'Product 1',
                slug: 'product-1',
                imageSrc: 'product-1.webp',
                description: 'Description 1',
                price: 100,
            },
            2,
        );
        cartService.addProduct(
            {
                id: 2,
                name: 'Product 2',
                slug: 'product-2',
                description: 'Description 2',
                imageSrc: 'product-2.webp',
                price: 200,
            },
            3,
        );

        expect(cartService.getTotalVat()).toBe(168);
    });
});
