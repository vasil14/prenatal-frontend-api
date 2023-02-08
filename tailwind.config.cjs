/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      primary: "#e72b6f",
      secondary: "#789A40",
      Azzurro: "#0080ff",
      Beige: "#cec4ab",
      Bianco: "#ffffff",
      Blu: "#1926da",
      Denim: "#7f97b5",
      Fantasia: "#ffffff",
      Giallo: "f7f024",
      Grigio: "#808080",
      Marrone: "#64410e",
      Neutrale: "#d4b578",
      Nero: "#000000",
      Non_definito: "transparent",
      Panna: "#ecefe1",
      Rosa: "#dd96bd",
      Rosso: "#e82121",
      Senza_colore: "#ffffff",
      Verde: "#06cb34",
    },
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
    },
  },
  plugins: [require("flowbite/plugin")],
};
