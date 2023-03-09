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
  MuiButton: {
    styleOverrides: {
      root: {
        borderRadius: 20,
        boxShadow: "none",
        textTransform: "none",
        "&:hover": {
          boxShadow: "none",
        },
        "&:active": {
          boxShadow: "none",
        },
      },
      containedPrimary: {
        border: "1px solid #ED1B06",
        "&:hover": {
          backgroundColor: "#DA0800",
          border: "1px solid #DA0800",
        },
        "&:active": {
          backgroundColor: "#B12011",
          border: "1px solid #B12011",
        },
        "&.Mui-disabled": {
          border: "1px solid #ED1B06",
          backgroundColor: "rgba(237, 27, 6)",
          color: "rgba(255,255,255)",
          opacity: 0.5,
        },
      },
      containedSecondary: {
        border: "1px solid #EFEFEF",
        backgroundColor: "#f7f7f7",
        color: "#767676",
        "&:hover": {
          backgroundColor: "rgba(237, 27, 6, 0.3)",
          border: "1px solid #ED1B06",
          color: "#ED1B06",
        },
        "&:active": {
          backgroundColor: "rgba(198, 34, 18, 0.3)",
          border: "1px solid #B12011",
          color: "#B12011",
        },
        "&.Mui-disabled": {
          border: "1px solid #EFEFEF",
          backgroundColor: "rgba(239, 239, 239, 0.5)",
          color: "#767676",
          opacity: 0.5,
        },
      },
      textInherit: {
        "&:hover": {
          color: "#ED1B06",
          backgroundColor: "transparent",
        },
        "&:active": {
          backgroundColor: "transparent",
          color: "#B12011",
        },
        "&.Mui-disabled": {
          color: "#767676",
        },
      },
      sizeLarge: {
        padding: "5px 30px 2px",
      },
      sizeMedium: {
        padding: "3px 28px",
        fontSize: "0.875rem",
        lineHeight: 1.75,
      },
      sizeSmall: {
        padding: "3px 23px 1px",
        fontSize: "0.75rem",
        lineHeight: 1.4,
      },
    },
  },
};

export default ThemeConfig;
