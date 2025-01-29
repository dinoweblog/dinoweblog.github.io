import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "./App.css";
import "./components/animation/animation.css";
import ThemeProvider from "./app/uiCore/theme/ThemeProvider";
import AppRoutes from "./Routes";

function App() {
  return (
    <>
      <ThemeProvider>
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </ThemeProvider>
      <ToastContainer />
    </>
  );
}

export default App;
