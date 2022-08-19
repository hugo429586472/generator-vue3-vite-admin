import { resultSuccess } from "../_util";
import type { MockMethod } from "vite-plugin-mock";
// import type { requestParams } from "../_util";

// single
const menus = [
  {
    path: "/dashboard",
    name: "Dashboard",
    component: "LAYOUT",
    redirect: "/dashboard/analysis",
    meta: {
      title: "routes.dashboard.dashboard",
      hideChildrenInMenu: true,
      icon: "bx:bx-home",
    },
    children: [
      {
        path: "analysis",
        name: "Analysis",
        component: "/dashboard/analysis/index",
        meta: {
          hideMenu: true,
          hideBreadcrumb: true,
          title: "routes.dashboard.analysis",
          currentActiveMenu: "/dashboard",
          icon: "bx:bx-home",
        },
      },
      {
        path: "workbench",
        name: "Workbench",
        component: "/dashboard/workbench/index",
        meta: {
          hideMenu: true,
          hideBreadcrumb: true,
          title: "routes.dashboard.workbench",
          currentActiveMenu: "/dashboard",
          icon: "bx:bx-home",
        },
      },
    ],
  },
  {
    path: "/comp",
    name: "Comp",
    component: "LAYOUT",
    redirect: "/comp/basic",
    meta: {
      title: "组件",
      hideChildrenInMenu: true,
      icon: "bx:bx-home",
    },
    children: [
      {
        path: "/comp/cropper",
        name: "CropperDemo",
        component: "/demo/comp/cropper/index",
        meta: {
          hideMenu: true,
          hideBreadcrumb: true,
          title: "图片剪裁",
          // currentActiveMenu: '/dashboard',
          icon: "bx:bx-home",
        },
      },
      {
        path: "/comp/cascader",
        name: "CascaderDemo",
        component: "/demo/comp/cascader/index",
        meta: {
          hideMenu: true,
          hideBreadcrumb: true,
          title: "级联",
          icon: "bx:bx-home",
        },
      },
      {
        path: "/comp/test",
        name: "TestDemo",
        component: "/demo/comp/test/index",
        meta: {
          hideMenu: true,
          hideBreadcrumb: true,
          title: "Test",
          icon: "bx:bx-home",
        },
      },
    ],
  },
];

export default [
  {
    url: "/basic-api/getMenuList",
    timeout: 1000,
    method: "get",
    response: () => {
      return resultSuccess(menus);
    },
  },
] as MockMethod[];
