import { ItemType, MenuItemType } from "antd/es/menu/hooks/useItems";
import iconMap from "@/utils/iconMap";
import {
  YoMenuItemType,
  YoMenuType,
  YoSubMenuType,
  YoMenuGroupType,
  YoMenuDividerType,
} from "@/utils/type";

export const formatMenu = (menuList: YoMenuItemType[]) => {
  const newMenuList: ItemType[] = [];
  menuList.forEach((item) => {
    if ((item as YoMenuDividerType).type === "divider") {
      newMenuList.push(item);
    } else if ((item as YoMenuGroupType).type === "group") {
      item = item as YoMenuGroupType;
      const newChildren: MenuItemType[] = [];
      item.children.forEach((childrenItem) => {
        newChildren.push({
          ...childrenItem,
          icon: iconMap[childrenItem.icon],
        });
      });
      newMenuList.push({
        type: item.type,
        label: item.label,
        children: newChildren,
      });
    } else if ((item as YoSubMenuType).children) {
      item = item as YoSubMenuType;
      newMenuList.push({
        ...item,
        icon: iconMap[item.icon],
        children: formatMenu((item as YoSubMenuType).children),
      });
    } else {
      item = item as YoMenuType;
      newMenuList.push({
        ...item,
        icon: iconMap[item.icon],
      });
    }
  });
  return newMenuList;
};
