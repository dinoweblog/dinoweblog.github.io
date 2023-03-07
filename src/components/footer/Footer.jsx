import { Box, Divider, Typography } from "@mui/material";
import { primary } from "../../app/uiCore/themeColor";
import { RxPause, BsTelephoneFill, FiMail } from "../../app/index";
import CircleBorder from "../../design/CircleBorder2";
import IconButton from "./IconButton";
import SocialMedia from "../../design/SocialMedia";
import Logo from "../header/Logo";

const style = {
  position: "absolute",
  width: "400px",
  height: "400px",
  top: -200,
};

const Footer = () => {
  return (
    <Box sx={{ bgcolor: primary, position: "relative", overflow: "hidden" }}>
      <Box
        sx={{
          width: "90%",
          m: "auto",
          pt: 15,
          pb: 10,
        }}
      >
        <Box sx={{ mb: 10, textAlign: "center" }}>
          <Typography
            variant="body1"
            sx={{
              color: (theme) => theme.palette.secondary.main,
              letterSpacing: 2,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 2,
            }}
          >
            <RxPause /> {` Contact Me`}
          </Typography>
          <Typography variant="h1" mt={4}>
            Reach Out To Me
          </Typography>
        </Box>

        <Box
          sx={{
            ...style,
            left: -200,
          }}
        >
          <CircleBorder style={{ p: 6 }} />
        </Box>
        <Box
          sx={{
            ...style,
            right: -200,
          }}
        >
          <CircleBorder style={{ p: 6 }} />
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: {
              xs: "column",
              sm: "column",
              md: "column",
              lg: "row",
            },
            justifyContent: "space-between",
            alignItems: "center",
            gap: 4,
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "column", md: "row" },
              justifyContent: "space-between",
              width: { xs: "100%", sm: "100%", md: "100%", lg: "auto" },
              gap: 3,
            }}
          >
            <IconButton
              icon={<BsTelephoneFill />}
              isIcon
              href="tel:+918863021199"
            >
              +918863021199
            </IconButton>

            <IconButton
              icon={<FiMail />}
              isIcon
              href="mailto:dinoweblog@gmail.com"
            >
              dinoweblog@gmail.com
            </IconButton>
          </Box>
          <SocialMedia
            style={{
              position: "static",
              borderColor: "#3b3d49",
              fontSize: { xs: 16 },
              minWidth: { xs: 45, sm: 45, md: 60 },
              minHeight: { xs: 45, sm: 45, md: 60 },
            }}
            sx={{
              display: "flex",
              gap: { xs: 4, md: 2, lg: 4 },
              width: "100%",
              justifyContent: { sm: "start", lg: "end" },
            }}
          />
        </Box>
      </Box>
      <Divider color="#3b3d49" />
      <Box
        sx={{
          width: "90%",
          m: "auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          pt: 2,
          pb: 2,
        }}
      >
        <Typography variant="body2">
          © 2023 | Created By Dinesh Sharma
        </Typography>
        <Logo />
      </Box>
    </Box>
  );
};

export default Footer;
