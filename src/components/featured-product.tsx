import { ChevronRight } from 'lucide-react';

import { Button } from '~components/ui/button';

const FeaturedProduct = () => {
    return (
        <div className="relative bg-gray-900">
            <div className="relative h-80 overflow-hidden bg-white p-32 lg:absolute lg:inset-y-0 lg:right-0 lg:h-full lg:w-1/2">
                <img
                    className="h-full w-full object-contain"
                    src="/assets/images/classic.webp"
                    alt="Featured running shoes"
                />
            </div>
            <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
                <div className="lg:w-1/2 xl:pr-16">
                    <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
                        Run Faster, Go Further
                    </h1>
                    <p className="mt-4 text-xl text-gray-300">
                        Experience unparalleled comfort and performance with our latest running
                        shoes. Designed for both casual joggers and serious athletes.
                    </p>
                    <div className="mt-8">
                        <Button variant="primary" size="lg" className="inline-flex items-center">
                            Shop Now
                            <ChevronRight className="ml-2 h-5 w-5" />
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeaturedProduct;
