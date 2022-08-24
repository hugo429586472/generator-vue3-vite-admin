import { resolve } from "path";
import { defineConfig, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import purgeIcons from "vite-plugin-purge-icons";
import windiCSS from "vite-plugin-windicss";
import { visualizer } from "rollup-plugin-visualizer";
import { configMockPlugin } from "./build/vite/plugin/mock";
import { configVisualizerConfig } from "./build/vite/plugin/visualizer";
import type { ConfigEnv, UserConfig } from "vite";

// import { viteThemePlugin, antdDarkThemePlugin } from 'vite-plugin-theme';

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }: ConfigEnv): UserConfig => {

  const root = process.cwd();
  const env = loadEnv(mode, root);
  const isBuild = command === "build";
  return {
    define: {
      'process.env': { ...process.env, ...env },
      'process.argv': process.argv,
    },
    plugins: [
      vue(), // 编译vue文件
      vueJsx(),
      configMockPlugin(isBuild), // vite-plugin-mock
      // vite-plugin-purge-icons
      purgeIcons(),
      // vite-plugin-windicss
      windiCSS(),
      configVisualizerConfig(),
      // viteThemePlugin({
      //   // Match the color to be modified
      //   colorVariables: [],
      // }),
      // antdDarkThemePlugin({
      //   preloadFiles: [
      //     resolve(root, 'node_modules/ant-design-vue/dist/antd.less'),
      //     //path.resolve(process.cwd(), 'node_modules/ant-design-vue/dist/antd.dark.less'),
      //     resolve(root, 'src/design/index.less'),
      //   ],
      //   darkModifyVars: {
      //     hack: `@import (reference) "${resolve('src/design/config.less')}";`,
      //     'border-color-base': '#303030',
      //   }
      // })
      visualizer(),
    ],
    resolve: {
      alias: [
        {
          find: "vue-i18n",
          replacement: "vue-i18n/dist/vue-i18n.cjs.js",
        },
        // @/xxxx => src/xxxx
        {
          find: "@",
          replacement: `${pathResolve("src")}/`,
        },
        {
          find: 'path',
          replacement: 'path-browserify'
        }
      ],
    },
    server: {
      // Listening on all local IPs
      host: true,
      port: 3200,
    },
    css: {
      preprocessorOptions: {
        less: {
          // modifyVars: ,
          additionalData: `@import (reference) "${resolve(
            "src/design/config.less"
          )}";`,
          javascriptEnabled: true,
        },
      },
    },
    optimizeDeps: {
      // @iconify/iconify: The dependency is dynamically and virtually loaded by @purge-icons/generated, so it needs to be specified explicitly
      include: [
        "@iconify/iconify",
        "ant-design-vue/es/locale/zh_CN",
        "moment/dist/locale/zh-cn",
        "ant-design-vue/es/locale/en_US",
        "moment/dist/locale/eu",
      ],
    },
  };
});

function pathResolve(dir: string) {
  return resolve(process.cwd(), ".", dir);
}
