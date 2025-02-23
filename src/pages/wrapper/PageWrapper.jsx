import { Box, Typography } from "@mui/material";
import { useEffect } from "react";
import { primary, RxPause, secondary } from "../../app/index";
import CircleBorder from "../../design/CircleBorder2";
import TextButton from "./TextButton";

const style = {
  position: "absolute",
  width: "450px",
  height: "450px",
  display: { xs: "none", sm: "block" },
};

const PageWrapper = ({ children, pageTitle, page, sx }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pageTitle]);

  return (
    <Box>
      <Box
        sx={{
          bgcolor: primary,
          minHeight: { xs: 350, sm: 420 },
          width: "100%",
          pt: { xs: 15, sm: 15, md: 18 },
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
          ...sx,
        }}
      >
        <Typography variant="h1">{pageTitle}</Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            p: 3,
            bgcolor: secondary,
            m: "auto",
            color: (theme) => theme.palette.secondary.main,
            gap: 1,
            maxWidth: 260,
            borderRadius: 35,
            justifyContent: "center",
            mt: 5,
            cursor: "auto",
          }}
        >
          <TextButton to="/">Home</TextButton>
          <RxPause />
          <TextButton style={{ color: "#fff", cursor: "auto" }}>
            {page}
          </TextButton>
        </Box>

        <Box
          sx={{
            ...style,
            left: -200,
            top: -220,
          }}
        >
          <CircleBorder style={{ p: 6 }} />
        </Box>
        <Box
          sx={{
            ...style,
            right: -200,
            bottom: -220,
          }}
        >
          <CircleBorder style={{ p: 6 }} />
        </Box>
      </Box>
      {children}
    </Box>
  );
};

export default PageWrapper;
