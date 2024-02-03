/* fetch请求Type开始 */

export interface RequestType {
  method: "GET" | "Post";
  url: string;
  header?: { [key: string]: string };
  data?: unknown;
}

// fetch接口返回值
export interface ResType<T> {
  code: "200" | "400";
  msg: string;
  data: T;
}

/* fetch请求Type结束 */

/* 侧边栏菜单Type开始 */

// dashed 表示是否虚线 默认false
export interface YoMenuDividerType {
  type: "divider";
  dashed?: boolean;
}

export interface YoMenuGroupType {
  type: "group";
  label: string;
  children: YoMenuType[];
}

// key      是唯一键 在此处指对应的路由path
// icon     是菜单图标
// label    是菜单名
// title    设置收缩时展示的悬浮标题 默认为label
// danger   表示是否展示错误状态样式 默认为false
// disabled 表示是否禁用 默认为false
export interface YoMenuType {
  key: string;
  icon: string;
  label: string;
  title?: string;
  danger?: boolean;
  disabled?: boolean;
}

// key      是唯一键 在此处建议指代路由对应的本级path,不建议设置为'/'
// icon     是菜单图标
// label    是菜单名
// disabled 表示是否禁用 默认为false
// children 子菜单
export interface YoSubMenuType {
  key: string;
  icon: string;
  label: string;
  disabled?: boolean;
  children: YoMenuItemType[];
}

// 菜单标题
export type YoMenuItemType =
  | YoMenuType
  | YoSubMenuType
  | YoMenuGroupType
  | YoMenuDividerType;

/* 侧边栏菜单Type结束 */
