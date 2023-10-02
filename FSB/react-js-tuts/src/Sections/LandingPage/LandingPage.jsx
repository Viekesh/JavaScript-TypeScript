import React from "react";
import "./LandingPage.css";
import ToggleButton from "../MiniProjects/ToggleButton/ToggleButton";
import ThemeSwitch from "../MiniProjects/ThemeSwitcher/ThemeSwitch";
import ParentComponent from "../MiniProjects/UserCard/ParentComponent";
import TypeCheck from "../MiniProjects/PropsTypeCheck/TypeCheck";
import RenderList from "../MiniProjects/RenderListUsingMap/RenderList";
import RenderMovies from "../MiniProjects/MovieUsingMapFun/RenderMovies";

const LandingPage = () => {
  return (
    <>
      <div className="landing_page">
        <ToggleButton />
        <ThemeSwitch />
        <ParentComponent />
        <TypeCheck />
        <RenderList />
        <RenderMovies />
      </div>
    </>
  );
};

export default LandingPage;
