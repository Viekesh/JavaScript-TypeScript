import { Route, Routes } from "react-router-dom";
import UseContextAPI from "../Components/Tutorials/HooksAPI/UseContext/UseContextAPI";
// import LandingPage from "../Components/LandingPage/LandingPage";
// import UseState from "../Components/Tutorials/HooksAPI/UseState/UseState";
// import UseEffectHook from "../Components/Tutorials/HooksAPI/UseEffect/UseEffectHook";
// import StockApp from "../Components/Tutorials/HooksAPI/UseEffect/Example/StockApp";



const ReactRoutes = () => {
    return (
        <>
            <Routes>
                {/* <Route exact path="/" element={<LandingPage />} /> */}
                {/* <Route path="/UseState" element={<UseState />} /> */}
                {/* <Route exact path="/" element={<UseEffectHook />} /> */}
                {/* <Route exact path="/" element={<StockApp />} /> */}
                <Route exact path="/" element={<UseContextAPI />} />
            </Routes>
        </>
    )
}



export default ReactRoutes;