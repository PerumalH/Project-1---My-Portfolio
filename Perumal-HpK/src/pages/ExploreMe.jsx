import { NavLink, useNavigate } from "react-router";

const ExploreMe = () => {
  const nav = useNavigate();
  return (
    <div>
      <NavLink onClick={() => nav(-1)}>back</NavLink>
    </div>
  );
};

export default ExploreMe;
