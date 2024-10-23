'use client';

import { useEffect, useState } from 'react';
import { Minus, Plus, ShoppingBasketIcon, ShoppingCart } from 'lucide-react';
import { toast } from 'sonner';

import { Product } from '~/products-api';
import { Button } from '~components/ui/button';
import { Label } from '~components/ui/label';
import { RadioGroup, RadioGroupItem } from '~components/ui/radio-group';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '~components/ui/select';
import cn from '~utils/cn';
import { formatPrice, getProductPrice } from '~utils/prices';

interface Props {
    product: Product;
}

const ProductDetails = ({ product }: Props) => {
    const [quantity, setQuantity] = useState(1);
    const [color, setColor] = useState('white');
    const [totalPrice, setTotalPrice] = useState(getProductPrice(product, 1).totalPrice);
    const [discount, setDiscount] = useState(getProductPrice(product, 1).discount);

    const decreaseQuantity = () => setQuantity(prev => Math.max(1, prev - 1));
    const increaseQuantity = () => setQuantity(prev => prev + 1);

    useEffect(() => {
        const { vat, discount, totalPrice } = getProductPrice(product, quantity);
        setTotalPrice(totalPrice);
        setDiscount(discount);
    }, [quantity]);

    const handleColorChange = (color: string) => {
        setColor(color);
    };

    const handleAddToCart = () => {
        const AddedToCart = () => (
            <div
                className="flex w-[22rem] items-center gap-4 rounded-md border border-neutral-300 bg-white p-4 pr-8 shadow-lg"
                data-testid="product-added-to-cart">
                <img
                    src={`/assets/images/${product.imageSrc}`}
                    alt={product.name}
                    className="h-16 w-16 rounded-md object-contain"
                />
                <div className="flex-1">
                    <p className="text-sm font-medium text-gray-900">
                        {product.name} x{quantity}
                    </p>
                    <p className="text-sm font-medium text-gray-900">{formatPrice(totalPrice)}</p>
                </div>
                <ShoppingBasketIcon className="h-6 w-6 text-gray-900" />
            </div>
        );

        toast.custom(() => <AddedToCart />, {
            duration: 10000,
        });
    };

    return (
        <div className="mt-6">
            <h3 className="text-sm text-gray-600">Color</h3>
            <RadioGroup defaultValue="white" className="mt-2" onValueChange={handleColorChange}>
                <div className="flex items-center space-x-3">
                    <Label
                        className={cn(
                            'flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border border-gray-300 bg-white',
                            {
                                'ring-2 ring-indigo-500 ring-offset-2': color === 'white',
                            },
                        )}>
                        <RadioGroupItem value="white" id="color-white" className="sr-only" />
                    </Label>
                    <Label
                        className={cn(
                            'flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-gray-900',
                            {
                                'ring-2 ring-indigo-500 ring-offset-2': color === 'black',
                            },
                        )}>
                        <RadioGroupItem value="black" id="color-black" className="sr-only" />
                    </Label>
                    <Label
                        className={cn(
                            'flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-indigo-500',
                            {
                                'ring-2 ring-indigo-500 ring-offset-2': color === 'indigo',
                            },
                        )}>
                        <RadioGroupItem value="indigo" id="color-indigo" className="sr-only" />
                    </Label>
                </div>
            </RadioGroup>

            <div className="mt-8">
                <div className="flex items-center justify-between">
                    <h3 className="text-sm text-gray-600">Size</h3>
                    <a
                        href="#"
                        className="text-sm font-medium text-indigo-600 hover:text-indigo-500">
                        Size guide
                    </a>
                </div>
                <Select>
                    <SelectTrigger className="mt-2 w-full">
                        <SelectValue placeholder="Select a size" id="size" />
                    </SelectTrigger>
                    <SelectContent>
                        {[7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11].map(size => (
                            <SelectItem key={size} value={size.toString()} id={`size-${size}`}>
                                {size}
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>
            </div>

            <div className="mt-8">
                <div className="flex items-center justify-between">
                    <h3 className="text-sm text-gray-600">Quantity</h3>
                </div>
                <div className="mt-2 flex items-center">
                    <Button
                        variant="outline"
                        size="icon"
                        onClick={decreaseQuantity}
                        disabled={quantity === 1}
                        data-testid="product-decrease">
                        <Minus className="h-4 w-4" />
                    </Button>
                    <span className="mx-4 text-gray-900" data-testid="product-quantity">
                        {quantity}
                    </span>
                    <Button
                        variant="outline"
                        size="icon"
                        onClick={increaseQuantity}
                        data-testid="product-increase">
                        <Plus className="h-4 w-4" />
                    </Button>
                </div>
            </div>

            {discount > 0 && (
                <div className="mt-4 rounded-md bg-green-50 p-4" data-testid="product-discount">
                    <p className="font-medium text-green-700">
                        You save ${discount.toFixed(2)} with this order!
                    </p>
                </div>
            )}

            <div className="mt-8">
                <div className="flex items-center justify-between">
                    <h3 className="text-lg font-medium text-gray-900">Total Price</h3>
                    <p className="text-lg font-medium text-gray-900">${totalPrice.toFixed(2)}</p>
                </div>
                {quantity > 3 && (
                    <p className="mt-1 text-sm text-gray-500">
                        Includes $10 discount for ordering more than 3 items
                    </p>
                )}
            </div>

            <Button
                className="mt-8 w-full"
                size="lg"
                onClick={handleAddToCart}
                data-testid="product-add-to-cart">
                <ShoppingCart className="mr-2 h-5 w-5" /> Add to cart
            </Button>
        </div>
    );
};

export default ProductDetails;
