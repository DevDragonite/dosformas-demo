/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                burgundy: '#61000A',
                olive: '#6D7953',
                'green-light': '#C0DC81',
                'pink-soft': '#FFD4E0',
                'pink-active': '#D46989',
                cream: '#FFFBF8',
                'text-dark': '#1A1A1A',
                'text-mid': '#4A4A4A',
                'text-light': '#888888',
            },
            fontFamily: {
                display: ['"Museo Moderno"', 'serif'],
                body: ['"Be Vietnam Pro"', 'sans-serif'],
                accent: ['"Dancing Script"', 'cursive'],
            },
            borderRadius: {
                'xl': '24px',
                '2xl': '40px',
            },
            boxShadow: {
                'soft': '0 4px 24px rgba(97, 0, 10, 0.08)',
                'card': '0 8px 40px rgba(97, 0, 10, 0.12)',
                'hover': '0 16px 48px rgba(212, 105, 137, 0.25)',
            }
        },
    },
    plugins: [],
}
