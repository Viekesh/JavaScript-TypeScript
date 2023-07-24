import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import EL from '../EventListener/EL';


const Router = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route exact path='/EL' element={<EL />}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default Router;