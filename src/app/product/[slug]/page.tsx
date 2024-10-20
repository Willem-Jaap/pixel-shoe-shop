'use client';

import ProductDetails from './product-details';
import { Minus, Plus, ShoppingCart, Star } from 'lucide-react';
import { notFound } from 'next/navigation';

import { getProduct } from '~/products-api';
import Header from '~components/header';

interface Props {
    params: Promise<{ slug: string }>;
}

const Page = async ({ params }: Props) => {
    const segmentParams = await params;
    const product = await getProduct(segmentParams.slug);

    if (!product) {
        notFound();
    }

    return (
        <main className="flex-grow">
            <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
                <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
                    <div className="flex flex-col-reverse">
                        <div className="mx-auto mt-6 hidden w-full max-w-2xl sm:block lg:max-w-none">
                            <div className="grid grid-cols-4 gap-6">
                                {[...Array(4)].map((_, i) => (
                                    <div
                                        key={i}
                                        className="relative h-24 overflow-hidden rounded-md bg-gray-100 hover:opacity-75">
                                        <img
                                            src={`/assets/images/placeholder.svg`}
                                            alt={`Shoe thumbnail ${i + 1}`}
                                            className="h-full w-full object-cover object-center"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="aspect-w-1 aspect-h-1 w-full p-12">
                            <img
                                src={`/assets/images/${product.imageSrc}`}
                                alt="Main product image"
                                className="h-full w-full object-cover object-center sm:rounded-lg"
                            />
                        </div>
                    </div>

                    {/* Product info */}
                    <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
                        <h1 className="text-3xl font-extrabold tracking-tight text-gray-900">
                            Classic Comfort Running Shoes
                        </h1>
                        <div className="mt-3">
                            <h2 className="sr-only">Product information</h2>
                            <p className="text-3xl text-gray-900">$199.00</p>
                        </div>

                        {/* Reviews */}
                        <div className="mt-3">
                            <h3 className="sr-only">Reviews</h3>
                            <div className="flex items-center">
                                <div className="flex items-center">
                                    {[...Array(5)].map((_, i) => (
                                        <Star
                                            key={i}
                                            className="h-5 w-5 flex-shrink-0 text-yellow-400"
                                        />
                                    ))}
                                </div>
                                <p className="sr-only">5 out of 5 stars</p>
                                <a
                                    href="#"
                                    className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500">
                                    117 reviews
                                </a>
                            </div>
                        </div>

                        <div className="mt-6">
                            <h3 className="sr-only">Description</h3>
                            <p className="text-base text-gray-700">{product.description}</p>
                        </div>

                        <ProductDetails product={product} />
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Page;
