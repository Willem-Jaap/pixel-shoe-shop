/**
 * Fake API for fetching products
 */

interface Product {
    id: number;
    slug: string;
    name: string;
    description: string;
    price: number;
    imageSrc: string;
}

const products: Product[] = [
    {
        id: 1,
        slug: 'classic-runner',
        name: 'Classic Runner',
        description:
            ' Experience unparalleled comfort and style with our Classic Comfort Running Shoes. Designed for both performance and everyday wear, these shoes feature advanced cushioning, breathable materials, and a sleek design that transitions seamlessly from your morning run to casual outings.',
        price: 89.99,
        imageSrc: 'classic.webp',
    },
    {
        id: 2,
        slug: 'trail-explorer',
        name: 'Trail Explorer',
        description:
            'Conquer the great outdoors with our Trail Explorer Hiking Shoes. These rugged shoes are built to withstand the toughest terrains while providing superior support and comfort. Whether you’re hiking through the mountains or exploring local trails, the Trail Explorer Hiking Shoes are your go-to choice for adventure.',
        price: 129.99,
        imageSrc: 'trail.webp',
    },
    {
        id: 3,
        slug: 'urban-sprinter',
        name: 'Urban Sprinter',
        description:
            'Stay ahead of the pack with our Urban Sprinter Track Shoes. Designed for speed and agility, these lightweight shoes feature a breathable mesh upper, cushioned insole, and durable rubber outsole. Whether you’re training for a marathon or just running laps around the track, the Urban Sprinter Track Shoes are the perfect choice for all your running needs.',
        price: 99.99,
        imageSrc: 'urban.webp',
    },
    {
        id: 4,
        slug: 'comfort-walker',
        name: 'Comfort Walker',
        description:
            'Take on the day in style with our Comfort Walker Casual Shoes. These versatile shoes are perfect for everyday wear, with a classic design that pairs well with any outfit. Whether you’re running errands or meeting friends for lunch, the Comfort Walker Casual Shoes are the perfect choice for all-day comfort.',
        price: 79.99,
        imageSrc: 'comfort.webp',
    },
    {
        id: 5,
        slug: 'marathon-pro',
        name: 'Marathon Pro',
        description:
            'Go the distance with our Marathon Pro Running Shoes. These high-performance shoes are designed for serious runners, with advanced cushioning, support, and durability to help you reach your full potential. Whether you’re training for a marathon or just enjoy a daily run, the Marathon Pro Running Shoes are the perfect choice for all your running needs.',
        price: 159.99,
        imageSrc: 'marathon.webp',
    },
    {
        id: 6,
        slug: 'gym-trainer',
        name: 'Gym Trainer',
        description:
            'Get the most out of your workout with our Gym Trainer Fitness Shoes. These versatile shoes are perfect for all types of training, with a lightweight design, cushioned insole, and durable outsole for maximum performance. Whether you’re hitting the gym, going for a run, or taking a fitness class, the Gym Trainer Fitness Shoes are the perfect choice for all your fitness needs.',
        price: 69.99,
        imageSrc: 'gym.webp',
    },
];

const getProduct = async (slug: string): Promise<Product | undefined> => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(products.find(product => product.slug === slug));
        }, 100);
    });
};

const getProducts = async (): Promise<Product[]> => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(products);
        }, 100);
    });
};

export type { Product };
export { getProduct, getProducts };
