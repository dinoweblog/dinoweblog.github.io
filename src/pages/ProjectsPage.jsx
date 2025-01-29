import { Box } from "@mui/material";
import { secondary } from "../app/index";
import { ProjectCard } from "../components";
import { projectData } from "../components/projects/constant";
import PageWrapper from "./wrapper/PageWrapper";

const ProjectsPage = () => {
  return (
    <PageWrapper pageTitle="Projects" page="Projects List">
      <Box sx={{ bgcolor: secondary }}>
        <Box
          sx={{
            width: { xs: "85%", md: "85%", lg: "80%" },
            m: "auto",
            pt: 8,
            pb: 5,
            display: "grid",
            gridTemplateColumns: { xs: "100%", sm: "100%", md: "48% 48%" },
            justifyContent: "space-between",
          }}
        >
          {projectData.map((project) => (
            <ProjectCard key={project.title} sx={{ mb: 5 }} data={project} />
          ))}
        </Box>
      </Box>
      <Box sx={{ bgcolor: secondary }}></Box>
    </PageWrapper>
  );
};

export default ProjectsPage;
