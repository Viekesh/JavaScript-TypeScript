import * as React from "react";
// import * as ReactDOM from "react-dom/client";
import { createBrowserRouter } from "react-router-dom";
import "./index.css";
import Root from "./Routes/root";

const Main = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
    },
]);

export default Main;
// ReactDOM.createRoot(document.getElementById("root")).render(
//     <React.StrictMode>
//         <RouterProvider router={router} />
//     </React.StrictMode>
// );