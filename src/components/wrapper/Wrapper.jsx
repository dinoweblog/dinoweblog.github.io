import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { RxPause } from "../../app/index";

const Wrapper = ({ color, style, page, title, children, textCenter, id }) => {
  return (
    <Box sx={{ bgcolor: color }} id={id}>
      <Box
        sx={{
          width: { xs: "90%", md: "80%" },
          m: "auto",
          pt: 15,
          pb: 15,
          ...style,
        }}
      >
        <Box sx={{ mb: 10 }}>
          <Typography
            variant="body1"
            sx={{
              color: (theme) => theme.palette.secondary.main,
              letterSpacing: 2,
              display: "flex",
              alignItems: "center",
              gap: 2,
              ...textCenter,
            }}
          >
            <RxPause /> {`${page}`}
          </Typography>
          <Typography variant="h1" mt={4}>
            {title}
          </Typography>
        </Box>

        {children}
      </Box>
    </Box>
  );
};

export default Wrapper;
