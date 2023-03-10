import { AppBar, Box, Button, Toolbar } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import { KeyboardDoubleArrowRight, Menu } from "@mui/icons-material";
import DrawerAppBar from "./DrawerAppBar";
import { useState } from "react";
import { navItems } from "./constant";
import Logo from "./Logo";
import { useLocation, useNavigate } from "react-router-dom";
import ResumeBtn from "../button/ResumeBtn";
import HashLink from "./HashLink";
import { useScrollDirection } from "./useScrollDirection";
import "./style.css";
import { primary } from "../../app/index";

const Header = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const scrollDirection = useScrollDirection();

  const handleDrawerToggle = () => {
    setOpen((prevState) => !prevState);
  };

  return (
    <Box>
      <AppBar
        component="nav"
        sx={{
          bgcolor: scrollDirection > 110 ? primary : "transparent",
          height: "100px",
          boxShadow: "0",
          transition: "all .5s ease",
          "&.MuiPaper-root":
            scrollDirection > 110
              ? {
                  position: "fixed",
                  top: 0,
                }
              : {
                  position: "absolute",
                  top: scrollDirection === 0 ? 0 : -180,
                },
        }}
      >
        <Toolbar
          sx={{
            width: "85%",
            m: "auto",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Logo />
          <IconButton
            color="inherit"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { md: "none" }, color: "#fff" }}
          >
            <Menu />
          </IconButton>
          <Box
            sx={{
              display: { xs: "none", sm: "none", md: "flex", gap: 30 },
            }}
          >
            {navItems.map((item) => (
              <HashLink item={item} />
            ))}
          </Box>
          <Box sx={{ display: { sm: "none", xs: "none", md: "flex" } }}>
            <ResumeBtn endIcon={<KeyboardDoubleArrowRight />}>Resume</ResumeBtn>
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <DrawerAppBar handleDrawerToggle={handleDrawerToggle} open={open} />
      </Box>
    </Box>
  );
};

export default Header;
