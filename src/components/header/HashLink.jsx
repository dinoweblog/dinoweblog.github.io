import { useLocation } from "react-router-dom";
import { NavHashLink } from "react-router-hash-link";

const HashLink = ({ item }) => {
  const { hash } = useLocation();
  const isActive = (isHash) => hash === isHash;
  return (
    <NavHashLink
      smooth
      style={
        isActive(item === "Home" ? "" : `#${item.toLowerCase()}`)
          ? {
              color: "#fff",
            }
          : { color: "#858792" }
      }
      to={item === "Home" ? "#" : `#${item.toLowerCase()}`}
    >
      {item}
    </NavHashLink>
  );
};

export default HashLink;
