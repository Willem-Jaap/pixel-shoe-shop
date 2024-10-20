import { Product } from '~/products-api';
import { Button } from '~components/ui/button';
import { Card, CardContent, CardFooter } from '~components/ui/card';

const ProductCard = ({ name, slug, price, imageSrc }: Product) => {
    return (
        <Card data-testid="product-card">
            <CardContent className="p-4">
                <img
                    src={`/assets/images/${imageSrc}`}
                    alt={name}
                    className="h-48 w-full rounded-md object-contain"
                />
                <h3 className="mt-2 text-lg font-semibold text-gray-900">{name}</h3>
                <p className="mt-1 text-sm text-gray-500">${price.toFixed(2)}</p>
            </CardContent>
            <CardFooter>
                <Button
                    variant="primary"
                    className="w-full"
                    href={`/product/${slug}`}
                    data-testid="view-product">
                    View product
                </Button>
            </CardFooter>
        </Card>
    );
};

export default ProductCard;
