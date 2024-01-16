import { useState } from "react";

function EducationalForm({
  degreeLabelFor,
  schoolLabelFor,
  cityLabelFor,
  countryLabelFor,
  startDateLabelFor,
  endDateDateLabelFor,
  degreeLabel,
  schoolLabel,
  cityLabel,
  countryLabel,
  startDateLabel,
  endDateLabel,
  degreeInputName,
  schoolInputName,
  cityInputName,
  countryInputName,
  startDateInputName,
  endDateInputName,
  degreeInputPlaceholder,
  schoolInputPlaceholder,
  cityInputPlaceholder,
  countryLInputPlaceholder,
  startDateInputPlaceholder,
  endDateInputPlaceholder,
}) {
  return (
    <>
      <label htmlFor={degreeLabelFor}>
        {degreeLabel}
        <input
          type="text"
          name={degreeInputName}
          placeholder={degreeInputPlaceholder}
        />
      </label>
      <label htmlFor={schoolLabelFor}>
        {schoolLabel}
        <input
          type="text"
          name={schoolInputName}
          placeholder={schoolInputPlaceholder}
        />
      </label>
      <label htmlFor={cityLabelFor}>
        {cityLabel}
        <input
          type="text"
          name={cityInputName}
          placeholder={cityInputPlaceholder}
        />
      </label>
      <label htmlFor={countryLabelFor}>
        {countryLabel}
        <input
          type="text"
          name={countryInputName}
          placeholder={countryLInputPlaceholder}
        />
      </label>
      <label htmlFor={startDateLabelFor}>
        {startDateLabel}
        <input
          type="text"
          name={startDateInputName}
          placeholder={startDateInputPlaceholder}
        />
      </label>
      <label htmlFor={endDateDateLabelFor}>
        {endDateLabel}
        <input
          type="text"
          name={endDateInputName}
          placeholder={endDateInputPlaceholder}
        />
      </label>
    </>
  );
}
