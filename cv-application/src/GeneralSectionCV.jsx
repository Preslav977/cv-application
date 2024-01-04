import { useState } from "react";
import "./GeneralSectionStyle.css";

function CVGeneralSection({ label, placeholder }) {
  const [text, setText] = useState("");

  function handleChange(e) {
    e.preventDefault();
    setText(e.target.value);
  }

  return (
    <div>
      <form onSubmit={handleChange}>
        <label>
          {label}
          <input
            type="text"
            placeholder={placeholder}
            value={text}
            onChange={handleChange}
          />
        </label>
      </form>
    </div>
  );
}

export function CVGeneralComponentSectionComponent() {
  return (
    <div>
      <h2>General Information</h2>
      <CVGeneralSection label="Full Name" placeholder="Enter your full name" />
      <CVGeneralSection label="Email" placeholder="Enter your email" />
      <CVGeneralSection
        label="Phone Number"
        placeholder="Enter your phone number"
      />
      <CVGeneralSection
        label="City and province"
        placeholder="Enter your city and province"
      />
      <div>
        <button type="submit"> ✓ Send</button>
      </div>
    </div>
  );
}
