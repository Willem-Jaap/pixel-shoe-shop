import { type PropsWithChildren } from 'react';
import { type Metadata } from 'next';
import { Albert_Sans } from 'next/font/google';

import '~styles/global.css';

import { env } from '~/env';
import Header from '~components/header';

const AlbertSansFont = Albert_Sans({
    subsets: ['latin'],
});

const RootLayout = ({ children }: PropsWithChildren) => {
    return (
        <html className={AlbertSansFont.className}>
            <body>
                <div className="flex min-h-screen flex-col">
                    <Header />
                    {children}
                    <footer className="bg-gray-100">
                        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
                            <p className="text-center text-base text-gray-500">
                                © 2024 Pixel Shoes, Willem-Jaap. All rights reserved.
                            </p>
                        </div>
                    </footer>
                </div>
            </body>
        </html>
    );
};

export const metadata: Metadata = {
    metadataBase: new URL(env.APP_URL as string),
    title: {
        template: '%s - Pixel Shoes',
        default: 'Pixel Shoes - Run Faster, Go Further',
    },
    openGraph: {
        url: new URL(env.APP_URL as string),
        title: 'Pixel Shoes - Perfect Shoes for Your Feet',
        siteName: 'Pixel Shoes',
        locale: 'en_US',
    },
};

export default RootLayout;
