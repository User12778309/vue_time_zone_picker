/** @type {import('tailwindcss').Config} */
const primeui = require('tailwindcss-primeui');

export default {
    content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
    plugins: [primeui]
};

module.export = 
{
    theme : 
    {
        extends :
        {
            fontFamily :
            {
                "cn" : "Courier New"
            }
        }
    }
}