/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors');

module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
            extend: {
                colors: {
                    prime: colors.green,
                    second: colors.white,
                    tColor: colors.slate,
                },
                fontFamily: {
                  sans: ['Comic Sans MS', 'Papyrus'],
                }
            }
    }
  }
  