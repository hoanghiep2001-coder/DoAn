import Layout from "../components/layout";
import Register from "../components/layout/components/Register";
// public routes
const publicRoutes = [
    {path: "/", component: Layout},
    {path: "/register", component: Register},
];

const privateRoutes = [

];

export {publicRoutes, privateRoutes}