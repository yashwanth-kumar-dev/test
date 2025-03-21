import React, {useState, useEffect} from "react";
import { Card, SaltProvider, StackLayout } from "@salt-ds/core";
import "./CheckMode.scss";


const CheckMode = () => {
  // Step 1: Create a state variable to store the current theme
  const [isDarkMode, setIsDarkMode] = useState(
    window.matchMedia('(prefers-color-scheme: dark)').matches
  );

  // Step 2: Set up an effect to listen for changes to the theme
  useEffect(() => {
    const mediaQueryList = window.matchMedia('(prefers-color-scheme: dark)');
    
    // Step 3: Define the listener that updates the state on theme change
    const handleThemeChange = (e: { matches: boolean | ((prevState: boolean) => boolean); }) => {
      setIsDarkMode(e.matches);
    };

    // Step 4: Add the listener
    mediaQueryList.addEventListener('change', handleThemeChange);

    // Cleanup the event listener when the component unmounts
    return () => {
      mediaQueryList.removeEventListener('change', handleThemeChange);
    };
  }, []);
  
  return (
    <SaltProvider theme="custom-theme" mode={isDarkMode ? "dark" : "light"}>
      <Card style={{ minHeight: "unset" }} className="test-card">
        <StackLayout>Current theme: {isDarkMode.toString()}</StackLayout>
      </Card>
    </SaltProvider>
  );
};

export default CheckMode;
