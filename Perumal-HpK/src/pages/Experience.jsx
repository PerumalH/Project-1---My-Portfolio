import CompanyCard from "../Components/CompanyCard";
import Container from "../Components/Container";
import tcs from "/public/tcs.png";
const Experience = () => {
  const CompanyList = [
    {
      img: tcs,
      companyName: "Tata Consultancy Services (TCS)",
      employmentType: "Full-Time",
      role: "Frontend Developer",
      tenure: "May 2022 - Present",
    },
  ];

  return (
    <Container container={"Container-1"}>
      <CompanyCard CompanyList={CompanyList} />
    </Container>
  );
};

export default Experience;
