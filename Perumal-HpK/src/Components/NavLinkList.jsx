import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router";
import "../style/sass/components/_navlinklist.scss";

// eslint-disable-next-line react/prop-types
const NavLinkList = ({ index, section }) => {
  const [ListActive, SetListActive] = useState("");

  const location = useLocation();

  useEffect(() => {
    if (location.pathname === `/explore-me/${section}`) {
      SetListActive("Thanks");
    } else {
      SetListActive("Sorry");
    }
  }, [location.pathname, section]);

  return (
    <li key={index} className={`${ListActive} ${section}-${ListActive}`}>
      <NavLink
        to={section}
        className={({ isActive }) => {
          if (isActive) {
            return "list active";
          } else {
            return "list";
          }
        }}
      >
        {section}
      </NavLink>
    </li>
  );
};

export default NavLinkList;
