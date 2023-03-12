import { Box } from "@mui/material";

const Logo = () => {
  return (
    <Box sx={{ maxWidth: 170 }}>
      <Box
        component="img"
        src="./logo.png"
        sx={{ width: { xs: "80%", sm: "100%" } }}
      />
    </Box>
  );
};

export default Logo;
