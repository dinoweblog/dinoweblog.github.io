import { Box, Typography } from "@mui/material";
import { secondary } from "../../app/index";

const ServicesCard = ({ icon, text }) => {
  return (
    <Box
      sx={{
        pt: "70px",
        pb: "70px",
        border: "1px solid",
        borderColor: "#3b3d49",
        bgcolor: secondary,
        textAlign: "center",
        mb: 5,
      }}
    >
      <Typography variant="h3">{icon}</Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Typography
          variant="h4"
          sx={{ color: (theme) => theme.palette.secondary.main }}
        >
          {text.type}
        </Typography>
        <Typography variant="h3">{text.title}</Typography>
      </Box>
    </Box>
  );
};

export default ServicesCard;
