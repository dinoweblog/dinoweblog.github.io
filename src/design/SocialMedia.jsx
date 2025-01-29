import { Box, Link } from "@mui/material";
import { primary, primaryText, secondaryText } from "../app/index";
import { socialIcon } from "./constant";

const socialMedia = ({ style, sx }) => {
  return (
    <Box sx={sx}>
      {socialIcon.map((i) => (
        <Link
          key={i.url}
          sx={{
            border: `1px solid ${primaryText}`,
            minWidth: { xs: 35, sm: 45, md: 60 },
            minHeight: { xs: 35, sm: 45, md: 60 },
            borderRadius: "50%",
            position: "absolute",
            bgcolor: primary,
            color: primaryText,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 20,
            fontSize: { xs: 14, sm: 16, md: 20 },
            transition: "all .5s ease",
            "& .MuiSvgIcon-root": {
              color: primaryText,
            },
            ...i.style,
            "&:hover": {
              bgcolor: secondaryText,
              borderColor: secondaryText,
              "& .MuiSvgIcon-root": {
                color: "#ffffff",
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
