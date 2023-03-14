import { Box, Typography } from "@mui/material";
import GitHubCalendar from "react-github-calendar";
import { RxPause } from "../../../app/index";

const GithubStats = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 5,
        justifyContent: "center",
        alignItems: "center",
        mt: 15,
      }}
    >
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
        <RxPause /> {`Github`}
      </Typography>

      <Box
        sx={{ maxWidth: { xs: "90%", sm: "50%" } }}
        component="img"
        src={`https://github-stats-alpha.vercel.app/api?username=dinoweblog&cc=252734&tc=fff&ic=fff&bc=2a2c39`}
      />
      <GitHubCalendar
        username="dinoweblog"
        style={{ color: "#fff", width: "90%", svg: { width: "90%" } }}
      />
    </Box>
  );
};

export default GithubStats;
