import { Box, Link } from "@mui/material";
import { primary } from "../app/index";
import { socialIcon } from "./constant";

const socialMedia = ({ style, sx }) => {
  return (
    <Box sx={sx}>
      {socialIcon.map((i) => (
        <Link
          key={i.url}
          sx={{
            border: "1px solid #ffffff",
            minWidth: { xs: 35, sm: 45, md: 60 },
            minHeight: { xs: 35, sm: 45, md: 60 },
            borderRadius: "50%",
            position: "absolute",
            bgcolor: primary,
            color: "#ffffff",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 20,
            fontSize: { xs: 14, sm: 16, md: 20 },
            transition: "all .5s ease",
            ...i.style,
            "&:hover": {
              bgcolor: "#ffffff",
              "& .MuiSvgIcon-root": {
                color: primary,
              },
            },
            ...style,
          }}
          href={i.url}
          target="_blank"
        >
          {i.icon}
        </Link>
      ))}
    </Box>
  );
};

export default socialMedia;
