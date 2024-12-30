import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./pages/Home";
import "./style/sass/pages/_app.scss";
import Container from "./Components/Container";
import videoClip from "../public/bg-4.mp4";
import Root from "./pages/Root";
import RootExploreMe from "./pages/RootExploreMe";
import AboutMe from "./pages/AboutMe";
import Skill from "./pages/Skill";
import Experience from "./pages/Experience";
import Project from "./pages/Project";
import Education from "./pages/Education";
import Contacts from "./pages/Contacts";
import ErrorPage from "./pages/ErrorPage";
import ExciteMe from "./pages/ExciteMe";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "explore-me",
          element: <RootExploreMe />,
          children: [
            { path: "About-Me", index: true, element: <AboutMe /> },
            {
              path: "Skill-Set",
              element: <Skill />,
            },
            {
              path: "Experience",
              element: <Experience />,
            },
            {
              path: "Projects",
              element: <Project />,
            },
            {
              path: "Education",
              element: <Education />,
            },
            {
              path: "Contacts",
              element: <Contacts />,
            },
          ],
        },
        {
          path: "/excite-Me",
          element: <ExciteMe />,
        },
      ],
    },
  ]);
  return [
    <Container key={0} container={"Container"}>
      <RouterProvider router={router}></RouterProvider>
    </Container>,
    <video key={1} autoPlay muted loop preload="metadata" id="background-video">
      <source src={videoClip} type="video/mp4" />
    </video>,
  ];
}

export default App;
