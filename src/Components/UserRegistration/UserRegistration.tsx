import React, { useState, useEffect } from "react";
import { FlexLayout, StackLayout, Card, Text } from "@salt-ds/core";
import {
  Step,
  type StepRecord,
  SteppedTracker,
  useStepReducer,
  SystemStatus,
  SystemStatusContent,
} from "@salt-ds/lab";
import "./UserRegistration.scss";
import DividerComponent from "../Common/DividerComponent/DividerComponent";
import PersonalInformationStep from "./Steps/PersonalInformationStep";
import AddressStep from "./Steps/AddressStep";
import ConfirmationStep from "./Steps/ConfirmationStep";
import CustomButton from "../Common/CustomBotton/CustomButton";
import ButtonCard from "./Steps/ButtonCard";
import useFetchData from "../../hooks/useFetchData";

const initialSteps: StepRecord[] = [
  { id: "step-1", label: "Personal Information", stage: "active" },
  { id: "step-2", label: "Address" },
  { id: "step-3", label: "Confirmation" },
];

interface FormData {
  name: string;
  mobileNumber: string;
  email: string;
  doorNo: string;
  blockStreet: string;
  city: string;
  state: string;
  pincode: string;
  permanentDoorNo: string;
  permanentBlockStreet: string;
  permanentCity: string;
  permanentState: string;
  permanentPincode: string;
}

const UserRegistration: React.FC = () => {
  const [state, dispatch] = useStepReducer(initialSteps);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    mobileNumber: "",
    email: "",
    doorNo: "",
    blockStreet: "",
    city: "",
    state: "",
    pincode: "",
    permanentDoorNo: "",
    permanentBlockStreet: "",
    permanentCity: "",
    permanentState: "",
    permanentPincode: "",
  });
  const [sameAsPresent, setSameAsPresent] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [apiData, setApiData] = useState<any>(null);

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
    if (stepId === "step-1") {
      if (!formData.name) newErrors.name = "Name is required";
      if (!formData.mobileNumber)
        newErrors.mobileNumber = "Mobile number is required";
      if (!formData.email) newErrors.email = "Email is required";
    } else if (stepId === "step-2") {
      if (!formData.doorNo) newErrors.doorNo = "Door No is required";
      if (!formData.blockStreet)
        newErrors.blockStreet = "Block/Street is required";
      if (!formData.city) newErrors.city = "City is required";
      if (!formData.state) newErrors.state = "State is required";
      if (!formData.pincode) newErrors.pincode = "Pincode is required";
      if (!sameAsPresent) {
        if (!formData.permanentDoorNo)
          newErrors.permanentDoorNo = "Permanent Door No is required";
        if (!formData.permanentBlockStreet)
          newErrors.permanentBlockStreet = "Permanent Block/Street is required";
        if (!formData.permanentCity)
          newErrors.permanentCity = "Permanent City is required";
        if (!formData.permanentState)
          newErrors.permanentState = "Permanent State is required";
        if (!formData.permanentPincode)
          newErrors.permanentPincode = "Permanent Pincode is required";
      }
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
    setFormData({
      name: "",
      mobileNumber: "",
      email: "",
      doorNo: "",
      blockStreet: "",
      city: "",
      state: "",
      pincode: "",
      permanentDoorNo: "",
      permanentBlockStreet: "",
      permanentCity: "",
      permanentState: "",
      permanentPincode: "",
    });
    setSameAsPresent(false);
    setSubmitted(false);
    setErrors({});
    dispatch({ type: "reset" });
  };

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => setApiData(json));
  }, []);

  return (
    <StackLayout className="userregistration__StackLayout">
      <FlexLayout align="center" justify="center">
        <h1>User Registration</h1>
      </FlexLayout>
      <DividerComponent orientation="horizontal" variant="primary" />
      {/* {apiData && apiData.map((item: any) => <div>{item.title}</div>)} */}
      {!submitted ? (
        <>
          <SteppedTracker>
            {state.steps.map((step) => (
              <Step key={step.id} {...step} />
            ))}
          </SteppedTracker>
          <Card>
            {state.activeStep?.id === "step-1" && (
              <PersonalInformationStep
                formData={formData}
                errors={errors}
                handleInputChange={handleInputChange}
              />
            )}
            {state.activeStep?.id === "step-2" && (
              <AddressStep
                formData={formData}
                errors={errors}
                sameAsPresent={sameAsPresent}
                handleInputChange={handleInputChange}
                handleCheckboxChange={handleCheckboxChange}
              />
            )}
            {state.activeStep?.id === "step-3" && (
              <ConfirmationStep formData={formData} />
            )}
          </Card>
          <ButtonCard
            isLastStep={state.activeStep?.id === "step-3"}
            handleNext={handleNext}
            handleSubmit={handleSubmit}
            handlePrevious={
              state.activeStep?.id !== "step-1"
                ? () => dispatch({ type: "previous" })
                : undefined
            }
          />
        </>
      ) : (
        <div>
          <SystemStatus status="success">
            <SystemStatusContent>
              <Text color="inherit">
                Registration was completed successfully.
              </Text>
            </SystemStatusContent>
          </SystemStatus>
          <br />
          <CustomButton
            onClick={resetForm}
            appearance="solid"
            sentiment="accented"
          >
            Register New User
          </CustomButton>
        </div>
      )}
    </StackLayout>
  );
};

export default UserRegistration;
