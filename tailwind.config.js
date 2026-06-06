/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Elevated from true pure black to an ultra-deep charcoal for readability
        background: '#09090B', 
        // Elevated to create a distinct, clean separation from the background
        surface: '#141417', 
        // Highly saturated chartreuse for interactive states
        primary: '#CCFF00', 
        // Shifted from stark pure white to a softer, luminous off-white to reduce eye strain
        textPrimary: '#FAFAFA',
        // Lifted significantly from #888888 to clean, visible slate-gray
        textSecondary: '#bcbcc4',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], 
        display: ['Satoshi', 'Inter', 'sans-serif'],
      },
      animation: {
        'noise': 'noise 1s steps(2) infinite',
      },
      keyframes: {
        noise: {
          '0%': { transform: 'translate(0,0)' },
          '10%': { transform: 'translate(-5%,-5%)' },
          '20%': { transform: 'translate(-10%,5%)' },
          '30%': { transform: 'translate(5%,-10%)' },
          '40%': { transform: 'translate(-5%,15%)' },
          '50%': { transform: 'translate(-10%,5%)' },
          '60%': { transform: 'translate(15%,0)' },
          '70%': { transform: 'translate(0,10%)' },
          '80%': { transform: 'translate(-15%,0)' },
          '90%': { transform: 'translate(10%,5%)' },
          '100%': { transform: 'translate(5%,0)' },
        },
      },
    },
  },
  plugins: [],
}