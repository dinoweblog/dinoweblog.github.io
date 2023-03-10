import { KeyboardDoubleArrowRight } from "@mui/icons-material";
import {
  Box,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import { primary } from "../../app/index";
import ResumeBtn from "../button/ResumeBtn";
import { navItems } from "./constant";
import HashLink from "./HashLink";
import HireMeBtn from "./HireMeBtn";

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
        <Typography variant="h3" sx={{ my: 2 }}>
          DKS
        </Typography>
        <Divider style={{ color: "red" }} />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            mt: 2,
            mb: 4,
          }}
        >
          {navItems.map((item) => (
            <HashLink item={item} />
          ))}
        </Box>
        <ResumeBtn endIcon={<KeyboardDoubleArrowRight />}>Resume</ResumeBtn>
      </Box>
    </Drawer>
  );
};

export default DrawerAppBar;
