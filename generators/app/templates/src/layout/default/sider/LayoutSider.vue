<template>
  <div :style="getHiddenDomStyle" />
  <LayoutSider
    v-model:collapsed="getCollapsed"
    class="layout-sidebar layout-sidebar--fixed"
    breakpoint="lg"
    :width="siderWidth"
    :collapsed-width="48"
    :trigger="null"
    collapsible
  >
    <LayoutMenu />
  </LayoutSider>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { LayoutSider } from "ant-design-vue";
import LayoutMenu from "./../menu/index.vue";
import type { CSSProperties } from "vue";

import { useAppStore } from "@/store/modules/app";
const appStore = useAppStore();
const getCollapsed = computed(() => appStore.getCollapsed);

const maxWidth = "220px";
const minWidth = "48px";
const siderWidth = computed(() => (getCollapsed.value ? minWidth : maxWidth));
const getHiddenDomStyle = computed((): CSSProperties => {
  return {
    width: siderWidth.value,
    overflow: "hidden",
    flex: `0 0 ${siderWidth.value}`,
    maxWidth: siderWidth.value,
    minWidth: siderWidth.value,
    transition: "all 0.2s",
  };
});
</script>
<style lang="less">
.layout-sidebar {
  &--fixed {
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
  }
}
</style>
