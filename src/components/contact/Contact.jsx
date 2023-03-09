import { Box, Typography } from "@mui/material";
import ContactDetails from "./ContactDetails";
import { RxPause } from "../../app/index";

const Contact = () => {
  return (
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
      <Box flex={2} sx={{ p: { xs: 0, sm: 0, md: 10 } }}>
        <Typography
          variant="body1"
          sx={{
            color: (theme) => theme.palette.secondary.main,
            letterSpacing: 2,
            display: "flex",
            alignItems: "center",
            gap: 2,
          }}
        >
          <RxPause /> {`Get In Touch`}
        </Typography>
        <Typography variant="h1" mt={4}>
          If you have any porject or need help. Contact me
        </Typography>
      </Box>
      <ContactDetails
        sx={{ display: { xs: "block", sm: "block", md: "none" } }}
      />
    </Box>
  );
};

export default Contact;
