import { Link, Typography } from "@mui/material";
import { primary } from "../../app/index";
import { CustomButton } from "../button";

const IconButton = ({ icon, href, children, isIcon, onClick, to }) => {
  return (
    <Link
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 3,
        textDecoration: "none",
        "&:hover": {
          "& .MuiButton-root": {
            bgcolor: "#ffffff",
            color: primary,
          },
        },
      }}
      href={href}
    >
      <CustomButton
        onClick={onClick}
        to={to}
        endIcon={icon}
        style={{
          width: { xs: "2rem", sm: "4rem", md: "5rem" },
          height: { xs: "2rem", sm: "4rem", md: "5rem" },
          borderRadius: "50%",
          pl: 0,
          pr: 0,
          minWidth: 0,
          p: 3,
          "&:hover": {
            bgcolor: "#ffffff",
            color: primary,
          },
          "& .MuiButton-endIcon": {
            m: 0,
          },
        }}
      >
        {!isIcon ? children : null}
      </CustomButton>
      {children && isIcon ? (
        <Typography
          variant="h2"
          sx={{ fontWeight: 400, fontSize: { xs: "1.3rem", sm: "2rem" } }}
        >
          {children}
        </Typography>
      ) : null}
    </Link>
  );
};

export default IconButton;
