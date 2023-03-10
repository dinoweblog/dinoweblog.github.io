import { Box, Button, IconButton, Typography } from "@mui/material";
import { primary, secondary, ImFilePdf } from "../../app/index";
import ResumeBtn from "../button/ResumeBtn";
import SocialIconRow from "../footer/SocialIconRow";
import { contactDetails } from "./constant";

const ContactDetails = ({ sx }) => {
  return (
    <Box flex={1} sx={sx}>
      <Box
        sx={{
          bgcolor: primary,
          p: 8,
          display: "flex",
          flexDirection: "column",
          gap: 5,
        }}
      >
        {contactDetails.map((item) => (
          <Box sx={{ bgcolor: secondary, p: 5 }}>
            <Typography variant="h4">{`${item.name}:`}</Typography>
            <Typography variant="body2" sx={{ mt: 2 }}>
              {item.value}
            </Typography>
          </Box>
        ))}
      </Box>
      <Box
        sx={{
          bgcolor: primary,
          p: 8,
          mt: 4,
        }}
      >
        <Typography variant="h2" sx={{ mb: 2 }}>
          Follow Me
        </Typography>
        <SocialIconRow
          sx={{ flexWrap: "wrap", justifyContent: "space-between", gap: 0 }}
        />
      </Box>
      <Box
        sx={{
          bgcolor: primary,
          p: 8,
          mt: 4,
        }}
      >
        <Typography variant="h2" sx={{ mb: 2 }}>
          Get Resume
        </Typography>

        <ResumeBtn
          startIcon={<ImFilePdf />}
          style={{ height: 30, p: 3, borderRadius: 0 }}
        >
          Download Resume
        </ResumeBtn>
      </Box>
    </Box>
  );
};

export default ContactDetails;
