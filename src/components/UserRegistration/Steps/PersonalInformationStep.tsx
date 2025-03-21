import React from "react";
import CustomFormField from "../../Common/CustomFormField/CustomFormField";
import { Errors, FormData } from "../../../interfaces/FormData";
import { GridLayout } from "@salt-ds/core";

interface PersonalInformationStepProps {
  formData: FormData;
  errors: Errors;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const PersonalInformationStep: React.FC<PersonalInformationStepProps> = ({
  formData,
  errors,
  handleInputChange,
}) => {
  return (
    <GridLayout columns={{ md: 4, lg: 4, xl: 4 }}>
      <CustomFormField
        label="Name"
        value={formData.name}
        onChange={handleInputChange}
        dataField="name"
        validationStatus={errors.name ? "error" : undefined}
        errorMessage={errors.name}
      />
      <CustomFormField
        label="Mobile Number"
        value={formData.mobileNumber}
        onChange={handleInputChange}
        dataField="mobileNumber"
        validationStatus={errors.mobileNumber ? "error" : undefined}
        errorMessage={errors.mobileNumber}
      />
      <CustomFormField
        label="Email"
        value={formData.email}
        onChange={handleInputChange}
        dataField="email"
        validationStatus={errors.email ? "error" : undefined}
        errorMessage={errors.email}
      />
    </GridLayout>
  );
};

export default PersonalInformationStep;
