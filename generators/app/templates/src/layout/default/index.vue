<template>
  <Layout class="default-layout">
    <Layout>
      <LayoutSider>Sider</LayoutSider>
      <Layout class="default-layout-main">
        <LayoutHeader>Header</LayoutHeader>
        <LayoutContent>Content</LayoutContent>
        <LayoutFooter>Footer</LayoutFooter>
      </Layout>
    </Layout>
  </Layout>
</template>

<script setup lang="ts">
import { Layout } from "ant-design-vue";
import LayoutHeader from "./header/index.vue";
import LayoutSider from "./sider/index.vue";
import LayoutContent from "./content/index.vue";
import LayoutFooter from "./footer/index.vue";
</script>
<style lang="less">
.default-layout {
  min-height: 100%;

  > .ant-layout {
    min-height: 100%;
  }

  &-main {
    width: 100%;
    margin-left: 1px;
  }
}
</style>
