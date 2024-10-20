import { getProducts } from '~/products-api';
import FeaturedProduct from '~components/featured-product';
import ProductCard from '~components/product-card';

const Page = async () => {
    const products = await getProducts();

    return (
        <>
            <main className="flex-grow">
                <FeaturedProduct />
                <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8" id="products">
                    <h2 className="mb-6 text-3xl font-extrabold text-gray-900">Our Products</h2>
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {products.map(product => (
                            <ProductCard key={product.id} {...product} />
                        ))}
                    </div>
                </div>
            </main>
        </>
    );
};

export default Page;
