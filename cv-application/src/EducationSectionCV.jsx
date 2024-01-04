import { useState } from "react";

function CVEducationSection({ label, placeholder }) {
  const [text, setText] = useState("");

  function handleChange(e) {
    e.preventDefault();
    setText(e.target.value);
  }

  return (
    <div>
      <form action="#" onSubmit={handleChange}>
        <label>
          {label}
          <input
            type="text"
            placeholder={placeholder}
            onChange={handleChange}
            value={text}
          />
        </label>
      </form>
    </div>
  );
}

export function CVEducationSectionComponent() {
  return (
    <div>
      <h2>Education Experience</h2>
      <CVEducationSection
        label="Degree"
        placeholder="Enter Degree / Filed of Study"
      />
      <CVEducationSection
        label="School"
        placeholder="Enter school / university"
      />
      <CVEducationSection label="City" placeholder="Enter City" />
      <CVEducationSection label="Country" placeholder="Enter country" />
      <CVEducationSection label="Start Date" placeholder="Enter start date" />
      <CVEducationSection label="End date" placeholder="Enter end date" />
      <button type="submit"> ✓ Send</button>
    </div>
  );
}
