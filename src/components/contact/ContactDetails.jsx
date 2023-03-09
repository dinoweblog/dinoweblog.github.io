import { Box, Typography } from "@mui/material";
import { primary, secondary } from "../../app/index";
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
    </Box>
  );
};

export default ContactDetails;
