import "../style/sass/layout/_explore.scss";
import NavLinkList from "../Components/NavLinkList";
import { NavLink } from "react-router";
import { useState } from "react";

const ExploreMe = () => {
  const navList = [
    "About-Me",
    "Skill-Set",
    "Experience",
    "Projects",
    "Education",
    "Contacts",
    "Excite-ME",
  ];
  // const nav = useNavigate();
  const [navBar, setnavBar] = useState("navhidden");
  const handleNavHidden = () => {
    setnavBar((prevValue) => {
      if (prevValue === "") {
        return "navhidden";
      } else {
        return "";
      }
    });
  };
  return (
    <div className="section">
      <ul className={`section-list ${navBar}`}>
        {navList.map((section, index) => {
          return (
            <NavLinkList
              key={index}
              section={section}
              index={index}
              Onclose={handleNavHidden}
            />
          );
        })}
      </ul>

      <NavLink to={"/"} className={"Rediscover-Me"}>
        Rediscover-ME
      </NavLink>

      <button className="NavBarhidden NavBar" onClick={handleNavHidden}>
        ListOf-ME
      </button>
    </div>
  );
};

export default ExploreMe;
