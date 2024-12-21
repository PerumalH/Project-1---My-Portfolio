import { useEffect, useState } from "react";
import "../style/sass/components/_btnDetails.scss";

const BtnDetails = ({ BtnName, Details, ActBtn, ActSet }) => {
  const [isHidden, setIsHidden] = useState(false);
  const handleDetails_full = () => {
    setIsHidden((preState) => !preState);
    ActSet(BtnName);
  };

  useEffect(() => {
    if (ActBtn === BtnName) {
      setIsHidden(true);
    } else {
      setIsHidden(false);
    }
  }, [ActBtn, BtnName]);
  return (
    <div className={`Details ${isHidden ? "isGreat" : ""}`}>
      <div className={`Details-full ${isHidden ? "" : "hidden"}`}>
        <h5 className="D1">{Details.Detail1}</h5>
        <h6 className="D2">{Details.Detail2}</h6>
        <h5 className="D3">{Details.Detail3}</h5>
      </div>

      <div
        className={`Details-action ${isHidden ? "Details-aftAction" : ""}`}
        onClick={handleDetails_full}
      >
        {BtnName}
      </div>
    </div>
  );
};

export default BtnDetails;
