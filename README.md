# Nuxt 3 Minimal Starter

Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install the dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm run dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm run build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm run preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.

## 常见问题处理

- 使用开源库时，提示`This file is being treated as an ES module`

修改开源库的package.json，在`node_modules`的开源库目录下。修改type


从

```
"type": "module",
```

改为：

```
"type": "commonjs",
```

参考：vue-clipboard3


## 打包部署

### 本地打包，服务器（Ubuntu）运行

```
docker buildx build --platform linux/amd64 -t registry.cn-hangzhou.aliyuncs.com/hellobytes/website-hellokit-reader:v1.0.29 .

docker push registry.cn-hangzhou.aliyuncs.com/hellobytes/website-hellokit-reader:v1.0.29


-------------------------


docker pull registry.cn-hangzhou.aliyuncs.com/hellobytes/website-hellokit-reader:v1.0.29

docker stop website-hellokit-reader && docker rm website-hellokit-reader

docker run -d --name "website-hellokit-reader" --network local_docker_bridge --network-alias website-hellokit-reader --security-opt seccomp=unconfined registry.cn-hangzhou.aliyuncs.com/hellobytes/website-hellokit-reader:v1.0.29
```

docker stop hellokit-reader && docker rm hellokit-reader



## 使用的开源库

- https://github.com/cnwhy/nzh

## COPY的开源项目

- 文字图标生成：https://github.com/airyland/logo.surf/tree/main

## yarn add 之后修复

cp vue3-clipboard.package.json ./node_modules/vue-clipboard3/package.json


## 待办

- 支持反馈（找产品经理聊聊）
- 后台可以查看RSS用户
- /my/feed/298637370192957440 置为全部已读时，左侧树没有刷新
- 设置页面，方块有：文件夹管理，支持删除文件夹，创建文件夹等逻辑；
- 设置页面，增加通用设置，包括：点文章标题跳新页面还是右侧弹出，是不是右侧弹出就算已读，
- 左滑内容，支持直接已读并关闭
- 文章页，支持扫码手机阅读。



已完成

- /my/feed/299010652503150592 支持下划线
- 上面链接，支持全部已读
- /my/folder/300874475715563520/1.html 及  /my/feed/299010652503150592 全部已读后，支持查看所有；
- 右侧滑动出来的页面，最下面支持阅读原文
- 右侧滑出来的Feed的文章list，需要支持分页
- + rss 列出来的Feed list ，要显示其文章数和Follow数
- + rss 列出来所有的FeedCount和文章数
- 右侧滑动出来的页面，增加Toolbar
- 最左侧的文件夹，Feed支持支持Feed总数
- Folder,Feed全被标记为已读时，view all应该显示已读的。
- 修改HTML title
- /my/folder/300874776560406528/1.html, 文件夹页面，直接展开文件夹
- /feed/page/1.html ，点了公众号以后，没有loading的页面。
- + RSS页面中，RSS的排序 (使用last_publish)排序
- 不需要SEO的页面，点标题统一在右侧弹出；
- 支持搜索RSS
- 后台可以查看每个RSS的文章
- 支持显示作者
- 支持查看RSS源（在RSS的详情里）
- 阅读我的文件夹里的内容时，最下面支持整页标记为已读