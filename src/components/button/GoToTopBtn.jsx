import { NavHashLink } from "react-router-hash-link";
import { MdOutlineKeyboardArrowUp, primary } from "../../app/index";
import { useScrollDirection } from "../header/useScrollDirection";

const GoToTopBtn = () => {
  const scrollDirection = useScrollDirection();

  return (
    <NavHashLink
      smooth
      style={{
        position: "fixed",
        bottom: 25,
        right: 25,
        border: "1px solid #3b3d49",
        transition: "all .5s ease",
        height: "60px",
        width: "60px",
        borderRadius: "50%",
        zIndex: 100,
        color: "#fff",
        boxShadow:
          "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
        fontSize: 35,
        display: scrollDirection ? "flex" : "none",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: primary,
      }}
      to="#"
    >
      <MdOutlineKeyboardArrowUp />
    </NavHashLink>
  );
};

export default GoToTopBtn;
