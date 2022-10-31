module.exports = {
  mod: "jit",
  content: ["./src/**/*.{html,tsx,ts}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-desktop": "url(../images/image-hero-desktop.jpg)",
        "hero-mobile": "url(../images/image-hero-mobile.jpg)",
      },
      animation: {
        slide: "slide 0.5s ease-in forwards",
      },
      keyframes: {
        slide: {
          "0%": { transform: "translateY(-1000%)" },
          "100%": { transform: "translateY(40px)" },
        },
      },
      gridTemplateColumns: {
        "2col": "35px 1fr",
        "3col": "35px 2fr 1fr",
      },
    },
    colors: {
      white: "#fff",
      black: "hsl(0, 0%, 0%)",
      moderate: "hsl(176, 50%, 47%)",
      darkCyan: "hsl(176, 72%, 28%)",
      darkGray: "hsl(0, 0%, 48%)",
    },
    fontFamily: {
      main: ["Commissioner", "sans-serif"],
    },
  },
  variant: {},
  plugins: [],
};
