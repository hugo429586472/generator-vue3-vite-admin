<template>
  <LayoutHeader style="background: #fff; padding: 0">
    <span @click="toggleCollapsed">
      <Icon
        v-if="getCollapsed"
        icon="mdi:menu-open"
        :size="28"
        rotate="180deg"
      />
    </span>
  </LayoutHeader>
</template>
<script lang="ts" setup>
import { computed, unref } from "vue";
import { LayoutHeader } from "ant-design-vue";
import { useAppStore } from "@/store/modules/app";

const appStore = useAppStore();
const getCollapsed = computed(() => appStore.getCollapsed);

const toggleCollapsed = () => {
  appStore.setCollapsed(!unref(getCollapsed));
};
</script>
<style lang="less"></style>
