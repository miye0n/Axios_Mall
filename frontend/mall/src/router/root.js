import { Suspense, lazy } from "react";
import todoRouter from "./todoRouter";

const { createBrowserRouter } = require("react-router-dom"); 
const Loading = <div>Loading....</div>
const Main = lazy(() => import("../pages/MainPage"))
const About = lazy(() => import("../pages/AboutPage"))
const TodoIndex = lazy(() => import("../pages/todo/IndexPage"))
const root = createBrowserRouter([

    {
        path: "",
        element: <Suspense fallback={Loading}><Main/></Suspense>
    },
    {
        path: "about",
        element: <Suspense fallback={Loading}><About/></Suspense>
    },
    {
        path: "todo",
        element: <Suspense fallback={Loading}><TodoIndex/></Suspense>,
        children: todoRouter()
    }
    
])

export default root;
function newFunction_1() {
    return lazy(() => import(newFunction()));
}

function newFunction() {
    return "../pages/todo/IndexPage";
}

