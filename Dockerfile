FROM registry.cn-hangzhou.aliyuncs.com/hellobytes/node:18

# FROM node:18

RUN mkdir -p /pm2
WORKDIR /pm2
RUN npm install pm2 -g

RUN mkdir -p /app
RUN mkdir -p /app/.nuxt
RUN mkdir -p /app/.output

WORKDIR /app

COPY ./.nuxt/ /app/.nuxt/
COPY ./.output/ /app/.output/
# COPY ./files/ /app/files/

COPY ./package.json /app/package.json
COPY ./nuxt.config.ts /app/nuxt.config.ts
COPY ./ecosystem.config.cjs /app/ecosystem.config.cjs

# npm install pm2 -g

ENV NITRO_PORT 3000
ENV NITRO_HOST 0.0.0.0
 


# 暴露3000端口
EXPOSE 3000


# CMD ["node","./.output/server/index.mjs"]
CMD ["pm2-runtime","start", "./ecosystem.config.cjs"]
