import { IconButton } from "@mui/material";
import { styled } from "@mui/material/styles";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import useIcon from "../../app/uiCore/useIcon";

const BootstrapTooltip = styled(({ className, ...props }) => (
  <Tooltip
    {...props}
    arrow
    classes={{ popper: className }}
    disableInteractive
  />
))(({ theme }) => ({
  [`& .${tooltipClasses.arrow}`]: {
    color: theme.palette.common.black,
  },
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.common.black,
    color: "#fff",
  },
}));

const IconHoverWithName = ({ icon }) => {
  const getIcon = useIcon();

  return (
    <BootstrapTooltip title={icon.name}>
      <IconButton
        sx={{ color: (theme) => theme.palette.secondary.main, fontSize: 31 }}
      >
        {getIcon(icon.icon, { color: "#858792", fontSize: 31 })}
      </IconButton>
    </BootstrapTooltip>
  );
};

export default IconHoverWithName;
