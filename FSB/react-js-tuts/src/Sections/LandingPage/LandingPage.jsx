import React from "react";
import "./LandingPage.css";
import ToggleButton from "../MiniProjects/ToggleButton/ToggleButton";
import ThemeSwitch from "../MiniProjects/ThemeSwitcher/ThemeSwitch";

const LandingPage = () => {
  return (
    <>
      <div className="landing_page">
        <ToggleButton />
        <ThemeSwitch />
      </div>
    </>
  );
};

export default LandingPage;
