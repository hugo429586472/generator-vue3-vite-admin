export const httpConfig = {
  host: {
    main: "localhost: 3030/api",
    external: "localhost: 3031/api",
  },
  domain: "", // 缓存、cookie等挂靠的域名
  header: {
    version: "0.0.1",
    "Content-Type": "application/json",
  }, // 全局header(一些特殊header，比如需要读localstorage中某个参数传后端，需要自己二次封装)
  params: {}, // 全局默认params
  timeout: 3000, // 全局通用超时时间
};

export default {
  httpConfig,
};
