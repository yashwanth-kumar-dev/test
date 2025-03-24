import { useState } from "react";
import { StepRecord } from "@salt-ds/lab";
import { formFields, FormData } from "../data/formFields";

export const initialSteps: StepRecord[] = [
  { id: "step-1", label: "Personal Information", stage: "active" },
  { id: "step-2", label: "Address" },
  { id: "step-3", label: "Confirmation" },
];

const initialFormData: FormData = Object.keys(formFields).reduce((acc, key) => {
  acc[key as keyof FormData] = "";
  return acc;
}, {} as FormData);

const requiredFields: { [key: string]: (keyof FormData)[] } = {
  "step-1": ["name", "mobileNumber", "email"],
  "step-2": ["doorNo", "blockStreet", "city", "state", "pincode"],
};

export const useFormHandlers = (state: any, dispatch: any) => {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [sameAsPresent, setSameAsPresent] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { dataset, value } = e.target;
    const field = dataset.field as keyof FormData;
    setFormData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      [field]: "",
    }));
  };

  const handleCheckboxChange = () => {
    setSameAsPresent(!sameAsPresent);
    if (!sameAsPresent) {
      setFormData((prevData) => ({
        ...prevData,
        permanentDoorNo: prevData.doorNo,
        permanentBlockStreet: prevData.blockStreet,
        permanentCity: prevData.city,
        permanentState: prevData.state,
        permanentPincode: prevData.pincode,
      }));
    }
  };

  const validateStep = (stepId: string) => {
    const newErrors: { [key: string]: string } = {};
    const fieldsToValidate = requiredFields[stepId] || [];

    fieldsToValidate.forEach((field) => {
      if (!formData[field]) {
        newErrors[field] = `${field.replace(/([A-Z])/g, " $1")} is required`;
      }
    });

    if (stepId === "step-2" && !sameAsPresent) {
      [
        "permanentDoorNo",
        "permanentBlockStreet",
        "permanentCity",
        "permanentState",
        "permanentPincode",
      ].forEach((field) => {
        if (!formData[field as keyof FormData]) {
          newErrors[field] = `${field.replace(/([A-Z])/g, " $1")} is required`;
        }
      });
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (state.activeStep?.id && validateStep(state.activeStep.id)) {
      dispatch({ type: "next" });
    }
  };

  const handleSubmit = () => {
    if (state.activeStep?.id && validateStep(state.activeStep.id)) {
      setSubmitted(true);
    }
  };

  const resetForm = () => {
    setFormData(initialFormData);
    setSameAsPresent(false);
    setSubmitted(false);
    setErrors({});
    dispatch({ type: "reset" });
  };

  return {
    formData,
    errors,
    sameAsPresent,
    submitted,
    handleInputChange,
    handleCheckboxChange,
    handleNext,
    handleSubmit,
    resetForm,
  };
};
