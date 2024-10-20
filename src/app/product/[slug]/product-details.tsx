import { useEffect, useState } from 'react';
import { Minus, Plus, ShoppingCart } from 'lucide-react';

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

interface Props {
    product: Product;
}

const ProductDetails = ({ product }: Props) => {
    const [quantity, setQuantity] = useState(1);
    const [totalPrice, setTotalPrice] = useState(199);
    const [discount, setDiscount] = useState(0);

    const basePrice = 199;

    const decreaseQuantity = () => setQuantity(prev => Math.max(1, prev - 1));
    const increaseQuantity = () => setQuantity(prev => prev + 1);

    useEffect(() => {
        const newDiscount = quantity > 3 ? 10 : 0;
        setDiscount(newDiscount);
        setTotalPrice(basePrice * quantity - newDiscount);
    }, [quantity]);

    return (
        <div className="mt-6">
            <div>
                <h3 className="text-sm text-gray-600">Color</h3>
                <RadioGroup defaultValue="white" className="mt-2">
                    <div className="flex items-center space-x-3">
                        <Label className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border border-gray-300 bg-white ring-2 ring-indigo-500 ring-offset-2">
                            <RadioGroupItem value="white" id="color-white" className="sr-only" />
                        </Label>
                        <Label className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-gray-900">
                            <RadioGroupItem value="black" id="color-black" className="sr-only" />
                        </Label>
                        <Label className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-indigo-500">
                            <RadioGroupItem value="indigo" id="color-indigo" className="sr-only" />
                        </Label>
                    </div>
                </RadioGroup>
            </div>

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
                        <SelectValue placeholder="Select a size" />
                    </SelectTrigger>
                    <SelectContent>
                        {[7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11].map(size => (
                            <SelectItem key={size} value={size.toString()}>
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
                        disabled={quantity === 1}>
                        <Minus className="h-4 w-4" />
                    </Button>
                    <span className="mx-4 text-gray-900">{quantity}</span>
                    <Button variant="outline" size="icon" onClick={increaseQuantity}>
                        <Plus className="h-4 w-4" />
                    </Button>
                </div>
            </div>

            {discount > 0 && (
                <div className="mt-4 rounded-md bg-green-50 p-4">
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

            <Button className="mt-8 w-full" size="lg">
                <ShoppingCart className="mr-2 h-5 w-5" /> Add to cart
            </Button>
        </div>
    );
};

export default ProductDetails;
