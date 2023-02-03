/** @type {import('tailwindcss').Config} */
module.exports = {

    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {

        extend: {
colors : {

    'blue': "#1D2540",
    'grey': '#62676D',
    'gradient': 'linear-gradient(180deg, #464646 0%, #1D2540 100%)',
'gradient2' : 'background: radial-gradient(50% 50% at 50% 50%, #E0E8F1 0%, #BFCAD6 100%)'


}
        },
    

    },
    plugins: []

};
