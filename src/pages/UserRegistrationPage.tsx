import React from "react";
import Header from "../components/Common/Header/Header";
import UserRegistration from "../components/UserRegistration/UserRegistration";
import DrawerComponent from "../components/Common/Drawer/DrawerComponent";

const UserRegistrationPage = () => {
  return (
    <div>
      <Header />
      <DrawerComponent />
      <UserRegistration />
    </div>
  );
};

export default UserRegistrationPage;
