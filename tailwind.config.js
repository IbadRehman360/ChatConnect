/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */

import defaultTheme from "tailwindcss/defaultTheme";

export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        fontFamily: {
            sans: ["Inter var", ...defaultTheme.fontFamily.sans],
        },
        extend: {
            screens: {
                "3xl": "2000px",
            },
        },
    },
};