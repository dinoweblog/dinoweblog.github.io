import "./App.css";
import ThemeProvider from "./app/uiCore/theme/ThemeProvider";
import AppLayout from "./AppLayout";

function App() {
  return (
    <>
      <ThemeProvider>
        <AppLayout />
      </ThemeProvider>
    </>
  );
}

export default App;
