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
docker buildx build --platform linux/amd64 -t registry.cn-hangzhou.aliyuncs.com/hellobytes/website-hellokit-reader:v1.0.8 .

docker push registry.cn-hangzhou.aliyuncs.com/hellobytes/website-hellokit-reader:v1.0.8


-------------------------


docker pull registry.cn-hangzhou.aliyuncs.com/hellobytes/website-hellokit-reader:v1.0.8

docker stop website-hellokit-reader && docker rm website-hellokit-reader

docker run -d --name "website-hellokit-reader" --network local_docker_bridge --network-alias website-hellokit-reader --security-opt seccomp=unconfined registry.cn-hangzhou.aliyuncs.com/hellobytes/website-hellokit-reader:v1.0.8
```

docker stop hellokit-reader && docker rm hellokit-reader


### 本地打包，本地运行（Mac Arm64）

```
docker build -t registry.cn-hangzhou.aliyuncs.com/hellobytes/website-hellokit-nuxt-page:v1.0.1 .
docker push registry.cn-hangzhou.aliyuncs.com/hellobytes/website-hellokit-nuxt-page:v1.0.1

--- 

docker stop hellokit-nuxt-app && docker rm hellokit-nuxt-app

docker run -p 3000:3000 --name "hellokit-nuxt-app" registry.cn-hangzhou.aliyuncs.com/hellobytes/website-hellokit-nuxt-page:v1.0.1


```


```
# 基于Node.js官方镜像
FROM node:lts-alpine
 
# 设置工作目录
WORKDIR /app
 
# 复制`package.json`和`package-lock.json`（如果有）
COPY package*.json ./
 
# 安装项目依赖
RUN npm install
 
# 复制项目文件到工作目录
COPY . .
 
# 构建Nuxt.js应用
RUN yarn run build
 
```

"type": "module",


## 已完成转换的工具

/app/tiobe
/og-meta => /app/og-meta
/browser => /app/browser
/clearxml => /app/clearxml
/url-encode => /app/url-encode
/url-decode => /app/url-decode


## 使用的开源库

- https://github.com/cnwhy/nzh

## yarn add 之后修复

cp vue3-clipboard.package.json ./node_modules/vue-clipboard3/package.json






/* 在线链接服务仅供平台体验和调试使用，平台不承诺服务的稳定性，企业客户需下载字体包自行发布使用并做好备份。 */
@font-face {
  font-family: "brandfont";src: url("https://oss-cn-hangzhou.aliyuncs.com/codingsky/hellokit/assets/brand-font/WsRmSfnlhKQE.woff2") format("woff2"),
  url("https://oss-cn-hangzhou.aliyuncs.com/codingsky/hellokit/assets/brand-font/WsRmSfnlhKQE.woff") format("woff");
  font-display: swap;
}


https://oss-cn-hangzhou.aliyuncs.com/codingsky/hellokit/assets/brand-font/WsRmSfnlhKQE.woff2

https://oss-cn-hangzhou.aliyuncs.com/codingsky/hellokit/assets/brand-font/WsRmSfnlhKQE.woff2


基于开源项目

- 文字图标生成：https://github.com/airyland/logo.surf/tree/main






http://localhost:3000/rss/subscript/124/291717071253934080.html


## 待办

- 文章页，支持扫码手机阅读。