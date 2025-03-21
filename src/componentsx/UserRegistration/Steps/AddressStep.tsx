import React from "react";
import { Checkbox, Text } from "@salt-ds/core";
import CustomFormField from "../../Common/CustomFormField/CustomFormField";
import { Errors, FormData } from "../../../interfaces/FormData";
import { GridLayout } from "@salt-ds/core";
import DividerComponent from "../../Common/DividerComponent/DividerComponent";

interface AddressStepProps {
  formData: FormData;
  errors: Errors;
  sameAsPresent: boolean;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleCheckboxChange: () => void;
}

const AddressStep: React.FC<AddressStepProps> = ({
  formData,
  errors,
  sameAsPresent,
  handleInputChange,
  handleCheckboxChange,
}) => {
  return (
    <>
      <GridLayout columns={{ md: 6, lg: 6, xl: 6 }}>
        <Text color="primary">Present Address</Text>
      </GridLayout>
      <br />
      <GridLayout columns={{ md: 6, lg: 6, xl: 6 }}>
        <CustomFormField
          label="Door No"
          value={formData.doorNo}
          onChange={handleInputChange}
          dataField="doorNo"
          validationStatus={errors.doorNo ? "error" : undefined}
          errorMessage={errors.doorNo}
        />
        <CustomFormField
          label="Block/Street"
          value={formData.blockStreet}
          onChange={handleInputChange}
          dataField="blockStreet"
          validationStatus={errors.blockStreet ? "error" : undefined}
          errorMessage={errors.blockStreet}
        />
        <CustomFormField
          label="City"
          value={formData.city}
          onChange={handleInputChange}
          dataField="city"
          validationStatus={errors.city ? "error" : undefined}
          errorMessage={errors.city}
        />
        <CustomFormField
          label="State"
          value={formData.state}
          onChange={handleInputChange}
          dataField="state"
          validationStatus={errors.state ? "error" : undefined}
          errorMessage={errors.state}
        />
        <CustomFormField
          label="Pincode"
          value={formData.pincode}
          onChange={handleInputChange}
          dataField="pincode"
          validationStatus={errors.pincode ? "error" : undefined}
          errorMessage={errors.pincode}
        />
      </GridLayout>
      <br />
      <br />
      <DividerComponent orientation="horizontal" variant="secondary" />
      <br />
      <Checkbox
        checked={sameAsPresent}
        onChange={handleCheckboxChange}
        label="Permanent address same as present address"
      />
      <br />
      <br />
      <GridLayout columns={{ md: 6, lg: 6, xl: 6 }}>
        <Text color="primary">Permanent Address</Text>
      </GridLayout>
      <GridLayout columns={{ lg: 6, xl: 6 }}>
        <CustomFormField
          label="Permanent Door No"
          value={formData.permanentDoorNo}
          onChange={handleInputChange}
          dataField="permanentDoorNo"
          readOnly={sameAsPresent}
          validationStatus={errors.permanentDoorNo ? "error" : undefined}
          errorMessage={errors.permanentDoorNo}
        />
        <CustomFormField
          label="Permanent Block/Street"
          value={formData.permanentBlockStreet}
          onChange={handleInputChange}
          dataField="permanentBlockStreet"
          readOnly={sameAsPresent}
          validationStatus={errors.permanentBlockStreet ? "error" : undefined}
          errorMessage={errors.permanentBlockStreet}
        />
        <CustomFormField
          label="Permanent City"
          value={formData.permanentCity}
          onChange={handleInputChange}
          dataField="permanentCity"
          readOnly={sameAsPresent}
          validationStatus={errors.permanentCity ? "error" : undefined}
          errorMessage={errors.permanentCity}
        />
        <CustomFormField
          label="Permanent State"
          value={formData.permanentState}
          onChange={handleInputChange}
          dataField="permanentState"
          readOnly={sameAsPresent}
          validationStatus={errors.permanentState ? "error" : undefined}
          errorMessage={errors.permanentState}
        />
        <CustomFormField
          label="Permanent Pincode"
          value={formData.permanentPincode}
          onChange={handleInputChange}
          dataField="permanentPincode"
          readOnly={sameAsPresent}
          validationStatus={errors.permanentPincode ? "error" : undefined}
          errorMessage={errors.permanentPincode}
        />
      </GridLayout>
    </>
  );
};

export default AddressStep;
