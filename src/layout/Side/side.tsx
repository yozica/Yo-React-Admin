import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Layout, Menu, Button } from "antd";
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
        items={[
          {
            key: "1",
            icon: <UserOutlined />,
            label: "nav 1",
          },
          {
            key: "2",
            icon: <VideoCameraOutlined />,
            label: "nav 2",
          },
          {
            key: "3",
            icon: <UploadOutlined />,
            label: "nav 3",
          },
        ]}
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
