import { Route, Routes } from "react-router-dom";
import AppLayout from "./AppLayout";
import { HomePage, ProjectsPage } from "./pages";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<ProjectsPage />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
