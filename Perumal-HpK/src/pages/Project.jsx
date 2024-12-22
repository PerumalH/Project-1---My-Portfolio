import Container from "../Components/Container";
import ProjectsDetails from "../Components/ProjectsDetails";
import "../style/sass/pages/_project.scss";
const Project = () => {
  const project = [
    {
      description:
        "My Portfolio Website - It Is A Personal Project Aimed At Showcasing My Skills, Experience, And Projects. It’s Built With A Focus On Clean, Responsive Design And Seamless User Experience.",
      techStack: ["React Js", "React Router", "SCSS"],
      link: "",
    },
  ];

  return (
    <Container container={"Container-1"}>
      <div className="Project">
        <div className="Project-State">
          {/* <p>
            {
              "These Are Not Just Projects, They Are My Ideas Turned Into Reality, Coded From Scratch, And Brought To Life. Here’s What I Proudly Call My Work In Action."
            }
          </p> */}
          <div className="github">
            <img
              src="/public/github.png"
              alt="github"
              className="github-logo"
            />
            <a
              className="github-action"
              href="https://github.com/PerumalH"
              target="_blank"
            >
              Experience-ME
            </a>
          </div>
        </div>
        <div className="Project-List">
          {project.map((prj, index) => {
            return (
              <ProjectsDetails
                key={index}
                name={prj.name}
                details={prj.description}
                techStack={prj.techStack}
                link={prj.link}
              />
            );
          })}
        </div>
      </div>
    </Container>
  );
};

export default Project;
