import { Route, Routes } from "react-router-dom";
import AppLayout from "./AppLayout";
import {
  AboutPage,
  ContactPage,
  HomePage,
  ProjectsPage,
  SkillsPage,
} from "./pages";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/skills" element={<SkillsPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
