import React from "react";



const darkTheme = {
    backgroundColor: "rgba(0,0,0,0.8)",
    color: "rgb(255,255,255)"
};


const lightTheme = {
    backgroundColor: "rgba(255,255,255)",
    color: "rgb(0,0,0,0.95)"
};


const colorTheme = {
    backgroundColor: "rgba(19,19,19,1)",
    color: "rgb(255,215,115,0.95)"
}

const ThemePicker = ({ onSetTheme }) => {
    return (
        <>
            <div className="theme_picker">
                <div className="theme_btn">
                    <div
                        className="theme_btn light_theme"
                        onClick={() => onSetTheme(lightTheme)}
                    />

                    <div
                        className="theme_btn dark_theme"
                        onClick={() => onSetTheme(darkTheme)}
                    />

                    <div
                        className="theme_btn color_theme"
                        onClick={() => onSetTheme(colorTheme)}
                    />
                </div>
            </div>
        </>
    )
};



export default ThemePicker;
