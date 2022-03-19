import { reactive } from "vue";

import { stage, asyncRouterMap } from "@/config";
import router from "@/router";

export const getMenus = () => {
  return reactive(stage);
};

export const initRouter = () => {
  router.addRoute(asyncRouterMap);
  setTimeout(() => router.push("/home"), 500);
};
