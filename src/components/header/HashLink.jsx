import { useLocation } from "react-router-dom";
import { NavHashLink } from "react-router-hash-link";

const HashLink = ({ item }) => {
  const { hash, pathname } = useLocation();
  const isactive = (isHash) => hash === isHash;
  return (
    <NavHashLink
      className={item.toLowerCase()}
      smooth
      style={
        isactive(
          item === "Home" && pathname !== "/projects"
            ? ""
            : `#${item.toLowerCase()}`
        )
          ? {
              color: "#8b5cf6",
            }
          : {
              color: "#858792",
              "& a": {
                color: "#8b5cf6",
              },
            }
      }
      to={item === "Home" ? "/#" : `/#${item.toLowerCase()}`}
    >
      {item}
    </NavHashLink>
  );
};

export default HashLink;
