import React from "react";
import Header from "../components/Common/Header/Header";
import DrawerComponent from "../components/Common/Drawer/DrawerComponent";
import SaltAgGrid from "../components/SaltAgGrid/SaltAgGrid";

const Dashboard = () => {
  return (
    <div>
      <Header />
      <DrawerComponent />
      <SaltAgGrid />
    </div>
  );
};

export default Dashboard;
