import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";
import { Footer, GoToTopBtn, AppBar } from "./components";

const AppLayout = () => {
  return (
    <Box>
      <AppBar />
      <Box>
        <Outlet />
      </Box>
      <Footer />
      <GoToTopBtn />
    </Box>
  );
};

export default AppLayout;
