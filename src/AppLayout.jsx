import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";
import { Footer, Header } from "./components";

const AppLayout = () => {
  return (
    <Box>
      <Header />
      <Box>
        <Outlet />
      </Box>
      <Footer />
    </Box>
  );
};

export default AppLayout;
