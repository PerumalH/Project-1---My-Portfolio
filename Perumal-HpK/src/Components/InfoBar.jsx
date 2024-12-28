import "../style/sass/components/_infoBar.scss";

const InfoBar = ({ classname, Message }) => {
  return <div className={classname}>{Message}</div>;
};

export default InfoBar;
