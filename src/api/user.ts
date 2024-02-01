import { ResType, YoMenuItemType } from "@/utils/type";

// 模拟异步请求获取菜单
export const getUserMenu: () => Promise<ResType<YoMenuItemType[]>> = () => {
  return new Promise((resolve) => {
    const menuList: YoMenuItemType[] = [
      {
        key: "1",
        icon: "UserOutlined",
        label: "首页",
      },
      {
        key: "2",
        icon: "VideoCameraOutlined",
        label: "设备管理",
      },
      {
        type: "divider",
      },
      {
        key: "3",
        icon: "UploadOutlined",
        label: "nav 3",
      },
      {
        type: "group",
        label: "My Group",
        children: [
          {
            key: "groupTest1",
            icon: "UploadOutlined",
            label: "groupTest1",
          },
          {
            key: "groupTest2",
            icon: "UploadOutlined",
            label: "groupTest2",
          },
          {
            key: "groupTest3",
            icon: "UploadOutlined",
            label: "groupTest3",
          },
        ],
      },
      {
        key: "subTest",
        icon: "UploadOutlined",
        label: "多级菜单测试",
        children: [
          {
            key: "subTest1",
            icon: "UploadOutlined",
            label: "多级测试1",
          },
          {
            key: "subTest2",
            icon: "UploadOutlined",
            label: "多级测试2",
          },
          {
            key: "subTest3",
            icon: "UploadOutlined",
            label: "三级菜单测试",
            children: [
              {
                key: "subTest3-1",
                icon: "UploadOutlined",
                label: "三级测试1",
              },
              {
                key: "subTest3-2",
                icon: "UploadOutlined",
                label: "三级测试2",
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
