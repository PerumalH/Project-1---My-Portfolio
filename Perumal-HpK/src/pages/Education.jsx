// import React from 'react'

import BtnDetails from "../Components/BtnDetails";
import Container from "../Components/Container";

const Education = () => {
  const EduList = [
    {
      BtnName: "Bachelor's Degree",
      DetailsOf: {
        Detail1: "Computer Science and Engineering",
        Detail2: "SNS College Of Technology, Coimbatore.",
        Detail3: "8.89 CGPA",
      },
    },
    {
      BtnName: "12th & 10th",
      DetailsOf: {
        Detail1: "Computer Science and Engineering",
        Detail2: "SNS College Of Technology, Coimbatore.",
        Detail3: "8.89 CGPA",
      },
    },
  ];

  return (
    <Container container={"Container-1"}>
      {
        <div
          className="Education"
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-evenly",
            alignItems: "center",
          }}
        >
          {EduList.map((Value, index) => {
            return (
              <BtnDetails
                key={index}
                BtnName={Value.BtnName}
                Details={Value.DetailsOf}
              />
            );
          })}
        </div>
      }
    </Container>
  );
};

export default Education;
