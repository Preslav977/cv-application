import React from "react";
import ReactDOM from "react-dom/client";
import { CVGeneralComponentSectionComponent } from "./GeneralSectionCV";
import { CVEducationSectionComponent } from "./EducationSectionCV";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CVGeneralComponentSectionComponent />
    <CVEducationSectionComponent />
  </React.StrictMode>,
);
