import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Components from '../BasicsOfReactJs/Components';



const Router = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route exact path="/Components" element={<Components />}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default Router;


