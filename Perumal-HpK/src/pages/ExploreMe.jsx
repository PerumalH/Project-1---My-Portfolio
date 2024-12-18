import "../style/sass/layout/_explore.scss";
import NavLinkList from "../Components/NavLinkList";
import { NavLink } from "react-router";

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
  return (
    <div className="section">
      <ul className="section-list">
        {navList.map((section, index) => {
          return <NavLinkList key={index} section={section} index={index} />;
        })}
      </ul>

      <NavLink to={"/"} className={"Rediscover-Me"}>
        Rediscover-ME
      </NavLink>
    </div>
  );
};

export default ExploreMe;
