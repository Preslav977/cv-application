import { useState } from "react";

function ExperienceForm({
  jobTitleLabelFor,
  companyLabelFor,
  startDateLabelFor,
  endDateLabelFor,
  descriptionLabelFor,
  jobtTitleLabel,
  companyLabel,
  startDateLabel,
  endDateLabel,
  descriptionLabel,
  jobTitleInputName,
  companyInputName,
  startDateInputName,
  endDateInputName,
  descriptionInputName,
  jobTitleInputPlaceholder,
  companyInputPlaceholder,
  startDateInputPlaceholder,
  endDateInputPlaceholder,
  descriptionInputPlaceholder,
}) {
  return (
    <>
      <label htmlFor={jobTitleLabelFor}>
        {jobtTitleLabel}
        <input
          type="text"
          name={jobTitleInputName}
          placeholder={jobTitleInputPlaceholder}
        />
      </label>
      <label htmlFor={companyLabelFor}>
        {companyLabel}
        <input
          type="text"
          name={companyInputName}
          placeholder={companyInputPlaceholder}
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
      <label htmlFor={endDateLabelFor}>
        {endDateLabel}
        <input
          type="text"
          name={endDateInputName}
          placeholder={endDateInputPlaceholder}
        />
      </label>
      <label htmlFor={descriptionLabelFor}>
        {descriptionLabel}
        <textarea
          className={styles.textAreaContainer}
          type="text"
          name={descriptionInputName}
          placeholder={descriptionInputPlaceholder}
          cols={30}
          rows={5}
        ></textarea>
      </label>
    </>
  );
}
