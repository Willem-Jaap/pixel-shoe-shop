import { Menu, ShoppingCart } from 'lucide-react';
import Link from 'next/link';

import { Button } from '~components/ui/button';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '~components/ui/dropdown-menu';

const Header = () => {
    return (
        <header className="bg-white shadow-sm">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between py-4 md:justify-start md:space-x-10">
                    <div className="flex justify-start lg:w-0 lg:flex-1">
                        <Link href="/" className="flex items-center gap-4">
                            <span className="sr-only">Pixel Shoes</span>
                            <img
                                className="h-8 w-auto sm:h-8"
                                src="/assets/images/logo.png"
                                alt="ShoeCo Logo"
                            />
                            <span className="text-xl font-bold text-gray-900">Pixel Shoes</span>
                        </Link>
                    </div>
                    <div className="-my-2 -mr-2 md:hidden">
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="ghost" size="sm">
                                    <span className="sr-only">Open menu</span>
                                    <Menu className="h-6 w-6" aria-hidden="true" />
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                                <DropdownMenuItem>
                                    <Link href="/products">Products</Link>
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    <Link href="/about">About</Link>
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    <Link href="/contact">Contact</Link>
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                    <nav className="hidden space-x-10 md:flex">
                        <Link
                            href="/#products"
                            className="text-base font-medium text-gray-500 hover:text-gray-900">
                            Products
                        </Link>
                        <Link
                            href="/about"
                            className="text-base font-medium text-gray-500 hover:text-gray-900">
                            About
                        </Link>
                        <Link
                            href="/contact"
                            className="text-base font-medium text-gray-500 hover:text-gray-900">
                            Contact
                        </Link>
                    </nav>
                    <div className="hidden items-center justify-end md:flex md:flex-1 lg:w-0">
                        <Button variant="ghost" size="sm">
                            <ShoppingCart className="h-6 w-6" aria-hidden="true" />
                            <span className="ml-2">Cart (0)</span>
                        </Button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
