import logo from "../assets/React+Html.png";
import "../style/sass/layout/_home.scss";
import Tilt from "react-parallax-tilt";

import HiImg from "../assets/hi-unscreen.gif";
import { NavLink } from "react-router";
const Home = () => {
  return (
    <div className="Lists">
      <div className="list-item logo">
        <img src={logo} alt="React=Html+JS" className="logo-img" />
      </div>
      <Tilt>
        <div className="list-item intro">
          <p>{`Hello World!`}</p>

          <div className="intro-me">
            <h4 className="name">{"I'm PERUMAL H"}</h4>
            <hr />
            <h4 className="desire">{"<Frontend Developer/>"}</h4>
          </div>

          <img src={HiImg} alt="hi" className="intro-img" />
        </div>
      </Tilt>
      <div className="list-item action">
        <NavLink to={"explore-me"} className={"explore"}>
          Explore-ME
        </NavLink>

        <p>Before you Going to </p>
        <NavLink to={"/excite-Me"} className={"excite"}>
          Excite-ME
        </NavLink>
      </div>

      <div className="copy">
        <p>
          Copyright &copy; 2024 Made with 💙💚 by Perumal HpK | Keep Coding,
          Keep Growing 🚀
        </p>
        <p>All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Home;
