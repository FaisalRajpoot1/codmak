import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
import Homefull from "pages/Homefull";

const ProjectRoutes = () => {
  let element = useRoutes([
    // { path: "/", element: <Home /> },
    { path: "*", element: <NotFound /> },
    // {
    //   path: "homefull",
    //   element: <Homefull />,
    // },
    {
      path: "/",
      element: <Homefull />,
    }
  ]);

  return element;
};

export default ProjectRoutes;
