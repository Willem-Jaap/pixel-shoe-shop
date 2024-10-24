import { Product } from '~/products-api';
import { getProductPrice } from '~utils/prices';

interface CartLine {
    productId: number;
    product: Product;
    quantity: number;
    basePrice: number;
    discount: number;
    totalPrice: number;
    totalVat: number;
}

interface Cart {
    lines: CartLine[];
    customer: {
        name: string;
        email: string;
        address: string;
        discountPercentage: number;
    };
}

// Cart service which implements the logic for adding products to the cart, calculating the total price, and generating the order summary
class CartService {
    public cart: Cart = {
        lines: [],
        customer: {
            name: '',
            email: '',
            address: '',
            discountPercentage: 0,
        },
    };

    /**
     * Add a product to the cart
     *
     * If the product is already in the cart, increase the quantity
     */
    addProduct(product: Product, quantity: number) {
        const line = this.cart.lines.find(line => line.productId === product.id);

        if (line) {
            line.quantity += quantity;
            const { basePrice, discount, totalPrice, totalVat } = getProductPrice(
                product,
                line.quantity,
            );

            line.basePrice = basePrice;
            line.discount = discount;
            line.totalPrice = totalPrice;
            line.totalVat = totalVat;
            return;
        }

        const { basePrice, discount, totalPrice, totalVat } = getProductPrice(product, quantity);
        this.cart.lines.push({
            productId: product.id,
            product,
            quantity,
            basePrice,
            discount,
            totalPrice,
            totalVat,
        });
    }

    /**
     * Remove a product from the cart by productId
     */
    removeProduct(productId: number) {
        this.cart.lines = this.cart.lines.filter(line => line.productId !== productId);
    }

    /**
     * Get the total price of the cart including VAT
     */
    getTotalPrice() {
        return this.cart.lines.reduce((total, line) => total + line.totalPrice, 0);
    }

    /**
     * Get the total VAT of the cart
     */
    getTotalVat() {
        return this.cart.lines.reduce((total, line) => total + line.totalVat, 0);
    }

    /**
     * Generate an order summary with the total price, total VAT, discount, and grand total
     */
    generateOrderSummary() {
        const totalPrice = this.getTotalPrice();
        const totalVat = this.getTotalVat();
        const discount = totalPrice * this.cart.customer.discountPercentage;
        const grandTotal = totalPrice - discount + totalVat;

        return {
            totalPrice,
            totalVat,
            discount,
            grandTotal,
        };
    }

    /**
     * Set customer information for the cart
     */
    setCustomerInfo(customer: Cart['customer']) {
        this.cart.customer = customer;
    }
}

export default CartService;
