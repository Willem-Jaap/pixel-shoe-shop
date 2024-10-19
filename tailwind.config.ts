import type { Config } from 'tailwindcss';
import tailwindCSSAnimate from 'tailwindcss-animate';

export default {
    content: ['./src/**/*'],
    theme: {
        extend: {},
    },
    plugins: [tailwindCSSAnimate],
} satisfies Config;
