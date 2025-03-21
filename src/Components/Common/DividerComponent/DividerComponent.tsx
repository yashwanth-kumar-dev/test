import React from "react";
import { Divider } from "@salt-ds/core";

interface DividerComponentProps {
  orientation: "horizontal" | "vertical";
  variant: "primary" | "secondary";
}

const DividerComponent: React.FC<DividerComponentProps> = ({
  orientation,
  variant,
}) => {
  return <Divider orientation={orientation} variant={variant} />;
};

export default DividerComponent;
