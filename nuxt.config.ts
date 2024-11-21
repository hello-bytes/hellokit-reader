// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    // compatibilityDate: '2024-04-03',
    // devtools: { enabled: true },
    app: {
        head: {
            title: "哈喽阅读 - 深度探索你的兴趣世界 - https://reader.hellokit.cn/",
            meta: [
                { name: 'description', content: "哈喽阅读协助您精选订阅，专注内容，让您的每一次阅读都成为知识的深度探索之旅。" },
                { name: 'keywords', content: "哈喽阅读,RSS阅读器,哈喽工具箱,在线工具" },
            ],

            //charset: 'utf-8',<link rel="shortcut icon" href="/favicon.ico" type="image/x-icon">
            //viewport: 'width=device-width, initial-scale=1',
            // <link rel="icon" type="image/x-icon" sizes="16x16 32x32 48x48" href="favicon.ico">
            // <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
            // <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
            // <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
            "link": [
                { rel: 'apple-touch-icon',sizes:'256x256', href: "https://oss-cn-hangzhou.aliyuncs.com/codingsky/hellokit/assets/image/reader/favicon-256x256.png" },
                { rel: 'icon',type:'image/x-icon', sizes:'16x16 32x32 48x48', href: "https://oss-cn-hangzhou.aliyuncs.com/codingsky/hellokit/assets/image/reader/favicon.ico" },
            ],
            "style": [],
            "script": [
                { src: "https://hm.baidu.com/hm.js?53c095039a82e3bb528e7ef6d11a0e01" },
                { src: "https://oss-cn-hangzhou.aliyuncs.com/codingsky/hellokit/assets/lib/jszip/jszip.min.js" }
                // { src: "https://cdnjs.cloudflare.com/ajax/libs/jszip/3.7.1/jszip.min.js"}
            ],
            "noscript": [],
        }
    },

    css: [
        // CSS file in the project
        '~/assets/css/index.css',
    ],

    modules: ['@element-plus/nuxt', '@nuxtjs/mdc', "@nuxt/image"],

    router: {

    },



      vite: {
        server: {
            proxy: {
                '/api': {
                  target: 'https://hellokit.com.cn', // 线上环境
                  // target: 'http://127.0.0.1:9016', // 本地环境
                  "secure": false,
                },
              },
        }
    },

    // elementPlus: {},
    nitro: {
        routeRules: {
            '/api/**': {
                proxy: 'https://www.hellokit.com.cn/api/**'
                // proxy: 'http://127.0.0.1:9016/api/**', // 本地环境
            }
        }
    },

    runtimeConfig:{
        // localFileDir:"/Users/shishengyi/Documents/HelloBytes/hellokit-nuxt-tools/files",
        // localFileDir:"/app/files",
    },

    compatibilityDate: '2024-08-14'
})