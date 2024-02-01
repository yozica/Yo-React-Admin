import { createBrowserRouter, RouteObject } from "react-router-dom";
import NotFound from "@/view/error/404";
import Login from "@/view/login/login";
import YoLayout from "@/layout/layout";
import Home from "@/view/home/home";
import Devices from "@/view/devices/devices";

const menuRoutes: RouteObject[] = [
  {
    index: true,
    Component: Home,
  },
  {
    path: "devices",
    Component: Devices,
  },
];

const routes: RouteObject[] = [
  {
    path: "/",
    Component: YoLayout,
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
