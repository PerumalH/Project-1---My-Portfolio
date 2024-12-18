// import React from 'react'

import ContactCard from "../Components/ContactCard";
import Container from "../Components/Container";
import "../style/sass/pages/_contact.scss";
const Contacts = () => {
  const listOfContacts = [
    { line: "Gmail", Value: "perumalhpk250@gmail.com" },
    { line: "Outlook", Value: "perumalhpk@outlook.com" },
    { line: "phone", Value: "+918148142454" },
    {
      line: "LinkedIn",
      Value: "www.linkedin.com/in/perumal-hpk",
    },
  ];
  return (
    <Container container={"Container-1"}>
      <div className="contacts">
        <ul className="contacts-list">
          {listOfContacts.map((obj) => {
            return (
              <ContactCard
                key={obj.Value}
                lineofConnect={obj.line}
                Connect={obj.Value}
              />
            );
          })}
        </ul>
      </div>
    </Container>
  );
};

export default Contacts;
