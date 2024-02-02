import { ResType, YoMenuItemType } from "@/utils/type";

// 模拟异步请求获取菜单
export const getUserMenu: () => Promise<ResType<YoMenuItemType[]>> = () => {
  return new Promise((resolve) => {
    const menuList: YoMenuItemType[] = [
      {
        key: "/",
        icon: "UserOutlined",
        label: "首页",
      },
      {
        key: "/devices",
        icon: "ClusterOutlined",
        label: "设备管理",
      },
      {
        key: "/sub",
        icon: "ClusterOutlined",
        label: "分级测试",
        children: [
          {
            key: "/sub1",
            icon: "UserOutlined",
            label: "首页",
          },
          {
            key: "/sub2",
            icon: "ClusterOutlined",
            label: "设备管理",
          },
          {
            key: "/sub3",
            icon: "ClusterOutlined",
            label: "三级测试",
            children: [
              {
                key: "/subTest1",
                icon: "ClusterOutlined",
                label: "设备管理",
              },
            ],
          },
        ],
      },
    ];

    setTimeout(() => {
      resolve({
        code: 0,
        msg: "",
        data: menuList,
      });
    }, 16);
  });
};
