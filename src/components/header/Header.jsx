import { AppBar, Box, Toolbar } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import { KeyboardDoubleArrowRight, Menu } from "@mui/icons-material";
import DrawerAppBar from "./DrawerAppBar";
import { useState } from "react";
import { navItems } from "./constant";
import ResumeBtn from "../button/ResumeBtn";
import HashLink from "./HashLink";
import { useScrollDirection } from "./useScrollDirection";
import { primary, secondaryText } from "../../app/index";

const Header = () => {
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
          height: { xs: "75px", sm: "100px" },
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
                  top: scrollDirection < 4 ? 0 : -180,
                },
          p: 0,
        }}
      >
        <Toolbar
          sx={{
            width: "85%",
            m: "auto",
            display: "flex",
            justifyContent: "space-between",
            p: 0,
          }}
        >
          {/* <Logo /> */}
          <Box sx={{ display: { sm: "flex", xs: "flex", md: "none" } }}>
            <ResumeBtn
              style={{
                height: "44px",
                px: 3,
              }}
              endIcon={<KeyboardDoubleArrowRight />}
            >
              Resume
            </ResumeBtn>
          </Box>
          <IconButton
            color="inherit"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ display: { md: "none" }, color: "#fff" }}
          >
            <Menu />
          </IconButton>
          <Box
            sx={{
              display: { xs: "none", sm: "none", md: "flex", gap: 30 },
              "& a:hover": {
                color: `${secondaryText} !important`,
              },
            }}
          >
            {navItems.map((item) => (
              <HashLink key={item} item={item} />
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
