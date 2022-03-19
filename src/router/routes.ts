import type { RouteRecordRaw } from "vue-router";

export const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/login",
  },
  {
    path: "/login",
    component: () => import("@/views/Login.vue"),
  },
  {
    path: "/403",
    component: () => import("@/views/exception/403.vue"),
  },
  {
    path: "/404",
    component: () => import("@/views/exception/404.vue"),
  },
  {
    path: "/500",
    component: () => import("@/views/exception/500.vue"),
  },
  {
    path: "/:pathMatch(.*)*",
    redirect: "/404",
  },
];
