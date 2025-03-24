import React, { useState } from "react";
import {
  Button,
  Drawer,
  DrawerCloseButton,
  FormField,
  FormFieldHelperText,
  FormFieldLabel,
  H2,
  Input,
  StackLayout,
  Text,
  useId,
} from "@salt-ds/core";
import { Link } from "react-router-dom";

const DrawerComponent = () => {
  const [open, setOpen] = useState(false);
  const id = useId();
  const handleRequestOpen = () => {
    setOpen(true);
  };
  const onOpenChange = (newOpen: boolean) => {
    setOpen(newOpen);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Button onClick={handleRequestOpen}>Drawer</Button>{" "}
      <Drawer
        open={open}
        onOpenChange={onOpenChange}
        position="left"
        style={{ width: 200 }}
        aria-labelledby={id}
        variant="secondary"
        className="--salt-spacing-25"
      >
        <DrawerCloseButton onClick={handleClose} />
        <StackLayout>
          <Link to="/">User Registration</Link>
          <Link to="/dashboard">DashBoard</Link>
        </StackLayout>
      </Drawer>
    </>
  );
};

export default DrawerComponent;
