import { useState } from "react";
import { Layout, theme } from "antd";
import YoSide from "./Side/side";
import YoHeader from "./Header/header";
import YoMain from "./Main/main";

function YoLayout() {
  const [collapsed, setCollapsed] = useState(
    window.innerWidth < 1200 ? true : false
  );
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const [collapsedWidth, setCollapsedWidth] = useState(
    window.innerWidth < 500 ? 0 : 80
  );

  window.addEventListener("resize", () => {
    if (window.innerWidth < 1200) {
      if (window.innerWidth < 500) {
        setCollapsedWidth(0);
      } else {
        setCollapsedWidth(80);
      }
      setCollapsed(true);
    } else {
      setCollapsedWidth(80);
      setCollapsed(false);
    }
  });

  return (
    <Layout
      className="w-[100vw] h-[100vh] min-w-[300px]"
      style={{ position: "relative", flexDirection: "row" }}
    >
      <YoSide
        collapsed={collapsed}
        setCollapsed={setCollapsed}
        colorBgContainer={colorBgContainer}
        collapsedWidth={collapsedWidth}
      ></YoSide>
      <Layout>
        <YoHeader
          collapsed={collapsed}
          setCollapsed={setCollapsed}
          colorBgContainer={colorBgContainer}
        ></YoHeader>
        <YoMain colorBgContainer={colorBgContainer}></YoMain>
      </Layout>
    </Layout>
  );
}

export default YoLayout;
