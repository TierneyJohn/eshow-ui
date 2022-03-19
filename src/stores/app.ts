import { defineStore } from "pinia";

export const useAppStore = defineStore("app", {
  state: (): { userId: string } => ({
    userId: "",
  }),
  getters: {
    getUserId: (state): string => state.userId,
  },
  actions: {
    logout() {
      this.$reset();
    },
  },
});
