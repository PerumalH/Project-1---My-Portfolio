import { NavLink } from "react-router";
import Container from "../Components/Container";
import "../style/sass/pages/_error.scss";
const ErrorPage = () => {
  return (
    <Container container={"Container-error"}>
      <div className="error">
        <div className="error-info">
          <p>{"I Think, You're Lost In My WEB Space."}</p>
          <p>{" Don't Worry. I'll Guide You To Back."}</p>
        </div>
        <NavLink to={"/"} className={"error-action"}>
          Rediscover-ME
        </NavLink>
      </div>
    </Container>
  );
};

export default ErrorPage;
