import { defineStore } from "pinia";
import { COLLAPSED_KEY } from "@/enums/cacheEnum";
import { getItem, setItem } from "@/utils/storage";

interface AppState {
  collapsed: boolean;
}
export const useAppStore = defineStore({
  id: "app",
  state: (): AppState => ({
    collapsed: false,
  }),
  getters: {
    getCollapsed(state): any {
      return state.collapsed || getItem(COLLAPSED_KEY);
    },
  },
  actions: {
    setCollapsed(collapsed: boolean) {
      this.collapsed = collapsed;
      setItem(COLLAPSED_KEY, collapsed);
    },
  },
});
