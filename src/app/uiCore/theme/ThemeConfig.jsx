const ThemeConfig = {
  palette: {
    primary: {
      main: "#fff",
    },
    secondary: {
      main: "#858792",
    },
    hover: {
      main: "#fff",
    },
  },
  typography: {
    fontFamily: [
      "Nunito",
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "Poppins",
      "sans-serif",
    ].join(","),
    fontSize: 16,
    h1: {
      fontSize: "3rem",
      fontWeight: 600,
      lineHeight: 1.25,
      letterSpacing: "0.15rem",
      color: "#fff",
      fontFamily: "Cormorant Garamond, serif",
    },
    h2: {
      fontWeight: 600,
      fontSize: { xs: "2rem", sm: "2rem", md: "2.2rem" },
      lineHeight: 1.25,
      letterSpacing: "0.0025em",
      color: "#fff",
    },
    h3: {
      fontSize: "1.5rem",
      lineHeight: 1.71,
      fontWeight: 700,
      color: "#fff",
    },
    h4: {
      fontWeight: 700,
      fontSize: "1.25rem",
      lineHeight: 1.25,
      letterSpacing: "0.0015em",
      color: "#fff",
    },
    h5: {
      fontSize: "1rem",
      fontWeight: 500,
      lineHeight: 1.25,
      letterSpacing: "0.002em",
    },
    h6: {
      fontWeight: 500,
      fontSize: "0.875rem",
      lineHeight: 1.285712,
      letterSpacing: "0.002em",
    },
    body1: {
      fontWeight: 400,
      fontSize: "1.5rem",
      lineHeight: 1.25,
      letterSpacing: "0.0025em",
    },
    body2: {
      fontWeight: 400,
      fontSize: "1.1rem",
      lineHeight: 1.5,
      letterSpacing: "0.005em",
      color: "#858792",
    },
    body3: {
      fontWeight: 400,
      fontSize: "1rem",
      letterSpacing: "0.0025em",
      lineHeight: 1.5,
    },
  },
};

export default ThemeConfig;
