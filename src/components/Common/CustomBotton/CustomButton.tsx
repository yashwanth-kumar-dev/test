import React from "react";
import { Button } from "@salt-ds/core";

interface CustomButtonProps {
  onClick: () => void;
  appearance: "solid" | "outline" | "ghost";
  sentiment: "accented" | "neutral" | "positive" | "negative";
  children: React.ReactNode;
  disabled?: boolean;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  onClick,
  appearance,
  sentiment,
  children,
}) => {
  const mappedAppearance =
    appearance === "outline"
      ? "bordered"
      : appearance === "ghost"
      ? "transparent"
      : appearance;

  return (
    <Button
      onClick={onClick}
      appearance={mappedAppearance}
      sentiment={sentiment}
    >
      {children}
    </Button>
  );
};

export default CustomButton;
