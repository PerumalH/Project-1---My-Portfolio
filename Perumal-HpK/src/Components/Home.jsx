import logo from "../assets/React+Html.png";
import "../style/sass/layout/_home.scss";
import hiVideo from "../assets/hi.mp4";
import HiImg from "../assets/hi-unscreen.gif";
const Home = () => {
  return (
    <div className="Lists">
      <div className="list-item logo">
        <img src={logo} alt="React=Html+JS" className="logo-img" />
      </div>
      <div className="list-item intro">
        <p>{`Hi There!`}</p>
        <h6>{"I'm Perumal Hpk"}</h6>
        <h5>{"The Frontend Developer"}</h5>
        <img src={HiImg} alt="hi" className="intro-img" />
      </div>
      <div className="list-item action">
        <button>Explore Me</button>
        <p>Before you Going to </p>
        <button>Excite Me</button>
      </div>
      <div className="floating-symbols">
        <span className="symbol">{"{...}"}</span>
        <span className="symbol">{"&&"}</span>
        <span className="symbol">{"@"}</span>
        <span className="symbol">{"==="}</span>
        <span className="symbol">{"||"}</span>
      </div>
      <div>Copyright @ HpK</div>
    </div>
  );
};

export default Home;
