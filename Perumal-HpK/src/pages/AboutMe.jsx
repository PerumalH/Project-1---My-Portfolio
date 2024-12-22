import Container from "../Components/Container";
import "../style/sass/pages/_about.scss";
const AboutMe = () => {
  return (
    <Container container={"Container-1"}>
      <div className="Me">
        <div className="Me-Developer">
          <p className="Me-Developer-1">As a Developer</p>
          <p className="Me-Developer-2">
            {
              "I Create Intuitive, User-Focused Applications To Solve Real-World Problems. I Thrive At The Intersection Of Creativity And Logic, Continually Improving To Deliver Scalable And Maintainable Solutions."
            }
          </p>
        </div>
        <div className="Me-Programmer">
          <p className="Me-Programmer-1">As a Programmer</p>
          <p className="Me-Programmer-2">
            {
              "Programming Is My Art, Breaking Down Problems Into Solutions. I Enjoy Working With Logic, Debugging, And Optimization To Craft Clear, Reusable, And Robust Code. Simply Put, I Love To Write Code."
            }
          </p>
        </div>
        <div className="Me-Motto-1">{"More Code Less Stress"}</div>
        <div className="Me-Motto-2">{"More Code Less Stress"}</div>
      </div>
    </Container>
  );
};

export default AboutMe;
