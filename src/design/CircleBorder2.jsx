import { Box } from "@mui/material";

const commonStyle = {
  border: "1px solid #ffffff0d",
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
        height: "100%",
        zIndex: -1,
      }}
    >
      <Box
        sx={{
          ...commonStyle,
          p: 10,
          width: "100%",
          height: "100%",
          ...style,
        }}
      >
        <Box
          sx={{
            ...commonStyle,
            p: 9,
            ...style,
          }}
        >
          <Box
            sx={{
              ...commonStyle,
              p: 8,
              ...style,
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default CircleBorder;
