import { Box, Link, Typography } from "@mui/material";
import { primary, RxPause, secondary } from "../../app/index";
import useRedirect from "../../components/useRedirect/useRedirect";

const PageWrapper = ({ children }) => {
  return (
    <Box>
      <Box
        sx={{
          bgcolor: primary,
          minHeight: 450,
          width: "100%",
          pt: 20,
          textAlign: "center",
        }}
      >
        <Typography variant="h1">About Us</Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            p: 3,
            bgcolor: secondary,
            m: "auto",
            color: "#fff",
            gap: 1,
            maxWidth: 250,
            borderRadius: 35,
            justifyContent: "center",
            mt: 5,
          }}
        >
          <Typography
            variant="h4"
            sx={{
              color: (theme) => theme.palette.secondary.main,
              cursor: "pointer",
            }}
          >
            Home
          </Typography>
          <RxPause />
          <Typography variant="h4">About</Typography>
        </Box>
      </Box>
      {children}
    </Box>
  );
};

export default PageWrapper;
