import { UserOutlined } from "@ant-design/icons";
import { Avatar, Dropdown, message } from "antd";
import type { MenuProps } from "antd";
import { useNavigate } from "react-router-dom";

function YoAvatar() {
  const navigate = useNavigate();

  const onClick: MenuProps["onClick"] = ({ key }) => {
    switch (key) {
      case "personal":
        message.warning("该功能还未实现，请联系开发者");
        break;
      case "github":
        window.open("https://github.com/yozica/Yo-Vue3-Admin", "yo-vue3-admin");
        break;
      case "logout":
        navigate("/login");
        message.success("已退出登录");
        break;
      default:
        message.error("程序故障，请联系开发者");
        break;
    }
  };

  const items: MenuProps["items"] = [
    {
      key: "personal",
      label: "个人中心",
    },
    {
      key: "github",
      label: "Github",
    },
    {
      type: "divider",
    },
    {
      key: "logout",
      label: "退出登录",
    },
  ];

  return (
    <Dropdown
      overlayStyle={{
        userSelect: "none",
      }}
      menu={{ items, onClick }}
      placement="bottomRight"
      arrow
    >
      <Avatar shape="square" size={40} icon={<UserOutlined />} />
    </Dropdown>
  );
}

export default YoAvatar;
