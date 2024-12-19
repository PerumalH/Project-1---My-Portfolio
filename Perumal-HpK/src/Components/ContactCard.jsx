// eslint-disable-next-line react/prop-types
import "../style/sass/components/_contactCard.scss";

const ContactCard = ({ lineofConnect, Connect }) => {
  let WhereTo = "https://" + Connect;

  if (Connect.includes("@")) {
    WhereTo = "mailto:" + Connect;
  }
  if (lineofConnect.includes("phone")) {
    WhereTo = "tel:" + Connect;
  }

  return (
    <li className="line">
      <p className="line-connect">
        {lineofConnect}
        {/* <img src={img} alt={lineofConnect} className={lineofConnect} /> */}
      </p>
      <a
        className={`line-value ${lineofConnect}`}
        href={WhereTo}
        target="_blank"
      >
        {Connect}
      </a>
    </li>
  );
};

export default ContactCard;
