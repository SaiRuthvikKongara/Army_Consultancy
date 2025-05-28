import React, { useState } from "react";
import "./Signup.css";

const Signup = () => {
  const [formData, setFormData] = useState({
    armyNumber: "",
    rank: "",
    unitDetails: "",
    enrollmentDate: "",
    fullName: "",
    dateOfBirth: "",
    fatherOrHusbandName: "",
    contactInfo: "",
    address: "",
    identityCard: "",
    panCard: "",
    aadhaarCard: "",
    educationalDocs: "",
    bankDetails: "",
    ppoDetails: "",
    additionalDocs: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
  };

  return (
    <div className="signupPage">
      <form onSubmit={handleSubmit}>
        {/* Service Details */}
        <fieldset>
          <legend>Service Details</legend>
          <div className="input-group">
            <div className="input-field">
              <label>Army Number:</label>
              <input
                type="text"
                name="armyNumber"
                value={formData.armyNumber}
                onChange={handleChange}
                required
              />
            </div>
            <div className="input-field">
              <label>Rank and Designation:</label>
              <input
                type="text"
                name="rank"
                value={formData.rank}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="input-group">
            <div className="input-field">
              <label>Unit/Regiment Details:</label>
              <input
                type="text"
                name="unitDetails"
                value={formData.unitDetails}
                onChange={handleChange}
              />
            </div>
            <div className="input-field">
              <label>Date of Enrollment:</label>
              <input
                type="date"
                name="enrollmentDate"
                value={formData.enrollmentDate}
                onChange={handleChange}
              />
            </div>
          </div>
        </fieldset>

        {/* Personal Information */}
        <fieldset>
          <legend>Personal Information</legend>
          <div className="input-group">
            <div className="input-field">
              <label>Full Name:</label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="input-field">
              <label>Date of Birth:</label>
              <input
                type="date"
                name="dateOfBirth"
                value={formData.dateOfBirth}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="input-group">
            <div className="input-field">
              <label>Father's Name:</label>
              <input
                type="text"
                name="fatherOrHusbandName"
                value={formData.fatherOrHusbandName}
                onChange={handleChange}
              />
            </div>
            <div className="input-field">
              <label>Phone Number:</label>
              <input
                type="text"
                name="contactInfo"
                value={formData.contactInfo}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="input-field">
            <label>Permanent Address:</label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
            />
          </div>
        </fieldset>

        {/* Identity Documents */}
        <fieldset>
          <legend>Identity Documents</legend>
          <div className="input-group">
            <div className="input-field">
              <label>Service Identity Card:</label>
              <input
                type="file"
                name="identityCard"
                value={formData.identityCard}
                onChange={handleChange}
              />
            </div>
            <div className="input-field">
              <label>PAN Card number:</label>
              <input
                type="text"
                name="panCard"
                value={formData.panCard}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="input-field">
            <label>Aadhaar Card number:</label>
            <input
              type="text"
              name="aadhaarCard"
              value={formData.aadhaarCard}
              onChange={handleChange}
            />
          </div>
        </fieldset>

        {/* Additional Details */}
   
<fieldset>
  <legend>Additional Details</legend>
  <div className="input-group">
    <div className="input-field">
      <label>SSC Memo:</label>
      <input
        type="file"
        name="educationalDocs"
        onChange={handleChange}
      />
    </div>
    <div className="input-field">
      <label>Bank Details:</label>
      <input
        type="file"
        name="bankDetails"
        onChange={handleChange}
      />
    </div>
  </div>
  <div className="input-group">
    <div className="input-field">
      <label>Pension Payment Order (PPO):</label>
      <input
        type="file"
        name="ppoDetails"
        onChange={handleChange}
      />
    </div>
    <div className="input-field">
      <label>Additional Documents:</label>
      <input
        type="file"
        name="additionalDocs"
        onChange={handleChange}
      />
    </div>
  </div>
</fieldset>


        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Signup;
