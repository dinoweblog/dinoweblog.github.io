import { Box, Skeleton } from "@mui/material";
import { secondary } from "../app/index";
import { ProjectCard } from "../components";
import PageWrapper from "./wrapper/PageWrapper";
import { useFirestoreCollection } from "../app/apis/useFirestore";

const ProjectsPage = () => {
  const {
    data: projectsData,
    loading,
    error,
  } = useFirestoreCollection(["projects", "projects"], ["createdAt", "desc"]);
  console.log("Firestore error: ", error);

  return (
    <PageWrapper pageTitle="Projects" page="Projects List">
      <Box sx={{ bgcolor: secondary, minHeight: "100vh" }}>
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
          {loading
            ? [1, 2, 3, 4, 5, 6].map((i) => (
                <Skeleton
                  key={i}
                  variant="rectangular"
                  sx={{
                    width: "100%",
                    height: { xs: 300, sm: 350, md: 400, lg: 550 },
                    maxHeight: { xs: 300, sm: 350, md: 400, lg: 550 },
                  }}
                />
              ))
            : projectsData.map((project) => (
                <ProjectCard key={project.title} data={project} />
              ))}
        </Box>
      </Box>
      <Box sx={{ bgcolor: secondary }}></Box>
    </PageWrapper>
  );
};

export default ProjectsPage;
