import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Components from '../BasicsOfReactJs/Components';
import PropsStarter from '../UI/PropsStarter';



const Router = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route exact path="/" element={<Components />}></Route>
                    <Route exact path="/PropsStarter" element={<PropsStarter />}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default Router;


