import type { AppRouteRecordRaw } from "@/router/types";

const comp: AppRouteRecordRaw = {
  path: "/comp",
  name: "Comp",
  component: () => import("@/layout/default/index.vue"),
  redirect: "/comp/basic",
  meta: {
    orderNo: 10,
    icon: "ion:grid-outline",
    title: "Comp",
  },
  children: [
    {
      path: "cropper",
      name: "CropperDemo",
      component: () => import("@/views/demo/comp/cropper/index.vue"),
      meta: {
        // title: t('routes.demo.comp.cropperImage'),
        title: "图片剪裁",
      },
    },
    {
      path: "cascader",
      name: "CascaderDemo",
      component: () => import("@/views/demo/comp/cascader/index.vue"),
      meta: {
        title: "级联",
      },
    },
    {
      path: "test",
      name: "TestDemo",
      component: () => import("@/views/demo/comp/test/index.vue"),
      meta: {
        title: "Test",
      },
    },
  ],
};
export default comp;
