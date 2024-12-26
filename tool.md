## templage

```
<template>
    <div class="page_root_container">
        <h2 class="page_root_title">设置</h2>
        <el-divider></el-divider>
    </div>
</template>

<script>

export default defineNuxtComponent({
    async asyncData() {
        return {
        }
    },

    mounted() {
    },

    methods: {

    }

});

</script>
```





```
<div v-if="item.thumb_url.length == 0">
                <a class="feed_item_list_container">
                    <p @click="showFeedItem(item)" class="feed_item_list_container_title">{{ item.title }}</p>
                    <div>
                        
                    </div>
                    <p class="feed_item_list_container_desc">{{ item.desc }}</p>
                </a> 
                <div style="display: flex;margin-top:5px;">
                    <div style="height:30px;line-height:30px;">
                        <a target="_blank" :href='item.feed.url'  class="feed_item_list_container_feed">{{ item.feed == null ? "" : item.feed.name }}</a>
                    </div> 
                    <div style="flex:1"></div>
                    <el-tooltip effect="dark" content="快速阅读此文章" placement="top-start">
                        <div @click="showFeedItem(item)" class="svg_icon_container_mini"><el-icon :size="20" color="#757575"><Reading /></el-icon></div>
                    </el-tooltip>
                    <span>&nbsp;</span>
                    <el-tooltip effect="dark" content="在新页面中打开" placement="top-start">
                        <a class="article_link" :href='"/feed-item/" + item.feed_item_id + ".html"' target="_blank"><el-icon :size="20" color="#757575"><FullScreen /></el-icon></a>
                    </el-tooltip>
                    <span>&nbsp;</span>
                    <el-tooltip effect="dark" content="标记为已读" placement="top-start">
                        <div v-if="item.readState == 1" @click="onSetFeedItemState(item,2)" class="svg_icon_container_mini"><el-icon :size="20" color="#757575"><Check /></el-icon></div>
                    </el-tooltip>
                    <el-tooltip effect="dark" content="标记为未读" placement="top-start">
                        <div v-if="item.readState != 1" @click="onSetFeedItemState(item,1)" class="svg_icon_container_mini"><el-icon :size="20" color="#757575"><Check /></el-icon></div>
                    </el-tooltip>
                    <span>&nbsp;</span>
                    <el-tooltip v-if="!item.isReadLater" effect="dark" content="添加到稍后阅读" placement="top-start">
                        <div @click="setReadLater(item)" class="svg_icon_container_mini"><el-icon :size="20" color="#757575"><CollectionTag /></el-icon></div>
                    </el-tooltip>
                    <el-tooltip v-if="item.isReadLater" effect="dark" content="取消稍后阅读" placement="top-start">
                        <div @click="removeReadLater(item)" class="svg_icon_container_mini"><el-icon :size="20" color="#009a61"><CollectionTag /></el-icon></div>
                    </el-tooltip>
                    <span>&nbsp;</span>
                    <el-dropdown placement="bottom-end">
                        <div class="svg_icon_container_mini"><el-icon :size="20" color="#757575"><More /></el-icon></div>
                        <template #dropdown>
                            <el-dropdown-menu>
                                <el-dropdown-item><a class="article_link" @click="onShareArticle" target="_blank"><el-icon :size="18"><Share /></el-icon>分享给朋友</a></el-dropdown-item>
                                <el-dropdown-item><a class="article_link" :href='item.feed_url' target="_blank"><el-icon :size="18"><Paperclip /></el-icon>原文链接</a></el-dropdown-item>
                            </el-dropdown-menu>
                        </template>
                    </el-dropdown>
                </div>    
            </div>
```
