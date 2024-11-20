import type { Config } from "tailwindcss";
import { transform } from "typescript";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        'mobile':"500px",
        'tablet': '850px',
        'desktop': '1024px',
        'largeDesktop': '1440px'
      },
      colors: {
        transparentArrowColor:"rgba(189, 195, 199,.4)",
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      keyframes: {
        fadeRightImageCarousel: {
          '0%': {  backgroundPosition: 'left center' },
          '100%': { backgroundPosition: 'center' },
        },
        fadeLeftImageCarousel: {
          '0%': {  backgroundPosition: 'right center' },
          '100%': { backgroundPosition: 'center' },
        },
        fadeRightDivCarousel: {
          '0%': { opacity: '0', transform: 'translateX(5%)' },
          '100%': { opacity: '1',transform: 'translateX(0%)'},
        },fadeLeftDivCarousel: {
          '0%': {  opacity: '0',transform: 'translateX(-5%)' },
          '100%': { opacity: '1',transform: 'translateX(0%)' },
        },
        fadeMobileCarosuel:{
          '0%': { opacity: '0' },
          '100%': { opacity: '1'},
        }
      },
      animation: {
        'fadeRightImageCarousel': 'fadeRightImageCarousel 300ms linear  ',
        'fadeRightDivCarousel': 'fadeRightDivCarousel 300ms linear  ',
        'fadeLeftDivCarousel': 'fadeLeftDivCarousel 300ms linear  ',
        'fadeLeftImageCarousel': 'fadeLeftImageCarousel 300ms linear  ',
        "fadeMobileCarosuel":'fadeMobileCarosuel 300ms linear  '
      }
    },
  },
  plugins: [],
} satisfies Config;
