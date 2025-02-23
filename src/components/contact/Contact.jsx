import { Box, Typography } from "@mui/material";
import ContactDetails from "./ContactDetails";
import { secondary } from "../../app/index";
import Wrapper from "../wrapper/Wrapper";
import ContactForm from "./ContactForm";
import AnimatedSection from "../animation";

const Contact = ({ aboutData }) => {
  return (
    <Wrapper
      page="Contact Me"
      title="Contact Me"
      color={secondary}
      id="contact"
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "column", md: "row" },
          gap: { xs: 10, sm: 10, md: 5 },
        }}
      >
        <AnimatedSection className="slide-up">
          <ContactDetails aboutData={aboutData} />
        </AnimatedSection>
        <AnimatedSection className="slide-down">
          <Box
            flex={2}
            sx={{ pt: { xs: 0, sm: 0, md: 10 }, pl: { xs: 0, sm: 0, md: 10 } }}
          >
            <Box>
              {/* <Typography
                variant="body1"
                sx={{
                  color: (theme) => theme.palette.secondary.main,
                  letterSpacing: 2,
                  alignItems: "center",
                  gap: 2,
                }}
              >
                <RxPause /> {`Get In Touch`}
              </Typography> */}
              <Typography variant="h1" mt={4} sx={{ fontSize: "20px" }}>
                Send Me A Message
              </Typography>
            </Box>

            <ContactForm />
          </Box>
        </AnimatedSection>
      </Box>
    </Wrapper>
  );
};

export default Contact;
