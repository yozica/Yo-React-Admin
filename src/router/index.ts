import { createBrowserRouter, RouteObject } from "react-router-dom";
import NotFound from "@/view/error/404";
import Login from "@/view/login/login";
import YoLayout from "@/layout/layout";
import Home from "@/view/home/home";
import Devices from "@/view/devices/devices";

// key应该设置为对应的完整路由
interface MenuItemType {
  key: string;
  label: string;
  danger?: boolean;
  disabled?: boolean;
}

// 为路由表配置对应路由名，方便给路由添加自定义信息
export const routesMap: {
  [key: string]: { title: string; isLink?: boolean; menu?: MenuItemType[] };
} = {
  "/": {
    title: "管理面板",
    isLink: true,
  },
  "/devices": {
    title: "设备管理",
    isLink: true,
  },
  "/sub": {
    title: "分级测试",
    menu: [
      {
        key: "/sub/sub1",
        label: "首页",
      },
      {
        key: "/sub/sub2",
        label: "设备管理",
      },
    ],
  },
  "/sub1": {
    title: "首页",
    isLink: true,
  },
  "/sub2": {
    title: "设备管理",
    isLink: true,
  },
  "/sub3": {
    title: "三级测试",
    menu: [
      {
        key: "/sub/sub3/subTest1",
        label: "设备管理",
      },
    ],
  },
  "/subTest1": {
    title: "设备管理",
    isLink: true,
  },
};

const menuRoutes: RouteObject[] = [
  {
    index: true,
    Component: Home,
  },
  {
    path: "devices",
    Component: Devices,
  },
  {
    children: [
      {
        path: "sub/sub1",
        Component: Home,
      },
      {
        path: "sub/sub2",
        Component: Devices,
      },
      {
        children: [
          {
            path: "sub/sub3/subTest1",
            Component: Devices,
          },
        ],
      },
    ],
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
