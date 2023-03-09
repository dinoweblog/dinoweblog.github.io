import { AppBar, Box, Button, Toolbar } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import { Menu } from "@mui/icons-material";
import DrawerAppBar from "./DrawerAppBar";
import { useState } from "react";
import { navItems } from "./constant";
import { primary } from "../../app/uiCore/themeColor";
import HireMeBtn from "./HireMeBtn";
import Logo from "./Logo";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const handleDrawerToggle = () => {
    setOpen((prevState) => !prevState);
  };

  const handleNavigate = (route) => {
    if (route === "home") {
      return navigate(`/`);
    }
    navigate(`/${route}`);
  };

  return (
    <Box>
      <AppBar
        component="nav"
        sx={{
          bgcolor: "transparent",
          height: "100px",
          boxShadow: "0",
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
          <Box sx={{ display: { xs: "none", sm: "none", md: "flex", gap: 8 } }}>
            {navItems.map((item) => (
              <Button
                key={item}
                sx={{
                  color: (theme) => theme.palette.secondary.main,
                  fontSize: 20,
                }}
                onClick={() => handleNavigate(item.toLowerCase())}
              >
                {item}
              </Button>
            ))}
          </Box>
          <HireMeBtn
            style={{ display: { sm: "none", xs: "none", md: "flex" } }}
          />
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <DrawerAppBar handleDrawerToggle={handleDrawerToggle} open={open} />
      </Box>
    </Box>
  );
};

export default Header;
