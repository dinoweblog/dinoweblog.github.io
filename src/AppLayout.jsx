import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";
import { Footer, Header } from "./components";
import { AboutPage, HomePage } from "./pages";

const AppLayout = () => {
  return (
    <Box>
      <Header />
      <Box>
        <Outlet />
        {/* <HomePage /> */}
        <AboutPage />
      </Box>
      <Footer />
    </Box>
  );
};

export default AppLayout;
