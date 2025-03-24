import React from "react";
import { FlexLayout, StackLayout, Card, Text } from "@salt-ds/core";
import {
  SteppedTracker,
  Step,
  useStepReducer,
  SystemStatus,
  SystemStatusContent,
} from "@salt-ds/lab";
import DividerComponent from "../Common/DividerComponent/DividerComponent";
import PersonalInformationStep from "./Steps/PersonalInformationStep";
import AddressStep from "./Steps/AddressStep";
import ConfirmationStep from "./Steps/ConfirmationStep";
import CustomButton from "../Common/CustomBotton/CustomButton";
import ButtonCard from "./Steps/ButtonCard";
import { initialSteps, useFormHandlers } from "../../hooks/useFormHandlers";
import "./UserRegistration.scss";

const UserRegistration: React.FC = () => {
  const [state, dispatch] = useStepReducer(initialSteps);
  const {
    formData,
    errors,
    sameAsPresent,
    submitted,
    handleInputChange,
    handleCheckboxChange,
    handleNext,
    handleSubmit,
    resetForm,
  } = useFormHandlers(state, dispatch);

  return (
    <StackLayout className="userregistration__StackLayout">
      <FlexLayout align="center" justify="center">
        <h1>User Registration</h1>
      </FlexLayout>
      <DividerComponent orientation="horizontal" variant="primary" />
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
