import { Button, CircularProgress } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { secondaryText } from "../../app/uiCore/themeColor";
import React from "react";

const CustomButton = ({
  style,
  endIcon,
  children,
  startIcon,
  onClick,
  to,
  href,
  type,
  disabled,
  isLoading,
}) => {
  const navigate = useNavigate();
  console.log("CustomButton -> isLoading", isLoading);
  return (
    <Button
      onClick={() => {
        to ? navigate(to) : onClick && onClick();
      }}
      sx={{
        border: "1px solid #3b3d49",
        borderColor: secondaryText,
        transition: "all .5s ease",
        pl: 5,
        pr: 5,
        height: "60px",
        borderRadius: "30px",
        bgcolor: secondaryText,
        "&:hover": {
          bgcolor: "transparent",
          color: "#ffffff",
          borderColor: secondaryText,
          "& .MuiSvgIcon-root": {
            color: "#ffffff",
            transition: "all .5s ease",
          },
        },
        fontSize: "16px",
        maxWidth: "240px",
        color: "#ffffff",
        ...style,
      }}
      endIcon={endIcon}
      startIcon={startIcon}
      href={href}
      type={type}
      target="_blank"
      disabled={disabled || isLoading}
      download
    >
      {isLoading ? <CircularProgress size={24} color="inherit" /> : children}
    </Button>
  );
};

export default CustomButton;
