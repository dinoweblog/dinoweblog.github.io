import { BrowserRouter } from "react-router-dom";
import "./App.css";
import ThemeProvider from "./app/uiCore/theme/ThemeProvider";
import AppRoutes from "./Routes";

function App() {
  return (
    <>
      <ThemeProvider>
        <BrowserRouter basename={process.env.PUBLIC_URL}>
          <AppRoutes />
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;
