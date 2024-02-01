import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { Layout, Button } from "antd";
import YoAvatar from "./avatar";

function YoHeader({
  collapsed,
  setCollapsed,
  colorBgContainer,
}: {
  collapsed: boolean;
  setCollapsed: React.Dispatch<React.SetStateAction<boolean>>;
  colorBgContainer: string;
}) {
  return (
    <Layout.Header
      style={{
        padding: 0,
        background: colorBgContainer,
        borderBottom: "1px solid #e5e7eb",
        userSelect: "none",
      }}
    >
      <div className="flex justify-between items-center px-[20px]">
        <div>
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: "16px",
              width: 40,
              height: 40,
            }}
          />
        </div>
        <div className="flex w-fit h-[40px]">
          <YoAvatar></YoAvatar>
        </div>
      </div>
    </Layout.Header>
  );
}

export default YoHeader;
