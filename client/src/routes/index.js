import Layout from "../components/layout";
import Login from "../components/layout/components/Login";
import Register from "../components/layout/components/Register";
// public routes
const publicRoutes = [
  { path: "/", component: Layout },
  { path: "/register", component: Register },
  { path: "/login", component: Login },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
