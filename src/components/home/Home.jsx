import { Box, Skeleton } from "@mui/material";
import { primary } from "../../app/uiCore/themeColor";
import CircleBorder from "../../design/CircleBorder2";
import Info from "../../design/Info";
import ProfilePicWithIcon from "../../design/ProfilePicWithIcon";
import AnimatedSection from "../animation";

const Home = ({ aboutData, loading }) => {
  return (
    <Box
      sx={{
        pt: 16,
        bgcolor: primary,
        height: { xs: "auto", sm: "auto", md: "100vh" },
        overflow: "hidden",
        position: "relative",
        pb: { xs: 10, sm: 10, md: 0 },
      }}
    >
      <Box
        sx={{
          width: "100%",
          m: "auto",
          display: "flex",
          flexDirection: { xs: "column", sm: "column", md: "row" },
          mt: { xs: 4, sm: 4, md: 10 },
          boxSizing: "border-box",
        }}
      >
        <Box
          sx={{
            flex: {
              md: 1,
              lg: 1,
            },
            display: {
              xs: "none",
              sm: "none",
              md: "block",
            },
            pl: { md: "10%" },
            zIndex: "100 !important",
          }}
        >
          <AnimatedSection animation="slide-left">
            <Info aboutData={aboutData} isLoading={loading} />
          </AnimatedSection>
        </Box>

        <Box
          sx={{
            flex: {
              md: 2,
              lg: 1.3,
            },
            mr: { md: 1 },
            pr: { md: "5%" },
            display: "flex",
            justifyContent: { xs: "center", sm: "center", md: "end" },
          }}
        >
          <AnimatedSection animation="slide-right">
            {loading ? (
              <Skeleton
                variant="rectangular"
                sx={{
                  width: { xs: 300, md: 550 },
                  height: { xs: 381, md: 550 },
                  bgcolor: "grey.800",
                }}
              />
            ) : (
              <ProfilePicWithIcon />
            )}
          </AnimatedSection>
        </Box>

        <Box
          flex={1}
          sx={{ display: { xs: "block", sm: "block", md: "none" } }}
        >
          <AnimatedSection animation="slide-left">
            <Info aboutData={aboutData} isLoading={loading} />
          </AnimatedSection>
        </Box>
      </Box>
      <Box
        sx={{
          position: "absolute",
          top: -280,
          left: -240,
          width: "600px",
          height: "600px",
          display: { xs: "none", sm: "none", md: "block" },
        }}
      >
        <CircleBorder />
      </Box>
      <Box
        sx={{
          position: "absolute",
          width: "600px",
          height: "600px",
          bottom: -350,
          left: -240,
          display: { xs: "none", sm: "none", md: "block" },
        }}
      >
        <CircleBorder />
      </Box>
    </Box>
  );
};

export default Home;
