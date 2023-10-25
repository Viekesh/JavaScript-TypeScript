import { Route, Routes } from "react-router-dom";
import LandingPage from "../Components/LandingPage/LandingPage";



const ReactRoutes = () => {
    return (
        <>
            <Routes>
                <Route exact path="/" element={<LandingPage />} />
            </Routes>
        </>
    )
}



export default ReactRoutes;