import { createApp } from "vue";
import App from "./App.vue";
import { router, setupRouter } from "@/router";
import { setupRouterGuard } from "@/router/guard";
import { setupStore } from "@/store";
import { setupI18n } from "@/locale/setupI18n";

import "@/design/index.less";
// }
import "@purge-icons/generated";
import "windi.css";
// if (import.meta.env.DEV) {
import("ant-design-vue/dist/antd.less");

async function bootstrap() {
  const app = createApp(App);
  // Configure store
  setupStore(app);

  // Multilingual configuration
  // Asynchronous case: language files may be obtained from the server side
  await setupI18n(app);

  // Configure routing
  setupRouter(app);

  // router-guard
  setupRouterGuard(router);

  // icon
  // setupAntdIcon(app)

  app.mount("#app");
}

bootstrap();
