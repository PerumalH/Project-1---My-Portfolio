import "../style/sass/components/_btnDetails.scss";

const BtnDetails = ({ BtnName, Details }) => {
  return (
    <div className="Details">
      <div className="Details-full">
        <h5>{Details.Detail1}</h5>
        <h5>{Details.Detail2}</h5>
        <h5>{Details.Detail3}</h5>
      </div>

      <div className="Details-action">{BtnName}</div>
    </div>
  );
};

export default BtnDetails;
