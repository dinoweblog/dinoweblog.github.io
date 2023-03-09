import { Box } from "@mui/material";
import { secondary } from "../app/index";
import { Contact, ProjectCard } from "../components";
import PageWrapper from "./wrapper/PageWrapper";

const ContactPage = () => {
  return (
    <PageWrapper pageTitle="Contact Me" page="Contact">
      <Box sx={{ bgcolor: secondary }}>
        <Box
          sx={{
            width: "80%",
            m: "auto",
            pt: 15,
            pb: 15,
          }}
        >
          <Contact />
        </Box>
      </Box>
    </PageWrapper>
  );
};

export default ContactPage;
