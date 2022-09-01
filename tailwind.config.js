const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.vue',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Nunito', ...defaultTheme.fontFamily.sans],
            },
            colors: {
                'primary': '#e4c1f9',
                'secondary': '#a9def9',
                'tertiary': '#d0f4de',
                'quarternary': '#fcf6bd',
                'quinary': '#ff99c8'
            },
            backgroundColor: {
                'primary': '#e4c1f9',
                'secondary': '#a9def9',
                'tertiary': '#d0f4de',
                'quarternary': '#fcf6bd',
                'quinary': '#ff99c8'
            }
        },
    },

    plugins: [require('@tailwindcss/forms')],
};
