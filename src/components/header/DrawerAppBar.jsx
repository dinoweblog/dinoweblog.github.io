import { KeyboardDoubleArrowRight } from "@mui/icons-material";
import { Box, Divider, Drawer } from "@mui/material";
import { primary } from "../../app/index";
import ResumeBtn from "../button/ResumeBtn";
import { navItems } from "./constant";
import HashLink from "./HashLink";
import Logo from "./Logo";

const DrawerAppBar = ({ handleDrawerToggle, open }) => {
  return (
    <Drawer
      open={open}
      onClose={handleDrawerToggle}
      ModalProps={{
        keepMounted: true,
      }}
      sx={{
        display: { sm: "block", md: "none" },
        "& .MuiDrawer-paper": {
          boxSizing: "border-box",
          width: { xs: "60%", sm: "40%" },
          bgcolor: primary,
        },
      }}
    >
      <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
        <Box sx={{ my: 2, display: "flex", justifyContent: "center" }}>
          {/* <Logo /> */}
        </Box>
        <Divider style={{ color: "red" }} />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: 2,
            mt: 2,
            mb: 4,
            px: 4,
          }}
        >
          {navItems.map((item) => (
            <HashLink key={item} item={item} />
          ))}
        </Box>
        {/* <ResumeBtn endIcon={<KeyboardDoubleArrowRight />}>Resume</ResumeBtn> */}
      </Box>
    </Drawer>
  );
};

export default DrawerAppBar;
