import { Breadcrumb } from "antd";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { breadcrumbFn } from "./breadcrumbFn";
import {
  BreadcrumbItemType,
  BreadcrumbSeparatorType,
} from "antd/es/breadcrumb/Breadcrumb";

type ItemType = Partial<BreadcrumbItemType & BreadcrumbSeparatorType>;

function YoBreadcrumb({ pathname }: { pathname: string }) {
  const navigate = useNavigate();

  const [items, setItems] = useState<ItemType[]>([]);

  useEffect(() => {
    const items = breadcrumbFn(pathname, navigate);
    setItems(items);
  }, [navigate, pathname]);

  return <Breadcrumb items={items} />;
}

export default YoBreadcrumb;
