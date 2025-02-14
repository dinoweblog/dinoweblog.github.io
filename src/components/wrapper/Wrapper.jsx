import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { RxPause } from "../../app/index";
import AnimatedSection from "../animation";

const Wrapper = ({ color, style, page, title, children, textCenter, id }) => {
  return (
    <Box sx={{ bgcolor: color }} id={id}>
      <Box
        sx={{
          width: { xs: "90%", md: "80%" },
          m: "auto",
          py: 10,
          pb: 10,
          ...style,
        }}
      >
        <AnimatedSection animation="slide-left">
          <Box sx={{ mb: 10 }}>
            <Typography
              variant="h1"
              sx={{
                // color: (theme) => theme.palette.secondary.main,
                letterSpacing: 2,
                display: "flex",
                alignItems: "center",
                gap: 2,
                ...textCenter,
              }}
            >
              <RxPause /> {`${title}`}
            </Typography>
            {/* <Typography variant="h1" mt={4}>
              {title}
            </Typography> */}
          </Box>
        </AnimatedSection>

        {children}
      </Box>
    </Box>
  );
};

export default Wrapper;
