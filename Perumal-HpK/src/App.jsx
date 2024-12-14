import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./Components/Home";
import "./style/sass/pages/_app.scss";
import Container from "./Components/Container";
import videoClip from "./assets/bg-7.mp4";

function App() {
  const router = createBrowserRouter([{ path: "/", element: <Home /> }]);
  return [
    <Container key={9}>
      <RouterProvider router={router}></RouterProvider>
    </Container>,
    <video key={0} autoPlay muted loop id="background-video">
      <source src={videoClip} type="video/mp4" />
    </video>,
  ];
}

export default App;
