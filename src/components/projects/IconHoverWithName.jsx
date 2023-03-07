import { Box, Typography } from "@mui/material";
import { useState } from "react";
import { IconContext } from "react-icons";

const IconHoverWithName = ({ icon }) => {
  const [show, setShow] = useState(null);

  const handleOver = () => {
    setShow(icon.name);
  };

  const handleLeave = () => {
    setShow(null);
  };

  return (
    <IconContext.Provider value={{ size: 35 }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          position: "relative",
          color: (theme) => theme.palette.secondary.main,
        }}
      >
        <Typography onMouseOver={handleOver} onMouseLeave={handleLeave}>
          {icon.logo}
        </Typography>
        {show === icon.name ? (
          <Typography
            variant="body2"
            sx={{
              position: "absolute",
              bottom: -15,
            }}
          >
            {icon.name}
          </Typography>
        ) : null}
      </Box>
    </IconContext.Provider>
  );
};

export default IconHoverWithName;
