import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Components from '../BasicsOfReactJs/Components';
import PropsStarter from '../UI/PropsStarter';
import MapFunction from '../RenderingList/MapFunction';
import CodeBox from '../MiniProjects/P1/CodeBox';



const Router = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route exact path="/" element={<Components />}></Route>
                    <Route exact path="/PropsStarter" element={<PropsStarter />}></Route>
                    <Route exact path="/MapFunction" element={<MapFunction />}></Route>
                    <Route exact path="/CodeBox" element={<CodeBox />}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default Router;


