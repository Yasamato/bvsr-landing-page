import flowbite from "flowbite-react/tailwind";

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    flowbite.content(),
    "./app/**/*.{ts,tsx,js}",
    "./components/**/*.{ts,tsx,js}"
  ],
  theme: {
    extend: {
      fontFamily: ["Maven Pro", "sans-serif"]
    },
  },
  plugins: [
    flowbite.plugin()
  ],
}

export default config
