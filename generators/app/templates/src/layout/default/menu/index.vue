<template>
  <div :class="getLogoClass">菜单</div>
</template>
<script lang="ts" setup>
import { computed } from "vue";
import { useDesign } from "@/hooks/web/useDesign";

const { prefixCls } = useDesign("layout-menu");
const getLogoClass = computed(() => {
  return [`${prefixCls}-logo`];
});
</script>
<style lang="less">
@prefix-cls: ~"@{namespace}-layout-menu";
@logo-prefix-cls: ~"@{namespace}-app-logo";

.@{prefix-cls} {
  &-logo {
    height: @header-height;
    padding: 10px 4px 10px 10px;
  }

  &--mobile {
    .@{logo-prefix-cls} {
      &__title {
        opacity: 100%;
      }
    }
  }
}
</style>
