// import React from 'react'

import ContactCard from "../Components/ContactCard";
import Container from "../Components/Container";
import "../style/sass/pages/_contact.scss";
import gmail from "/public/gmail.png";
import linkedIn from "/public/LinkedIn.png";
import outlook from "/public/outlook.png";
import phone from "/public/phone.png";
const Contacts = () => {
  const listOfContacts = [
    { line: "Gmail", Value: "perumalhpk250@gmail.com", img: gmail },
    { line: "Outlook", Value: "perumalhpk@outlook.com", img: outlook },
    { line: "phone", Value: "+918148142454", img: phone },
    {
      line: "LinkedIn",
      Value: "www.linkedin.com/in/perumal-hpk",
      img: linkedIn,
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
