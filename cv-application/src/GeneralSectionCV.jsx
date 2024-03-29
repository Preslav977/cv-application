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

function LivePreview({ fullName, email, phoneNumber, cityAndProvince }) {
  return (
    <div>
      <h2>{fullName}</h2>
      <div>
        <p>{email}</p>
        <p>{phoneNumber}</p>
        <p>{cityAndProvince}</p>
      </div>
    </div>
  );
}

let nextId = 0;

export function GeneralSection() {
  const [formData, setFormData] = useState([
    {
      fullName: "",
      email: "",
      phoneNumber: "",
      cityAndProvince: "",
      id: nextId,
    },
  ]);

  function handleSubmit(e) {
    e.preventDefault();
    const FormDataObject = new FormData(e.target);
    const fullNameData = FormDataObject.get("full-name");
    const emailData = FormDataObject.get("email");
    const phoneNumberData = FormDataObject.get("phone-number");
    const cityAndProvinceData = FormDataObject.get("city-and-province");
    const newObjectSubmittedData = {
      ...formData,
      fullName: fullNameData,
      email: emailData,
      phoneNumber: phoneNumberData,
      cityAndProvince: cityAndProvinceData,
      id: nextId++,
    };
    setFormData([newObjectSubmittedData]);
  }

  return (
    <div>
      <h2>General Information</h2>
      {formData.map((formObj) => (
        <div key={formObj.id}>
          <form action="#" onSubmit={handleSubmit}>
            <GeneralForm
              fullNameLabelFor="fullName"
              fullNameLabel="Full Name"
              fullNameInputName="full-name"
              fullNameInputPlaceholder="Full Name"
              emailLabelForLabelFor="email"
              emailLabel="Email"
              emailInputName="email"
              emailInputPlaceholder="Email"
              phoneNumberLabelFor="phone-number"
              phoneNumberLabel="Phone Number"
              phoneNumberInputName="phone-number"
              phoneNumberInputPlaceholder="Phone Number"
              cityAndProvinceLabelFor="city-and-province"
              cityAndProvinceLabel="City and Province"
              cityAndProvinceInputName="city-and-province"
              cityAndProvinceInputPlaceholder="City, Province"
            ></GeneralForm>
            <button type="submit">Send</button>
          </form>
        </div>
      ))}
      <LivePreview
        fullName={formData[0].fullName}
        email={formData[0].email}
        phoneNumber={formData[0].phoneNumber}
        cityAndProvince={formData[0].cityAndProvince}
      ></LivePreview>
    </div>
  );
}
