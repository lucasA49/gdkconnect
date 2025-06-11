import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './App.css'
import Services from "./Pages/Services"
import Home from "./Pages/Home";
import PriseRdv from "./Pages/PriseRdv";
import 'react-calendar/dist/Calendar.css';
import ContactPage from "./Composant/ContactPage";
import Realisations from "./Pages/Realisations"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/services",
    element: <Services />,
  },
    {
    path: "/prisederdv",
    element: <PriseRdv />,
  },
     {
    path: "/Contact",
    element: <ContactPage />,
  },
     {
    path: "/Realisations",
    element: <Realisations />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
