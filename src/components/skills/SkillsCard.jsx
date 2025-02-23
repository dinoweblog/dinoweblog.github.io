import {
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import { primary, secondaryText } from "../../app/uiCore/themeColor";
import CircleBorder from "../../design/CircleBorder2";
import useIcon from "../../app/uiCore/useIcon";

const SkillsCard = ({ data }) => {
  const getIcon = useIcon();

  return (
    <Box
      sx={{
        bgcolor: primary,
        p: { xs: "2rem", sm: "2.5rem", md: "3rem" },
        overflow: "hidden",
        position: "relative",
        height: { xs: 790, sm: 790, md: 860 },
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)",
      }}
    >
      <Box>
        {getIcon(data?.icon, { fontSize: 80, color: secondaryText })}
        <Typography
          variant="h3"
          sx={{
            color: (theme) => theme.palette.secondary.main,
            fontWeight: 600,
            my: 1,
          }}
        >
          {data.subTitle}
        </Typography>
      </Box>

      <Typography
        variant="h2"
        sx={{
          color: "#fff",
          fontWeight: "bold",
          fontSize: { xs: "1.5rem", sm: "1.6rem", md: "2rem" },
        }}
      >
        {data.title}
      </Typography>

      <List
        sx={{
          width: "100%",
          color: (theme) => theme.palette.secondary.main,
          pt: 2,
        }}
      >
        {data?.skills.map((s) => (
          <ListItem
            key={s?.name}
            sx={{
              fontSize: "1rem",
              p: "6px",
              px: 1,
              borderRadius: "8px",
              transition: "background 0.3s ease",
              "&:hover": {
                backgroundColor: "rgba(135, 72, 229, 0.15)",
              },
              zIndex: 10,
            }}
          >
            <ListItemIcon sx={{ minWidth: "40px", color: "#e0e0e0" }}>
              {getIcon(s?.icon)}
            </ListItemIcon>
            <ListItemText
              primary={
                <Typography
                  variant="body2"
                  sx={{ color: "#e0e0e0", fontWeight: 500 }}
                >
                  {s?.name}
                </Typography>
              }
            />
          </ListItem>
        ))}
      </List>

      {/* Decorative Circle Borders */}
      <Box
        sx={{
          position: "absolute",
          width: "350px",
          height: "350px",
          top: -150,
          right: -150,
          opacity: 0.5,
        }}
      >
        <CircleBorder style={{ p: 6 }} />
      </Box>
      <Box
        sx={{
          position: "absolute",
          width: "350px",
          height: "350px",
          bottom: -150,
          left: -150,
          opacity: 0.5,
        }}
      >
        <CircleBorder style={{ p: 6 }} />
      </Box>
    </Box>
  );
};

export default SkillsCard;
