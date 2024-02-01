import { Outlet } from "react-router-dom";
import { Layout } from "antd";

function YoMain({ colorBgContainer }: { colorBgContainer: string }) {
  return (
    <Layout.Content
      style={{
        margin: 0,
        padding: 0,
        minHeight: 280,
        background: colorBgContainer,
        borderRadius: 0,
      }}
    >
      <Outlet></Outlet>
    </Layout.Content>
  );
}

export default YoMain;
