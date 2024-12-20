import Container from "../Components/Container";
import "../style/sass/pages/_skill.scss";
const Skill = () => {
  return (
    <Container container={"Container-1"}>
      <div className="floating-symbols">
        <span className="symbol">{"HTML5/CSS3"}</span>
        <span className="symbol">{"JavaScript"}</span>
        <span className="symbol">{"SASS"}</span>
        <span className="symbol">{"Redux"}</span>
        <span className="symbol">{"React Router"}</span>
        <span className="symbol">{"React Query"}</span>
        <span className="symbol">{"React Js"}</span>
        <span className="symbol">
          {
            "On a journey of exploring frontend-related libraries and still learning ... .. ."
          }
        </span>
      </div>
    </Container>
  );
};

export default Skill;
