import React, { useState, useEffect } from "react";
import "./Header.scss";
import { FlexLayout, Avatar } from "@salt-ds/core";

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = (event: Event) => {
      // Check if the scroll position is greater than 50px
      if (window.scrollY > 50) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  function nameToCategory(name?: string) {
    return name?.replace("Category ", "") ?? "";
  }

  return (
    <header className={isSticky ? "sticky" : ""}>
      <FlexLayout
        align="center"
        justify="space-between"
        className="header_flexLayout"
      >
        <div>
          <span className="company-label">
            <strong>JPMC</strong>
            &nbsp;Testing
          </span>
        </div>
        <div>
          <Avatar
            name="User"
            color="category-2"
            size={1}
            nameToInitials={nameToCategory}
          />
        </div>
      </FlexLayout>
    </header>
  );
};

export default Header;
