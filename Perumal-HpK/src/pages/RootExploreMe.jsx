import { Outlet, useNavigate } from "react-router";
import ExploreMe from "./ExploreMe";
import { useEffect } from "react";
import "../style/sass/layout/_explore.scss";

const RootExploreMe = () => {
  const nav = useNavigate();
  useEffect(() => {
    nav("About-me");
  }, []);
  return (
    <>
      <main className="block">
        <ExploreMe />
        <Outlet />
      </main>
    </>
  );
};

export default RootExploreMe;
