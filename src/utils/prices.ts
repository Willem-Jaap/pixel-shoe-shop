import { Product } from '~/products-api';

interface ProductPrice {
    basePrice: number;
    discount: number;
    totalPrice: number;
    totalVat: number;
}

const getProductPrice = (product: Product, quantity: number): ProductPrice => {
    const basePrice = product.price;
    const discount = quantity > 3 ? 10 : 0;
    const linePrice = basePrice * quantity - discount;
    const totalVat = linePrice * 0.21;
    const totalPrice = linePrice + totalVat;

    return {
        basePrice: Number(basePrice.toFixed(2)),
        discount: Number(discount.toFixed(2)),
        totalPrice: Number(totalPrice.toFixed(2)),
        totalVat: Number(totalVat.toFixed(2)),
    };
};

const formatPrice = (price: number) => {
    return Number(price).toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD',
    });
};

export { getProductPrice, formatPrice };
