import React from "react";
import { FormData } from "../../../interfaces/FormData";

interface ConfirmationStepProps {
  formData: FormData;
}

const ConfirmationStep: React.FC<ConfirmationStepProps> = ({ formData }) => {
  return (
    <>
      <h3>Confirmation</h3>
      <p>Name: {formData.name}</p>
      <p>Mobile Number: {formData.mobileNumber}</p>
      <p>Email: {formData.email}</p>
      <p>Door No: {formData.doorNo}</p>
      <p>Block/Street: {formData.blockStreet}</p>
      <p>City: {formData.city}</p>
      <p>State: {formData.state}</p>
      <p>Pincode: {formData.pincode}</p>
      <p>Permanent Door No: {formData.permanentDoorNo}</p>
      <p>Permanent Block/Street: {formData.permanentBlockStreet}</p>
      <p>Permanent City: {formData.permanentCity}</p>
      <p>Permanent State: {formData.permanentState}</p>
      <p>Permanent Pincode: {formData.permanentPincode}</p>
    </>
  );
};

export default ConfirmationStep;
