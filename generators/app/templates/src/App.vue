<template>
  <ConfigProvider :locale="getAntdLocale">
    <RouterView />
  </ConfigProvider>
</template>
<script setup lang="ts">
import { ConfigProvider } from "ant-design-vue";
import useLocale from "@/locale/useLocale";

const { getAntdLocale } = useLocale();
</script>
<style></style>
