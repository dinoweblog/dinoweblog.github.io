// import {
//   Box,
//   List,
//   ListItem,
//   ListItemIcon,
//   ListItemText,
//   Typography,
// } from "@mui/material";
// import { FaRegHandPointRight } from "../../app/index";

// const ExperienceCard = ({ data }) => {
//   return (
//     <Box>
//       <Typography variant="h2">{data.position}</Typography>
//       <Typography variant="h3">{data.comapny}</Typography>
//       <Typography variant="body2">{data.date}</Typography>
//       <Typography variant="body2">{data.description}</Typography>
//       <Typography variant="body2" sx={{ mt: 2 }}>
//         My Responsibility:
//       </Typography>
//       <List>
//         {data.responsibility.map((text) => (
//           <ListItem key={text} disablePadding>
//             <ListItemIcon
//               sx={{ color: (theme) => theme.palette.secondary.main }}
//             >
//               <FaRegHandPointRight />
//             </ListItemIcon>
//             <ListItemText
//               primary={<Typography variant="body2">{text}</Typography>}
//             />
//           </ListItem>
//         ))}
//       </List>
//       <Box sx={{ display: "flex", gap: 2 }}>
//         <Typography variant="body2">
//           <Typography component="span" variant="body2" sx={{ fontWeight: 600 }}>
//             Tech Stack:
//           </Typography>
//           {` ${data.techStack}`}
//         </Typography>
//       </Box>
//     </Box>
//   );
// };

// export default ExperienceCard;

import React from "react";
import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { TbPointFilled } from "react-icons/tb";

const ExperienceCard = ({ data }) => {
  return (
    <Box>
      <Typography
        variant="h2"
        sx={{
          fontSize: { xs: "1.7rem", sm: "2rem", mb: "2.3rem" },
        }}
      >
        {data.position}
      </Typography>
      <Typography
        variant="h3"
        sx={{
          color: (theme) => theme.palette.secondary.main,
          fontSize: { xs: "1.2rem", sm: "1.5rem", mb: "2rem" },
          lineHeight: 1.5,
          mt: 1,
        }}
      >
        {data.comapny}
      </Typography>
      <Typography variant="body2" sx={{ mt: 1 }}>
        {data.description}
      </Typography>
      {data.roles.map((role, i) => (
        <Box key={i} mb={4}>
          {role.title && (
            <Typography variant="h3" sx={{ mt: 2 }}>
              {role.title}
            </Typography>
          )}
          <List>
            {role.points.map((text, j) => (
              <ListItem key={j} disablePadding>
                <ListItemIcon
                  sx={{ color: (theme) => theme.palette.secondary.main }}
                >
                  <TbPointFilled />
                </ListItemIcon>
                <ListItemText
                  primary={<Typography variant="body2">{text}</Typography>}
                />
              </ListItem>
            ))}
          </List>
        </Box>
      ))}
    </Box>
  );
};

export default ExperienceCard;
