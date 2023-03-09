import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { secondary } from "../../app/uiCore/themeColor";

const CustomButton = ({ style, icon, children, onClick, to }) => {
  const navigate = useNavigate();

  return (
    <Button
      onClick={() => {
        to ? navigate(to) : onClick();
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
      endIcon={icon}
    >
      {children}
    </Button>
  );
};

export default CustomButton;
