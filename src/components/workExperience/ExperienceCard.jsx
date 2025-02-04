import {
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import { FaRegHandPointRight } from "../../app/index";

const ExperienceCard = ({ data }) => {
  return (
    <Box>
      <Typography variant="h2">{data.position}</Typography>
      <Typography variant="h3">{data.comapny}</Typography>
      <Typography variant="body2">{data.date}</Typography>
      <Typography variant="body2">{data.description}</Typography>
      <Typography variant="body2" sx={{ mt: 2 }}>
        My Responsibility:
      </Typography>
      <List>
        {data.responsibility.map((text) => (
          <ListItem key={text} disablePadding>
            <ListItemIcon
              sx={{ color: (theme) => theme.palette.secondary.main }}
            >
              <FaRegHandPointRight />
            </ListItemIcon>
            <ListItemText
              primary={<Typography variant="body2">{text}</Typography>}
            />
          </ListItem>
        ))}
      </List>
      <Box sx={{ display: "flex", gap: 2 }}>
        <Typography variant="body2">
          <Typography component="span" variant="body2" sx={{ fontWeight: 600 }}>
            Tech Stack:
          </Typography>
          {` ${data.techStack}`}
        </Typography>
      </Box>
    </Box>
  );
};

export default ExperienceCard;
