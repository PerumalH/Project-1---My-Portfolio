import "../style/sass/layout/_explore.scss";
import NavLinkList from "../Components/NavLinkList";

const ExploreMe = () => {
  const navList = [
    "About-Me",
    "Skill",
    "Experience",
    "Projects",
    "Education",
    "Contacts",
    "Excite-Me",
  ];
  // const nav = useNavigate();
  return (
    <div className="section">
      <ul className="section-list">
        {navList.map((section, index) => {
          return (
            <NavLinkList key={index} section={section} index={index} />
            // <li key={index} className={`${section}`}>
            //   <NavLink
            //     to={section}
            //     className={({ isActive }) => (isActive ? "active" : undefined)}
            //   >
            //     {section}
            //   </NavLink>
            // </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ExploreMe;
