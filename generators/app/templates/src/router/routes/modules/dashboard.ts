import type { AppRouteRecordRaw } from "@/router/types";

const dashboard: AppRouteRecordRaw = {
  path: "/dashboard",
  name: "Dashboard",
  component: () => import("@/layout/default/index.vue"),
  redirect: "/dashboard/analysis",
  meta: {
    orderNo: 10,
    icon: "ion:grid-outline",
    // title: t('routes.dashboard.dashboard'),
    title: "Dashboard",
  },
  children: [
    {
      path: "analysis",
      name: "Analysis",
      component: () => import("@/views/dashboard/analysis/index.vue"),
      meta: {
        // affix: true,
        // title: t('routes.dashboard.analysis'),
        title: "分析页面",
      },
    },
  ],
};
export default dashboard;
