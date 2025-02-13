/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './src/**/**/**/**/**/*.jsx',
        './src/**/**/**/**/*.jsx',
        './src/**/**/**/*.jsx',
        './src/**/**/*.jsx',
        './src/**/*.jsx',
        './index.html',
    ],
    theme: {
        extend: {
            fontFamily: {
                montserrat: ['Montserrat', 'sans-serif'],
                poppins: ['Poppins', 'sans-serif'],
                nunito: ['Nunito Sans', 'sans-serif'],
                moondance: ['Moon Dance', 'cursive'],
            },
            colors: {
                primary: {
                    50: '#f7f7f8',
                    100: '#eeeef0',
                    200: '#dadadd',
                    300: '#b9bac0',
                    400: '#93949d',
                    500: '#767681',
                    600: '#606169',
                    700: '#4e4e56',
                    800: '#434349',
                    900: '#3b3c3f',
                    950: '#19191b',
                },
                secondary: {
                    50: '#ffffff',
                    100: '#efefef',
                    200: '#dcdcdc',
                    300: '#bdbdbd',
                    400: '#989898',
                    500: '#7c7c7c',
                    600: '#656565',
                    700: '#525252',
                    800: '#464646',
                    900: '#3d3d3d',
                    950: '#292929',
                },
                accent: {
                    50: '#fffee7',
                    100: '#fffdc1',
                    200: '#fff786',
                    300: '#ffeb41',
                    400: '#ffda0d',
                    500: '#ffca00',
                    600: '#d19300',
                    700: '#a66902',
                    800: '#89520a',
                    900: '#74430f',
                    950: '#442204',
                },
            },
        },
        keyframes: {},
        animation: {},
    },
    plugins: [],
};
