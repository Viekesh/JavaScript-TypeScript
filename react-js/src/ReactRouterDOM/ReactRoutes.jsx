import { Route, Routes } from "react-router-dom";
import LandingPage from "../Components/LandingPage/LandingPage";
import UseState from "../Components/Tutorials/HooksAPI/UseState/UseState";



const ReactRoutes = () => {
    return (
        <>
            <Routes>
                <Route exact path="/" element={<LandingPage />} />
                <Route path="/UseState" element={<UseState />} />
            </Routes>
        </>
    )
}



export default ReactRoutes;