/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,ts,vue}",
    "*.{html,js,ts,vue}"
  ],
  theme: {
    extend: {
      colors: {
        nice: {
          a: "#850F8D",
          b: "#C738BD",
          c: "#E49BFF",
          d: "#3A1D3A",
          e: "#320637",
          f: "#D6A8D6"
        },
        
      }
    },
  },
  plugins: [],
}