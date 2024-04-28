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
              color: "#fff",
            }
          : {
              color: "#858792",
              "& a": {
                color: "#fff",
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
