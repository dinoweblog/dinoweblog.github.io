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
import { navItems } from "./constant";
import HireMeBtn from "./HireMeBtn";

const DrawerAppBar = ({ handleDrawerToggle, open }) => {
  return (
    <Drawer
      variant="temporary"
      open={open}
      onClose={handleDrawerToggle}
      ModalProps={{
        keepMounted: true, // Better open performance on mobile.
      }}
      sx={{
        display: { sm: "block", md: "none" },
        "& .MuiDrawer-paper": { boxSizing: "border-box", width: 200 },
        color: (theme) => theme.palette.primary.main,
      }}
    >
      <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
        <Typography
          variant="h3"
          sx={{ my: 2, color: (theme) => theme.palette.primary.main }}
        >
          DKS
        </Typography>
        <Divider />
        <List>
          {navItems.map((item) => (
            <ListItem key={item} disablePadding>
              <ListItemButton sx={{ textAlign: "center" }}>
                <ListItemText primary={item} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <HireMeBtn />
      </Box>
    </Drawer>
  );
};

export default DrawerAppBar;
