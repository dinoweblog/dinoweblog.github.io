import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { secondary } from "../../app/uiCore/themeColor";

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
}) => {
  const navigate = useNavigate();

  return (
    <Button
      onClick={() => {
        to ? navigate(to) : onClick && onClick();
      }}
      sx={{
        border: "1px solid #3b3d49",
        transition: "all .5s ease",
        pl: 5,
        pr: 5,
        height: "60px",
        borderRadius: "30px",
        color: "#fff",
        "&:hover": {
          bgcolor: secondary,
        },
        fontSize: "16px",
        maxWidth: "240px",
        ...style,
      }}
      endIcon={endIcon}
      startIcon={startIcon}
      href={href}
      type={type}
      target="_blank"
      disabled={disabled}
      download
    >
      {children}
    </Button>
  );
};

export default CustomButton;
