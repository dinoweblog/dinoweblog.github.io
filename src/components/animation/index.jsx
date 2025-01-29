import React from "react";
import { useIntersectionObserver } from "./utils";

const AnimatedSection = ({
  children,
  animation = "",
  className = "",
}) => {
  const [ref, isVisible] = useIntersectionObserver();

  return (
    <div
      ref={ref}
      className={`animate-on-scroll ${animation} ${
        isVisible ? "is-visible" : ""
      } ${className}`}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;
