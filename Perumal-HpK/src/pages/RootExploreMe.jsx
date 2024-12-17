import { Outlet, useNavigate } from "react-router";
import ExploreMe from "./ExploreMe";
import { useEffect } from "react";

const RootExploreMe = () => {
  const nav = useNavigate();
  useEffect(() => {
    nav("About-me");
  }, []);
  return (
    <main>
      <ExploreMe />
      <Outlet />
    </main>
  );
};

export default RootExploreMe;
