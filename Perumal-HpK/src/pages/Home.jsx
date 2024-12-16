import logo from "../assets/React+Html.png";
import "../style/sass/layout/_home.scss";

import HiImg from "../assets/hi-unscreen.gif";
import { NavLink } from "react-router";
const Home = () => {
  return (
    <div className="Lists">
      <div className="list-item logo">
        <img src={logo} alt="React=Html+JS" className="logo-img" />
      </div>

      <div className="list-item intro">
        <p>{`Hello World!`}</p>

        <div className="intro-me">
          <h4 className="name">{"I'm PERUMAL H"}</h4>
          <hr />
          <h4 className="desire">{"<Frontend Developer/>"}</h4>
        </div>

        <img src={HiImg} alt="hi" className="intro-img" />
      </div>
      <div className="list-item action">
        <NavLink to={"explore-me"} className={"explore"}>
          Explore Me
        </NavLink>

        <p>Before you Going to </p>
        <NavLink to={"explore-me"} className={"excite"}>
          Excite Me
        </NavLink>
      </div>
      <div className="floating-symbols">
        <span className="symbol">{"<!Doctype>"}</span>
        <span className="symbol">{"z-index"}</span>
        <span className="symbol">{"Async / Await"}</span>
        <span className="symbol">{"useEffect"}</span>
        <span className="symbol">{"@Mixins"}</span>
        <span className="symbol">{"Git Fetch"}</span>
      </div>
      <div className="copy">
        <p>
          &copy; 2024 Made with 💙 by Perumal HpK | Keep Coding, Keep Growing 🚀
        </p>
        <p>All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Home;
