# vnesting frame 简洁开发之道

-   本架构由 vue + ts + vite 构建

## 开始

```shell
# 拉取项目到本地
git clone --recursive https://github.com/vnesting/client.git
# 将远程地址设置成自己的仓库
git remote -v # 查看fetch和push路径
git remote set-url origin "自己仓库路径"
# 安装依赖
npm setup
# 运行
npm dev
# 打包
npm build
#
```

## 建议

1. 建议用 lf 换行规范项目`git config --global core.autocrlf false`
2. 本框架作者基于 vue3 编辑 vnesting-ui 组件,用于 core 系统管理模块维护，但还不稳定，所以用户开发时建议不要引用，最好使用饿了么的 element-plus 开发

## 说明

1. 路由管理:src/router
2. 缓存管理:src/store
3. 设国际化:src/locale
4. 页面管理:src/views
5. 静态文件:src/public
6. 类型声明:src/yptings

## 注意

1. 框架前端结构请看 README.drawio 图表
2. 本项目纯属爱好，请勿用于商业用途
