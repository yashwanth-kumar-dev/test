import React from "react";
import { FlexLayout, Card } from "@salt-ds/core";
import CustomButton from "../../Common/CustomBotton/CustomButton";

interface ButtonCardProps {
  isLastStep: boolean;
  handleNext: () => void;
  handleSubmit: () => void;
  handlePrevious?: () => void;
}

const ButtonCard: React.FC<ButtonCardProps> = ({
  isLastStep,
  handleNext,
  handleSubmit,
  handlePrevious,
}) => {
  return (
    <Card className="userregistration__ButtonCard">
      <FlexLayout>
        {handlePrevious && (
          <CustomButton
            onClick={handlePrevious}
            appearance="solid"
            sentiment="accented"
          >
            Previous
          </CustomButton>
        )}
        {isLastStep ? (
          <CustomButton
            onClick={handleSubmit}
            appearance="solid"
            sentiment="accented"
          >
            Submit
          </CustomButton>
        ) : (
          <CustomButton
            onClick={handleNext}
            appearance="solid"
            sentiment="accented"
          >
            Next
          </CustomButton>
        )}
      </FlexLayout>
    </Card>
  );
};

export default ButtonCard;
