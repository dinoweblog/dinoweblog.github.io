import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const TextButton = ({ children, style, onClick, to }) => {
  const navigate = useNavigate();
  return (
    <Button
      onClick={() => {
        to ? navigate(to) : onClick();
      }}
      variant="text"
      sx={{
        color: (theme) => theme.palette.secondary.main,
        "&:hover": {
          bgcolor: "transparent",
          color: "#fff",
        },
        p: 0,
        fontSize: 18,
        ...style,
      }}
    >
      {children}
    </Button>
  );
};

export default TextButton;
