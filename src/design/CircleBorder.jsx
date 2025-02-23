import { Box } from "@mui/material";
import { primary } from "../app/uiCore/themeColor";

const commonStyle = {
  border: "1px solid #ffffff40",
  width: "100%",
  height: "100%",
  borderRadius: "50%",
  zIndex: -1,
};

const CircleBorder = ({ style }) => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "95%",
        zIndex: -1,
      }}
    >
      <Box
        sx={{
          ...commonStyle,
          borderColor: { xs: "#ffffff40", sm: primary, md: "#ffffff0d" },
          p: 7,
          width: "100%",
          height: "100%",
        }}
      >
        <Box
          sx={{
            ...commonStyle,
            borderColor: { xs: primary, sm: "#ffffff40" },
            p: 7,
          }}
        >
          <Box
            sx={{
              ...commonStyle,
              borderColor: { xs: primary, sm: primary, md: "#ffffff0d" },
              p: 7,
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default CircleBorder;
