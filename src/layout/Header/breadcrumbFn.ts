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

export const breadcrumbFn: breadcrumbFnType = (pathname, navigate) => {
  const pathArr =
    pathname === "/" ? ["/"] : pathname.split("/").map((item) => "/" + item);

  const items: ItemType[] = [];

  for (let i = 0; i < pathArr.length; i++) {
    const path = pathArr[i];

    if (i === pathArr.length - 1) {
      items.push({
        title: routesMap[path]?.title,
      });
    } else {
      const item: ItemType = {};
      item.title = routesMap[path]?.title || "undefined";
      if (routesMap[path]?.isLink || false) {
        item.href = path;
        item.onClick = (e) => {
          e.preventDefault();
          navigate(path);
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
