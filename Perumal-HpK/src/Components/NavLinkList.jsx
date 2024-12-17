import { useState } from "react";
import { NavLink } from "react-router";
import "../style/sass/components/_navlinklist.scss";

// eslint-disable-next-line react/prop-types
const NavLinkList = ({ index, section }) => {
  const [ListActive, SetListActive] = useState("Thanks");
  return (
    <li key={index} className={`${ListActive} ${section}-${ListActive}`}>
      <NavLink
        to={section}
        className={({ isActive }) => {
          if (isActive) {
            SetListActive("Thanks");
            return "active";
          } else {
            SetListActive("Sorry");
            return undefined;
          }
        }}
      >
        {section}
      </NavLink>
    </li>
  );
};

export default NavLinkList;
