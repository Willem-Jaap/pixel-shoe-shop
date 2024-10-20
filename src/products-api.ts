/**
 * Fake API for fetching products
 */

const products = [
    {
        id: 1,
        slug: 'classic-runner',
        name: 'Classic Runner',
        price: 89.99,
        imageSrc: 'classic.webp',
    },
    {
        id: 2,
        slug: 'trail-explorer',
        name: 'Trail Explorer',
        price: 129.99,
        imageSrc: 'trail.webp',
    },
    {
        id: 3,
        slug: 'urban-sprinter',
        name: 'Urban Sprinter',
        price: 99.99,
        imageSrc: 'urban.webp',
    },
    {
        id: 4,
        slug: 'comfort-walker',
        name: 'Comfort Walker',
        price: 79.99,
        imageSrc: 'comfort.webp',
    },
    {
        id: 5,
        slug: 'marathon-pro',
        name: 'Marathon Pro',
        price: 159.99,
        imageSrc: 'marathon.webp',
    },
    {
        id: 6,
        slug: 'gym-trainer',
        name: 'Gym Trainer',
        price: 69.99,
        imageSrc: 'gym.webp',
    },
];

const getProduct = async (slug: string) => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(products.find(product => product.slug === slug));
        }, 100);
    });
};

const getProducts = async () => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(products);
        }, 100);
    });
};
