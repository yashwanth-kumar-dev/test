import React from "react";
import {
  FormField,
  FormFieldLabel,
  Input,
  FormFieldHelperText,
} from "@salt-ds/core";

interface CustomFormFieldProps {
  label: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  helperText?: string;
  readOnly?: boolean;
  dataField?: string;
  validationStatus?: "error" | "warning" | "success";
  necessity?: "optional" | "required";
  errorMessage?: string;
}

const CustomFormField: React.FC<CustomFormFieldProps> = ({
  label,
  value,
  onChange,
  helperText,
  readOnly,
  dataField,
  validationStatus,
  necessity,
  errorMessage,
}) => {
  return (
    <FormField validationStatus={validationStatus} necessity={necessity}>
      <FormFieldLabel>{label}</FormFieldLabel>
      <Input
        inputProps={{ "data-field": dataField ?? "" }}
        value={value}
        onChange={onChange}
        readOnly={readOnly}
      />
      {helperText && <FormFieldHelperText>{helperText}</FormFieldHelperText>}
      {validationStatus === "error" && errorMessage && (
        <FormFieldHelperText>{errorMessage}</FormFieldHelperText>
      )}
    </FormField>
  );
};

export default CustomFormField;
