import { Button } from "@mui/material";
import { secondary } from "../../app/uiCore/themeColor";

const CustomButton = ({ style, icon, children, onClick }) => {
  return (
    <Button
      onClick={onClick}
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
