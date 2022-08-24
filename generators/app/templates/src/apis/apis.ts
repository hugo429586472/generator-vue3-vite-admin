export const apiConfig = {
  user: {
    login: { path: 'user/login', type: 'post' },
    list: { path: 'user/list', type: 'get' },
    detail: { path: 'user/show/$id$', type: 'get' }
  },
  base: {
    list: {
      host: 'main', // 使用域名（默认main）
      path: '$menu$/list', // 接口路径，$menu$ 代表自动获取接口参数中的menu参数
      type: 'get', // 请求方法
    },
    add: { host: 'external', path: '$menu$/add', type: 'post' },
    edit: { path: '$menu$/$id$/edit', type: 'post' },
    show: { path: '$menu$/$id$', type: 'get' }
  }
}

export default {
  apiConfig
}