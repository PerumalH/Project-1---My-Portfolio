import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./pages/Home";
import "./style/sass/pages/_app.scss";
import Container from "./Components/Container";
import videoClip from "./assets/bg-4.mp4";
import Root from "./pages/Root";
import RootExploreMe from "./pages/RootExploreMe";
import AboutMe from "./pages/AboutMe";
import Skill from "./pages/Skill";
import Experience from "./pages/Experience";
import Project from "./pages/Project";
import Education from "./pages/Education";
import Contacts from "./pages/Contacts";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
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
      ],
    },
  ]);
  return [
    <Container key={0} container={"Container"}>
      <RouterProvider router={router}></RouterProvider>
    </Container>,
    <video key={1} autoPlay muted loop id="background-video">
      <source src={videoClip} type="video/mp4" />
    </video>,
  ];
}

export default App;
