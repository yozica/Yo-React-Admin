import { createBrowserRouter, RouteObject } from "react-router-dom";
import Layout from "@/layout/layout";
import Login from "@/view/login/login";
import NotFound from "@/view/error/404";

const menuRoutes: RouteObject[] = [];

const routes: RouteObject[] = [
  {
    path: "/",
    Component: Layout,
    children: menuRoutes,
  },
  {
    path: "/login",
    Component: Login,
  },
  {
    path: "*",
    Component: NotFound,
  },
];

const router = createBrowserRouter(routes);

export default router;
