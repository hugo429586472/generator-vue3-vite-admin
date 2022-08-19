# 项目

技术框架为vue3+vite+typescript

## 项目介绍

一个后台管理项目

## 安装使用

### 获取项目代码

```dash

git clone my-project.git
```

### 安装依赖

```dash

cd my-project
pnpm i
```

### 运行开发环境

```dash

pnpm serve
```

### 打包构建

测试环境包

```dash

pnpm build:dev
```

正式环境包

```dash

pnpm build:online
```

## 目录结构

- .husky         git相关
- build          构建相关
- mock           mock接口数据
- public         公共模块
- src
  - apis         接口配置
  - assets       静态资源
  - components   组件
  - config       配置文件（接口等）
  - design
  - enums        枚举
  - hooks        hook代码
  - layout       layout
  - locale       国际化
  - router       路由
  - store        全局状态
  - types        类型声明
  - utils        工具类
  - views        页面相关文件
  - main.ts      项目入口
- .eslintrc.json eslint配置文件
- index.html
- package.json
- tsconfig.json  TypeScript配置文件
- vite.config.ts vite配置文件
