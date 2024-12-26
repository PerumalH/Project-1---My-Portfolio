import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router";
import "../style/sass/components/_navlinklist.scss";

// eslint-disable-next-line react/prop-types
const NavLinkList = ({ index, section, Onclose }) => {
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
        to={section === "Excite-ME" ? "/excite-Me" : section}
        className={({ isActive }) => {
          if (isActive) {
            return "list active";
          } else {
            return "list";
          }
        }}
        onClick={Onclose}
      >
        {section}
      </NavLink>
    </li>
  );
};

export default NavLinkList;
