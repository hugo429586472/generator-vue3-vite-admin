import type { AppRouteModule } from "@/router/types";

import { PageEnum } from "@/enums/pageEnum";

const modules = import.meta.globEager("./modules/**/*.ts");
const routeModuleList: AppRouteModule[] = [];

Object.keys(modules).forEach((key) => {
  const mod = modules[key].default || {};
  const modList = Array.isArray(mod) ? [...mod] : [mod];
  routeModuleList.push(...modList);
});

export const RootRoute: AppRouteModule = {
  path: "/",
  name: "Root",
  redirect: PageEnum.BASE_HOME,
  meta: {
    title: "Root",
  },
};

export const LoginRoute: AppRouteModule = {
  path: "/login",
  name: "Login",
  component: () => import("@/views/sys/login/Login.vue"),
  meta: {
    // title: t('routes.basic.login'),
    title: "登录",
  },
};

// Basic routing without permission
export const basicRoutes = [LoginRoute, RootRoute, ...routeModuleList];
