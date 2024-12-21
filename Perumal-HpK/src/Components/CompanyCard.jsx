import "../style/sass/components/_companyCard.scss";

const CompanyCard = ({ CompanyList }) => {
  return (
    <div className="CompanyList">
      {CompanyList.map((company, index) => {
        return (
          <div key={index} className="CompanyList-one">
            <img
              src={company.img}
              alt="CompanyLogo"
              className="CompanyList-one-logo"
            />
            <h5 className="CompanyList-one-name">{company.companyName}</h5>
            <p className="CompanyList-one-role">{company.role}</p>
            <p className="CompanyList-one-type">{company.employmentType}</p>
            <p className="CompanyList-one-tenure">{company.tenure}</p>
          </div>
        );
      })}
    </div>
  );
};

export default CompanyCard;
