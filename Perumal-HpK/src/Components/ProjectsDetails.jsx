import "../style/sass/components/_projectDetails.scss";
const ProjectsDetails = ({ details, link, techStack }) => {
  return (
    <div className="project">
      <p className="project-des">{details}</p>
      <a className="project-link" href={link} target="_blank">
        {"Check-ME"}
      </a>
      <div className="project-tech">
        {techStack.map((tech, index) => {
          return <p key={index}>{tech}</p>;
        })}
      </div>
    </div>
  );
};

export default ProjectsDetails;
