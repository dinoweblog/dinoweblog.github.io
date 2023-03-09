import { Box } from "@mui/material";
import { secondary } from "../../app/index";

const BlockWrapper = ({ children, style, sx }) => {
  return (
    <Box sx={{ bgcolor: secondary, ...sx }}>
      <Box sx={{ width: "80%", m: "auto", pt: 15, pb: 15, ...style }}>
        {children}
      </Box>
    </Box>
  );
};

export default BlockWrapper;
