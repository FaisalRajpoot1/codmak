import React from "react";
import { useRoutes } from "react-router-dom";

import NotFound from "pages/NotFound";
import Homefull from "pages/Homefull";

const ProjectRoutes = () => {
  let element = useRoutes([
    { path: "*", element: <NotFound /> },
    { path: "/", element: <Homefull />,}
  ]);

  return element;
};

export default ProjectRoutes;
