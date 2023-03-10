import { Box, Typography } from "@mui/material";
import { primary } from "../../../app/index";

const ContentCard = ({ data, children, date }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", sm: "column", md: "row" },
        gap: { xs: 5, sm: 5, md: 20, lg: 25 },
        mt: 8,
      }}
    >
      <Box
        flex={2}
        sx={{
          border: "1px solid",
          borderColor: { xs: "#3b3d49", sm: "#3b3d49", md: primary },
          pt: { xs: 3, sm: 3, md: 0 },
          pb: 3,
          pl: 3,
        }}
      >
        <Typography
          variant="body2"
          sx={{ borderRight: "1px solid #fff", pr: 5 }}
        >
          {data ? data.date : date}
        </Typography>
      </Box>
      {children ? (
        children
      ) : (
        <Box
          flex={6}
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 3,
          }}
        >
          <Typography variant="h2">
            {data?.degree}
            {data?.position}
          </Typography>
          <Typography variant="body2">
            {data?.university}
            {data?.company}
          </Typography>
          <Typography variant="body2">{data.details}</Typography>
          {data?.techStack ? (
            <Typography variant="body2">
              <Typography
                component="span"
                variant="body2"
                sx={{ fontWeight: 600 }}
              >
                Tech Stack:
              </Typography>
              {` ${data?.techStack}`}
            </Typography>
          ) : null}
        </Box>
      )}
    </Box>
  );
};

export default ContentCard;
