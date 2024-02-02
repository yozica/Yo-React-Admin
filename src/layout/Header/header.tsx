import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { Layout, Button } from "antd";
import YoAvatar from "./avatar";
import YoBreadcrumb from "./breadcrumb";

function YoHeader({
  collapsed,
  setCollapsed,
  colorBgContainer,
  pathname,
}: {
  collapsed: boolean;
  setCollapsed: React.Dispatch<React.SetStateAction<boolean>>;
  colorBgContainer: string;
  pathname: string;
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
      <div className="flex justify-between items-center px-[20px] h-[64px]">
        <div className="flex items-center gap-[20px]">
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
          <YoBreadcrumb pathname={pathname}></YoBreadcrumb>
        </div>
        <div className="flex w-fit h-[40px]">
          <YoAvatar></YoAvatar>
        </div>
      </div>
    </Layout.Header>
  );
}

export default YoHeader;
