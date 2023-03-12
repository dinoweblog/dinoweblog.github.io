import { Box, Typography } from "@mui/material";
import ContactDetails from "./ContactDetails";
import { RxPause, secondary } from "../../app/index";
import Wrapper from "../wrapper/Wrapper";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <Wrapper
      page="Contact Me"
      title="Contact Me"
      color={secondary}
      style={{ width: "80%" }}
      id="contact"
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "column", md: "row" },
          gap: { xs: 10, sm: 10, md: 5 },
        }}
      >
        <ContactDetails
          sx={{ display: { xs: "none", sm: "none", md: "block" } }}
        />
        <Box
          flex={2}
          sx={{ pt: { xs: 0, sm: 0, md: 10 }, pl: { xs: 0, sm: 0, md: 10 } }}
        >
          <Box sx={{ display: { xs: "none", sm: "none", md: "block" } }}>
            <Typography
              variant="body1"
              sx={{
                color: (theme) => theme.palette.secondary.main,
                letterSpacing: 2,
                alignItems: "center",
                gap: 2,
              }}
            >
              <RxPause /> {`Get In Touch`}
            </Typography>
            <Typography variant="h1" mt={4}>
              Send Me A Message
            </Typography>
          </Box>

          <ContactForm />
        </Box>
        <ContactDetails
          sx={{ display: { xs: "block", sm: "block", md: "none" } }}
        />
      </Box>
    </Wrapper>
  );
};

export default Contact;
