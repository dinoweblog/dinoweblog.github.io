import React, { useState, useEffect } from "react";
import { Home, Code, Folder, Briefcase, Info, Mail } from "lucide-react";
import { Box, IconButton, Paper, Tooltip } from "@mui/material";
import { HashLink as NavHashLink } from "react-router-hash-link";
import { primaryText, secondaryText } from "../../app/index";
import { keyframes } from "@mui/system";
import { useLocation } from "react-router-dom";

const fadeInTooltip = keyframes`
  0% { opacity: 0; transform: translateY(-15px) scale(0.9); }
  50% { opacity: 0.5; transform: translateY(-2px) scale(1.02); }
  100% { opacity: 1; transform: translateY(0) scale(1); }
`;

const pulseAnimation = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.15); background-color: ${secondaryText}; }
  100% { transform: scale(1); }
`;

const navItems = [
  { id: "home", label: "Home", Icon: Home, link: "#" },
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

const NavItem = ({
  Icon,
  isActive = false,
  onClick,
  label,
  link,
  isProjectsPage,
}) => {
  const finalLink = isProjectsPage && link.includes("#") ? `/${link}` : link;

  return (
    <Tooltip
      title={label}
      placement="top"
      arrow
      componentsProps={{
        tooltip: {
          sx: {
            backgroundColor: "#2c2d31",
            color: "#F5F5F5",
            fontSize: "14px",
            padding: "8px 12px",
            borderRadius: "4px",
            boxShadow: "1px 1px 5px rgba(0,0,0,0.4)",
            animation: `${fadeInTooltip} 0.2s ease forwards`,
          },
        },
        arrow: { sx: { color: "#2c2d31" } },
      }}
    >
      <NavHashLink
        smooth
        to={finalLink}
        style={{ textDecoration: "none" }}
        onClick={onClick}
      >
        <IconButton
          sx={{
            color: isActive ? "#fff" : primaryText,
            backgroundColor: isActive ? secondaryText : "transparent",
            transition: "all 0.3s ease-in-out",
            transform: isActive ? "scale(1.1)" : "scale(1)",
            borderRadius: "6px",
            "&:hover": {
              animation: `${pulseAnimation} 0.6s ease-in-out`,
              backgroundColor: secondaryText,
              color: "#fff",
            },
          }}
          aria-label={label}
        >
          <Icon size={20} />
        </IconButton>
      </NavHashLink>
    </Tooltip>
  );
};

export default function AppBar() {
  const [activeItem, setActiveItem] = useState("home");
  const location = useLocation();
  const isProjectsPage = location.pathname === "/projects";

  useEffect(() => {
    if (location.pathname === "/projects") {
      setActiveItem("projects");
      return;
    }

    const handleScroll = () => {
      const sections = navItems.map((item) => ({
        id: item.id,
        element: document.getElementById(item.id),
      }));

      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (!section.element) continue;

        const sectionTop = section.element.offsetTop;
        const sectionBottom = sectionTop + section.element.offsetHeight;

        if (scrollPosition >= sectionTop && scrollPosition <= sectionBottom) {
          setActiveItem(section.id);
          break;
        }
      }

      // Special case for home section when at the very top
      if (window.scrollY === 0) {
        setActiveItem("home");
      }
    };

    window.addEventListener("scroll", handleScroll);
    // Initial check
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [location]);

  useEffect(() => {
    const hash = location.hash.replace("#", "");
    if (hash && navItems.some((item) => item.id === hash)) {
      setActiveItem(hash);
    } else if (location.pathname === "/projects") {
      setActiveItem("projects");
    } else if (location.pathname === "/" && !hash) {
      setActiveItem("home");
    }
  }, [location]);

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
          px: { xs: 2, md: 3 },
          borderRadius: "8px",
          backgroundColor: "rgba(69, 71, 75, 0.5)",
          backdropFilter: "blur(10px)",
          boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
        }}
      >
        {navItems.map((item) => (
          <NavItem
            key={item.id}
            Icon={item.Icon}
            isActive={activeItem === item.id}
            onClick={() => {
              console.log(item.id);
              setActiveItem(item.id);
            }}
            label={item.label}
            link={item.link}
            isProjectsPage={isProjectsPage}
          />
        ))}
      </Paper>
    </Box>
  );
}
