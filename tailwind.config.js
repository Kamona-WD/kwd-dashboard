import defaultTheme from 'tailwindcss/defaultTheme'
import forms from '@tailwindcss/forms'
import twPlugin from './plugins/tailwindcss'
import { addIconSelectors } from '@iconify/tailwind'

export default {
    darkMode: 'class',
    content: ['./src/**/*.{html,hbs,js}'],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Noto Sans', ...defaultTheme.fontFamily.sans],
            },
        },
    },
    plugins: [forms, addIconSelectors(['tabler']), twPlugin],
}
