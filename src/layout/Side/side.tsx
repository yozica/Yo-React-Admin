import { useEffect, useState } from "react";
import { Layout, Menu, Button } from "antd";
import { ItemType } from "antd/es/menu/hooks/useItems";
import { getUserMenu } from "@/api/user";
import { formatMenu } from "./menuFn";
import "./side.css";

function YoSide({
  collapsed,
  setCollapsed,
  colorBgContainer,
  collapsedWidth,
}: {
  collapsed: boolean;
  setCollapsed: React.Dispatch<React.SetStateAction<boolean>>;
  colorBgContainer: string;
  collapsedWidth: number;
}) {
  const [menuList, setMenuList] = useState<ItemType[]>([]);

  useEffect(() => {
    (async () => {
      const { data: res } = await getUserMenu();
      const newMenuList = formatMenu(res);
      setMenuList(newMenuList);
    })();
  }, []);

  const menuClickHandler = ({ key }: { key: string }) => {
    console.log(key);
    // console.log(keyPath);
    // console.log(domEvent);
  };

  return (
    <Layout.Sider
      trigger={null}
      collapsedWidth={collapsedWidth}
      collapsible
      collapsed={collapsed}
      width={240}
      style={{
        background: colorBgContainer,
        position: collapsedWidth === 0 ? "absolute" : "relative",
        zIndex: 1,
        userSelect: "none",
      }}
    >
      <div
        className="flex justify-center items-center w-full h-[64px] text-[25px] font-extrabold truncate"
        style={{ borderRight: "1px solid #e5e7eb" }}
      >
        {collapsed ? "管理" : "管理面板"}
      </div>
      <Menu
        mode="inline"
        defaultSelectedKeys={["1"]}
        className="w-full flex-1"
        items={menuList}
        onClick={menuClickHandler}
      />
      {collapsedWidth === 0 && (
        <Button
          className="w-[90%] mx-auto"
          type="primary"
          onClick={() => {
            setCollapsed(true);
          }}
        >
          收起
        </Button>
      )}
    </Layout.Sider>
  );
}

export default YoSide;
