import React, { useState } from "react";
import { Home, Code, Folder, Briefcase, Info, Mail } from "lucide-react";
import { Box, IconButton, Paper, Tooltip } from "@mui/material";
import { HashLink as NavHashLink } from "react-router-hash-link";
import { secondaryText } from "../../app/index";

const navItems = [
  { id: "home", label: "Home", Icon: Home, link: "/#" },
  { id: "skills", label: "Skills", Icon: Code, link: "#skills" },
  { id: "projects", label: "Projects", Icon: Folder, link: "#projects" },
  { id: "about", label: "About", Icon: Info, link: "#about" },
  {
    id: "experience",
    label: "Experience",
    Icon: Briefcase,
    link: "#experience",
  },
  { id: "contact", label: "Contact", Icon: Mail, link: "#contact" },
];

const NavItem = ({ Icon, isActive = false, onClick, label, link }) => (
  <Tooltip title={label} placement="top" arrow>
    <NavHashLink
      smooth
      to={link}
      style={{ textDecoration: "none" }}
      onClick={onClick}
    >
      <IconButton
        sx={{
          color: isActive ? "#fff" : "gray",
          backgroundColor: isActive ? secondaryText : "transparent",
          "&:hover": {
            backgroundColor: secondaryText,
            color: "#fff",
          },
          transition: "transform 0.2s ease-in-out",
          transform: isActive ? "scale(1.2)" : "scale(1)",
          borderRadius: "4px",
        }}
        aria-label={label}
      >
        <Icon size={20} />
      </IconButton>
    </NavHashLink>
  </Tooltip>
);

export default function AppBar() {
  const [activeItem, setActiveItem] = useState("home");

  return (
    <Box
      sx={{
        position: "fixed",
        top: 25,
        left: "50%",
        transform: "translateX(-50%)",
        zIndex: 1000,
      }}
    >
      <Paper
        elevation={3}
        sx={{
          display: "flex",
          alignItems: "center",
          gap: { xs: 1.5, md: 2.5 },
          padding: 1,
          px: { xs: 1, md: 2 },
          borderRadius: "8px",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          backdropFilter: "blur(10px)",
          boxShadow: "rgba(0, 0, 0, 0.15) 0px 5px 15px 0px",
        }}
      >
        {navItems.map((item) => (
          <NavItem
            key={item.id}
            Icon={item.Icon}
            isActive={activeItem === item.id}
            onClick={() => setActiveItem(item.id)}
            label={item.label}
            link={item.link}
          />
        ))}
      </Paper>
    </Box>
  );
}
