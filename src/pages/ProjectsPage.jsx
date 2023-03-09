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
            width: "80%",
            m: "auto",
            pt: 15,
            pb: 15,
            display: "grid",
            gridTemplateColumns: { xs: "100%", sm: "100%", md: "48% 48%" },
            justifyContent: "space-between",
          }}
        >
          {projectData.map((project) => (
            <ProjectCard sx={{ mb: 10 }} data={project} />
          ))}
        </Box>
      </Box>
      <Box sx={{ bgcolor: secondary }}></Box>
    </PageWrapper>
  );
};

export default ProjectsPage;
