import { computed } from "vue";
import zhCN from "ant-design-vue/es/locale/zh_CN";

export default function useLocale() {
  const getAntdLocale = computed((): any => {
    return zhCN;
  });
  return {
    getAntdLocale,
  };
}
