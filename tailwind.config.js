/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Satoshi-Variable"],
    },
    extend: {
      colors: {
        gray: "rgb(133, 134, 148)",
        jobBackground: "rgb(230, 234, 242)",
        cityColor: "rgb(0, 2, 24)",
        posibilityBackground: " rgb(230, 227, 242)",
        titleColor: "rgb(152, 138, 202)",
        titleDescription: "#858694",
        navBorder: "#E4E7EC",
        footerChildText: "#858593",
        footerBorder: "rgba(255, 255, 255, 0.16);",
        footerSubtitle: "rgb(133, 133, 147)",
        footerItems: "rgb(230, 234, 242)",
        footerBackground: "#000218",
        menuButtonBackground: "rgb(231, 235, 242)",
        overLaybg: "rgba(0, 0, 0, 0.8)",
        bodyBg: "rgb(247, 251, 254)",
        menuItems: "0002187A",
      },
      backgroundImage: {
        "ready-background": "url('/src/assets/images/ready-background.webp')",
        "pricing-background":"url('/src/assets/images/pricing-background.webp')",
      },
    },
    container: {
      center: true,
      screens: {
        xs: "375px",
        sm: "640px",
        md: "768px",
        lg: "1080px",
        xl: "1280px",
        "2xl": "1360px",
      },
    },
  },
  plugins: [],
};
