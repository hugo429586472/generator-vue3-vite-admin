import { defineStore } from "pinia";

export const useVisualStore = defineStore({
  id: "visual",
  state: () => ({
    componentData: [],
  }),
  getters: {
    getComponents(state) {
      return state.componentData;
    },
  },
  actions: {
    addComponent(component) {
      this.componentData.push(component);
    },
  },
});
