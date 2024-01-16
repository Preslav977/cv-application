import React from "react";
import ReactDOM from "react-dom/client";
import { GeneralSection } from "./GeneralSectionCV";
import { EducationSection } from "./EducationSectionCV";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GeneralSection />
    <EducationSection />
  </React.StrictMode>,
);
