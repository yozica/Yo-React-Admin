import { NavigateFunction } from "react-router-dom";
import {
  BreadcrumbItemType,
  BreadcrumbSeparatorType,
} from "antd/es/breadcrumb/Breadcrumb";
import { routesMap } from "@/router";

type ItemType = Partial<BreadcrumbItemType & BreadcrumbSeparatorType>;

type breadcrumbFnType = (
  pathname: string,
  navigate: NavigateFunction
) => ItemType[];

// 该函数通过router中的routesMap与当前的路由生成antd面包屑组件所需的ItemType数组
export const breadcrumbFn: breadcrumbFnType = (pathname, navigate) => {
  const pathArr =
    pathname === "/" ? ["/"] : pathname.split("/").map((item) => "/" + item);

  const items: ItemType[] = [];

  let nowPath = "";
  for (let i = 0; i < pathArr.length; i++) {
    const path = pathArr[i];
    nowPath += path;
    const newPath = nowPath.slice(1) === "" ? "/" : nowPath.slice(1);

    if (i === pathArr.length - 1) {
      items.push({
        title: routesMap[path]?.title,
      });
    } else {
      const item: ItemType = {};
      item.title = routesMap[path]?.title || "undefined";
      if (routesMap[path]?.isLink || false) {
        item.href = newPath;
        item.onClick = (e) => {
          e.preventDefault();
          navigate(newPath);
        };
      }
      if (routesMap[path]?.menu || false) {
        item.menu = {
          items: routesMap[path].menu,
          onClick: ({ key }) => {
            navigate(key);
          },
        };
      }
      items.push(item);
    }
  }

  return items;
};
