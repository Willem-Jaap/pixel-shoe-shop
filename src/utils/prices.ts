import { Product } from '~/products-api';

interface ProductPrice {
    basePrice: number;
    discount: number;
    vat: number;
    totalPrice: number;
}

const getProductPrice = (product: Product, quantity: number): ProductPrice => {
    const basePrice = product.price;
    const vat = product.price * 0.21;
    const discount = quantity > 3 ? 10 : 0;
    const totalPrice = basePrice * quantity - discount + vat;

    return { basePrice, discount, vat, totalPrice };
};

const formatPrice = (price: number) => {
    return price.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD',
    });
};

export { getProductPrice, formatPrice };
