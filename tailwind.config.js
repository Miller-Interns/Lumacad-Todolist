/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,ts,vue}",
    "*.{html,js,ts,vue}"
  ],
  theme: {
    extend: {
      colors: {
        nice: {
          a: "#23DD33",
          b: "#1EBB2B",
          c: "#189923",
          d: "#13771B",
          e: "#0E5514",
        }
      }
    },
  },
  plugins: [],
}