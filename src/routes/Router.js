import { lazy } from "react";
import { Navigate } from "react-router";

import LandingPage from "../views/LandingPage/LandingPage.js";
import Settings from "../views/Settings/Settings.js";

/****Layouts*****/
const FullLayout = lazy(() => import("../layouts/FullLayout/FullLayout.js"));
/****End Layouts*****/

/*****Pages******/
const Dashboard1 = lazy(() => import("../views/dashboards/Dashboard1"));

/*****Tables******/
const BasicTable = lazy(() => import("../views/tables/BasicTable"));

// form elements
const ExAutoComplete = lazy(() =>
  import("../views/FormElements/ExAutoComplete")
);
const ExButton = lazy(() => import("../views/FormElements/ExButton"));
const ExCheckbox = lazy(() => import("../views/FormElements/ExCheckbox"));
const ExRadio = lazy(() => import("../views/FormElements/ExRadio"));
const ExSlider = lazy(() => import("../views/FormElements/ExSlider"));
const ExSwitch = lazy(() => import("../views/FormElements/ExSwitch"));
// form layouts
const FormLayouts = lazy(() => import("../views/FormLayouts/FormLayouts"));

/*****Routes******/

const ThemeRoutes = [
  {
    path: "/",
    exact: true,
    element: <LandingPage />,
    children: [
    ]
  },

  {
    path: "/",
    element: <FullLayout />,
    children: [
      { path: "/", element: <Navigate to="dashboards/dashboard1" /> },
      { path: "dashboard", exact: true, element: <Dashboard1 /> },
      { path: "table", element: <BasicTable /> },
      { path: "/form-layouts", element: <FormLayouts /> },
      { path: "/autocomplete", element: <ExAutoComplete /> },
      { path: "/button", element: <ExButton /> },
      { path: "/checkbox", element: <ExCheckbox /> },
      { path: "/radio", element: <ExRadio /> },
      { path: "/slider", element: <ExSlider /> },
      { path: "/switch", element: <ExSwitch /> },
      { path: "/settings", element: <Settings/>}
    ],
  },

 
  
];

export default ThemeRoutes;
