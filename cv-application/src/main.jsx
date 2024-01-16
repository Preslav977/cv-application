import React from "react";
import ReactDOM from "react-dom/client";
import { GeneralSection } from "./GeneralSectionCV";
import { EducationSection } from "./EducationSectionCV";
import { ProfessionalSection } from "./ProfessionalSectionCV";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GeneralSection />
    <EducationSection />
    <ProfessionalSection />
  </React.StrictMode>,
);
