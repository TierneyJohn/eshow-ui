import { FundOutlined } from "@ant-design/icons-vue";
import type { RouteRecordRaw } from "vue-router";

export interface Stage {
  id: string;
  icon?: unknown;
  path: string;
  children?: Array<Stage>;
}

export const stage: Array<Stage> = [
  {
    id: "1",
    icon: FundOutlined,
    path: "/home/search",
    children: [
      {
        id: "1-1",
        path: "/home/search",
      },
    ],
  },
];

export const asyncRouterMap: RouteRecordRaw = {
  path: "/home",
  component: () => import("@/views/Layout.vue"),
  children: [
    {
      path: "/home/search",
      component: () => import("@/views/search/Search.vue"),
    },
  ],
};
