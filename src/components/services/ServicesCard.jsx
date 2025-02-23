import { Box, Typography } from "@mui/material";
import { secondary } from "../../app/index";
import AnimatedSection from "../animation";

const ServicesCard = ({ text }) => {
  return (
    <AnimatedSection className="animate-scale-in-on-scroll">
      <Box
        sx={{
          pt: { xs: "40px", sm: "70px" },
          pb: { xs: "40px", sm: "70px" },
          border: "1px solid",
          borderColor: "#3b3d49",
          bgcolor: secondary,
          textAlign: "center",
          mb: 5,
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Typography
            variant="h2"
            sx={{ fontSize: { xs: "1.5rem", sm: "1.7rem", md: "1.8rem" } }}
          >
            {text.type}
          </Typography>
          <Typography
            variant="h4"
            sx={{ color: (theme) => theme.palette.secondary.main, mt: 1 }}
          >
            {text.title}
          </Typography>
        </Box>
      </Box>
    </AnimatedSection>
  );
};

export default ServicesCard;
