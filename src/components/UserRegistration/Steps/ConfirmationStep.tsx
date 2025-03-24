import React from "react";
import { FormData } from "../../../interfaces/FormData";
import { formFields } from "../../../data/formFields";

interface ConfirmationStepProps {
  formData: FormData;
}

const ConfirmationStep: React.FC<ConfirmationStepProps> = ({ formData }) => {
  return (
    <>
      <h3>Confirmation</h3>
      {Object.keys(formFields).map((fieldKey) => (
        <p key={fieldKey}>
          {formFields[fieldKey as keyof FormData]}:{" "}
          {formData[fieldKey as keyof FormData]}
        </p>
      ))}
    </>
  );
};

export default ConfirmationStep;
