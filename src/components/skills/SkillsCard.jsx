import {
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import { KeyboardDoubleArrowRight, Terminal } from "@mui/icons-material";
import { primary } from "../../app/uiCore/themeColor";
import { BsCodeSlash } from "../../app/index";
import CircleBorder from "../../design/CircleBorder2";

const d = [
  "React",
  "Redux",
  "JavaScript",
  "TypeScript",
  "Material-UI",
  "HTML/CSS",
  "Git",
];

const SkillsCard = ({ data }) => {
  return (
    <Box
      sx={{
        bgcolor: primary,
        p: "3rem",
        overflow: "hidden",
        position: "relative",
      }}
    >
      <BsCodeSlash style={{ fontSize: 80 }} />

      <Typography variant="h2" mt={3}>
        Development
      </Typography>

      <List
        sx={{
          width: "100%",
          color: (theme) => theme.palette.secondary.main,
          pt: 2,
        }}
      >
        {d.map((s) => (
          <ListItem sx={{ fontSize: "1rem", p: 0, pt: 0.5 }}>
            <ListItemIcon>
              <KeyboardDoubleArrowRight
                sx={{ color: (theme) => theme.palette.secondary.main }}
              />
            </ListItemIcon>
            <ListItemText
              primary={<Typography variant="body2">{s}</Typography>}
            />
          </ListItem>
        ))}
      </List>
      <Box
        sx={{
          position: "absolute",
          width: "400px",
          height: "400px",
          top: -220,
          right: -220,
        }}
      >
        <CircleBorder style={{ p: 6 }} />
      </Box>
      <Box
        sx={{
          position: "absolute",
          width: "400px",
          height: "400px",
          bottom: -220,
          right: -220,
        }}
      >
        <CircleBorder style={{ p: 6 }} />
      </Box>
    </Box>
  );
};

export default SkillsCard;
