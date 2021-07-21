# vuepress-docs-template

根据 Vue 官方文档修改的 VuePress 文档。

## 安装

克隆项目

```sh
git clone git@github.com:uphg/vuepress-docs-template.git
```

初始化

```sh
cd vuepress-docs-template
yarn install
```

启动

```sh
yarn start
```

## 使用注意

使用前需要将 config.js 中的 base 修改为自己的域名子目录，示例:

```js
module.exports = {
  base: '/vuepress-docs-template/',
}
```

并且需要对应修改 `.vuepress/theme/styles/custom-blocks.styl` 中的 `$iconUrl` 的路径为

```stylus
$iconUrl = '/vuepress-docs-template'
```

## bug

- 图片在最底部时锚点定位错误的bug（未修复）