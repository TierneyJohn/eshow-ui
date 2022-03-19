import type { App } from "vue";

import { Button, Layout, Menu, PageHeader, Pagination } from "ant-design-vue";

const components = [Button, Layout, Menu, PageHeader, Pagination];

export const useAntComponent = (app: App<Element>) => {
  components.forEach((component) => app.use(component));
};
