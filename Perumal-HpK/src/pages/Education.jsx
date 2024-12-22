// import React from 'react'

import { useState } from "react";
import BtnDetails from "../Components/BtnDetails";
import Container from "../Components/Container";

const Education = () => {
  const [ActiveButton, setActiveButton] = useState("");
  const EduList = [
    {
      BtnName: "B.E CSE",
      DetailsOf: {
        Detail1: "SNS College Of Technology, Coimbatore.",
        Detail3: "8.89 CGPA",
      },
    },
    {
      BtnName: "12th Standard",
      DetailsOf: {
        Detail1: "The Little Flower Hr.Sec School, Kumbakonam.",

        Detail3: "82 %",
      },
    },
    {
      BtnName: "10th Standard",
      DetailsOf: {
        Detail1: "Minerva Hr.Sec School, Kadichambadi.",

        Detail3: "92 %",
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
            gap: "4rem",
            alignItems: "center",
          }}
        >
          {EduList.map((Value, index) => {
            return (
              <BtnDetails
                key={index}
                BtnName={Value.BtnName}
                Details={Value.DetailsOf}
                ActBtn={ActiveButton}
                ActSet={setActiveButton}
              />
            );
          })}
        </div>
      }
    </Container>
  );
};

export default Education;
