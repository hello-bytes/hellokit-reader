<template>
    <div>
        <FeedListPage></FeedListPage>
    </div>
</template>

<script>

import rssbiz from '@/service/rss/rss.js';
import FeedListPage from '@/components/feed/FeedListPage.vue';

export default defineNuxtComponent({
    components: {
        FeedListPage
    },

    async asyncData() {
    },

    mounted() {
    },

    methods: {
    }

});

</script>

<style scoped>

</style>