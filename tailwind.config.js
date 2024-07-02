/** @type {import('tailwindcss').Config} */
export default{
  content: ["./src/**/*.{html,js,ts,vue}",
    "*.{html,js,ts,vue}"
  ],
  theme: {
    extend: {
      colors:{
        pinya: "#FFF67E",
        sgreen: "#BFEA7C",
        mgreen: "#9BCF53",
        dgreen: "#416D19",
      }
    },
  },
  plugins: [],
}