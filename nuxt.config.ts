// https://nuxt.com/docs/api/configuration/nuxt-config

// 计算代理目标地址
const getProxyTarget = () => {
    const apiProxyTarget = process.env.API_PROXY_TARGET;
    const nodeEnv = process.env.NODE_ENV;
    const devApiTarget = process.env.DEV_API_TARGET;
    
    const target = apiProxyTarget || (nodeEnv === 'development' 
        ? (devApiTarget || 'https://hellobit.com.cn') 
        : 'http://121.196.110.39');
    
    // 输出环境变量信息到控制台
    console.log('\n========== 代理配置信息 ==========');
    console.log('NODE_ENV:', nodeEnv || '未设置');
    console.log('API_PROXY_TARGET:', apiProxyTarget || '未设置');
    console.log('DEV_API_TARGET:', devApiTarget || '未设置');
    console.log('最终使用的代理地址:', target);
    console.log('===================================\n');
    
    return target;
};

// 计算 /api/article 的代理目标地址
const getArticleProxyTarget = () => {
    const articleProxyTarget = process.env.ARTICLE_PROXY_TARGET;
    const nodeEnv = process.env.NODE_ENV;
    const devArticleTarget = process.env.DEV_ARTICLE_TARGET;
    
    const target = articleProxyTarget || (nodeEnv === 'development' 
        ? (devArticleTarget || 'http://121.196.110.39') 
        : 'http://website-article-service:9012');
    
    // 输出环境变量信息到控制台
    console.log('\n========== Article 代理配置信息 ==========');
    console.log('NODE_ENV:', nodeEnv || '未设置');
    console.log('ARTICLE_PROXY_TARGET:', articleProxyTarget || '未设置');
    console.log('DEV_ARTICLE_TARGET:', devArticleTarget || '未设置');
    console.log('最终使用的 Article 代理地址:', target);
    console.log('===================================\n');
    
    return target;
};

// 计算 /api/tbs 的代理目标地址
const getTbsProxyTarget = () => {
    const tbsProxyTarget = process.env.TBS_PROXY_TARGET;
    const nodeEnv = process.env.NODE_ENV;
    const devTbsTarget = process.env.DEV_TBS_TARGET;
    
    const target = tbsProxyTarget || (nodeEnv === 'development' 
        ? (devTbsTarget || 'http://121.196.110.39') 
        : 'http://website-tuboshu-service:9016');
    
    // 输出环境变量信息到控制台
    console.log('\n========== TBS 代理配置信息 ==========');
    console.log('NODE_ENV:', nodeEnv || '未设置');
    console.log('TBS_PROXY_TARGET:', tbsProxyTarget || '未设置');
    console.log('DEV_TBS_TARGET:', devTbsTarget || '未设置');
    console.log('最终使用的 TBS 代理地址:', target);
    console.log('===================================\n');
    
    return target;
};

const proxyTarget = getProxyTarget();
const tbsProxyTarget = getTbsProxyTarget();
const articleProxyTarget = getArticleProxyTarget();

export default defineNuxtConfig({
    // compatibilityDate: '2024-04-03',
    // devtools: { enabled: true },
    app: {
        head: {
            title: "哈喽阅读 - 深度探索你的兴趣世界 - https://reader.hellobit.cn/",
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
                { src: "https://hm.baidu.com/hm.js?33a2382e72b55905453b196a4d26e59b" },
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
                '/api/tbs': {
                    // 通过环境变量控制：开发环境使用本地或指定地址，生产环境使用线上地址
                    target: tbsProxyTarget,
                    changeOrigin: true,
                    secure: false,
                },
                '/api/article': {
                    // 通过环境变量控制：开发环境使用本地或指定地址，生产环境使用线上地址
                    target: articleProxyTarget,
                    changeOrigin: true,
                    secure: false,
                },
                '/api': {
                    // 通过环境变量控制：开发环境使用本地或指定地址，生产环境使用线上地址
                    target: proxyTarget,
                    changeOrigin: true,
                    secure: false,
                },
            },
        }
    },

    // elementPlus: {},
    nitro: {
        routeRules: {
            '/api/tbs/**': {
                proxy: `${tbsProxyTarget}/api/tbs/**`
            },
            '/api/article/**': {
                proxy: `${articleProxyTarget}/api/article/**`
            },
            '/api/**': {
                proxy: `${proxyTarget}/api/**`
            }
        }
    },

    runtimeConfig:{
        // localFileDir:"/Users/shishengyi/Documents/HelloBytes/hellokit-nuxt-tools/files",
        // localFileDir:"/app/files",
    },

    compatibilityDate: '2024-08-14'
})