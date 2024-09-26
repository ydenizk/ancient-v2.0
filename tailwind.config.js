/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      flex: {
        '2': '2 2 0%',
        '3': '3 3 0%',
      },
      fontFamily: {
        caveat: ["caveat"],
        montserrat: ["Montserrat"," sans-serif"],
        roboto: ["Roboto"," sans-serif"],
        nunito: ["Nunito"," sans-serif"],
       
      },
      backgroundImage: {
        "back": "url('/background.jpg')",
        "bg2": "url('/2.jpg')",
      
      },
      colors: {
        softBlack: "rgb(41,41,41)",
        blackk: "rgb(30,30,30)",
        black2: "rgb(24,24,24)",
        bgcolorLight: "rgb(229,229,229)",
        bgcolor: "rgb(239,239,239)",
        bgcolor2: "rgb(255,255,255)",
     
      },
    },
    screens: {
      'xs': '480px',
      "xss":"540px",
      'sm': '640px',
      'ssm': '675px', // Default Tailwind breakpoint
      'md': '768px', // Default Tailwind breakpoint
      'mmd': '860px',
      'lg': '1024px', // Default Tailwind breakpoint
      'xl': '1280px', // Default Tailwind breakpoint
      '2xl': '1536px',

  
    },
  },
  plugins: [],
  darkMode:"class",
};
