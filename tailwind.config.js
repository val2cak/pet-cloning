/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    backgroundSize: {
      auto: 'auto',
      cover: 'cover',
      contain: 'contain',
      50: '50px',
      16: '4rem',
    },
    screens: {
      sm: { max: '767px' },
      // => @media (min-width: 640px and max-width: 767px) { ... }

      md: { min: '768px', max: '1023px' },
      // => @media (min-width: 768px and max-width: 1023px) { ... }

      lg: { min: '1024px', max: '1279px' },
      // => @media (min-width: 1024px and max-width: 1279px) { ... }

      xl: { min: '1280px', max: '1535px' },
      // => @media (min-width: 1280px and max-width: 1535px) { ... }

      '2xl': { min: '1536px' },
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },

      colors: {
        primary: '#06A8B9',
        secondary: '#DDBEA9',
        light: '#F8F9FA',
        dark: '#2D4047',
        darker: '#212529',
        red: '#F21B3F',
      },
      backgroundImage: () => ({
        homeCover: "url('/images/home-cover.png')",
        cloningGuideCover: "url('/images/cloning-guide-cover.png')",
        qACover: "url('/images/qa-cover.png')",
        contactUsCover: "url('/images/contact-us-cover.png')",
        homeCoverMobile: "url('/images/home-cover-mobile.png')",
        cloningGuideCoverMobile:
          "url('/images/cloning-guide-cover-mobile.png')",
        qACoverMobile: "url('/images/qa-cover-mobile.png')",
        contactUsCoverMobile: "url('/images/contact-us-cover-mobile.png')",
        homeSection4: "url('/images/home-section-4.png')",
        homeSection4Mobile: "url('/images/home-section-4-mobile.png')",
        scienceProcess: "url('/images/science-process.png')",
        scienceProcessMobile: "url('/images/science-process-mobile.png')",
        aboutUsCover: "url('/images/about-us-cover.png')",
        aboutUsCoverMobile: "url('/images/about-us-cover-mobile.png')",
      }),
      lineHeight: {
        3: '1.2rem',
        4: '1.6rem',
        5: '2.0rem',
        6: '2.4rem',
        7: '2.8rem',
        8: '3.2rem',
        9: '3.6rem',
        10: '4.0rem',
      },
      fontSize: {
        xs: ['12px'],
        sm: ['16px'],
        base: ['20px'],
        md: ['24px'],
        lg: ['32px'],
        xl: ['36px'],
      },
      borderWidth: {
        default: '1px',
        0: '0',
        2: '2px',
        3: '3px',
        4: '4px',
        6: '6px',
        8: '8px',
        50: '50px',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
