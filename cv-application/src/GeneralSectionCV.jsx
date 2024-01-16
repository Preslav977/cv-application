import { useState } from "react";

function GeneralForm({
  fullNameLabelFor,
  emailLabelFor,
  phoneNumberLabelFor,
  cityAndProvinceLabelFor,
  fullNameLabel,
  emailLabel,
  phoneNumberLabel,
  cityAndProvinceLabel,
  fullNameInputName,
  emailInputName,
  phoneNumberInputName,
  cityAndProvinceInputName,
  fullNameInputPlaceholder,
  emailInputPlaceholder,
  phoneNumberInputPlaceholder,
  cityAndProvinceInputPlaceholder,
}) {
  return (
    <div>
      <label htmlFor={fullNameLabelFor}>
        {fullNameLabel}
        <input
          type="text"
          name={fullNameInputName}
          placeholder={fullNameInputPlaceholder}
        />
      </label>
      <label htmlFor={emailLabelFor}>
        {emailLabel}
        <input
          type="text"
          name={emailInputName}
          placeholder={emailInputPlaceholder}
        />
      </label>
      <label htmlFor={phoneNumberLabelFor}>
        {phoneNumberLabel}
        <input
          type="text"
          name={phoneNumberInputName}
          placeholder={phoneNumberInputPlaceholder}
        />
      </label>
      <label htmlFor={cityAndProvinceLabelFor}>
        {cityAndProvinceLabel}
        <input
          type="text"
          name={cityAndProvinceInputName}
          placeholder={cityAndProvinceInputPlaceholder}
        />
      </label>
    </div>
  );
}
