<template>
    <div style="background-color: white;">
        <slot></slot>
        <AllDialog></AllDialog>
    </div>
</template>

<script>
import AllDialog from '~/components/dialog/AllDialog.vue'

export default defineNuxtComponent({
    components: {
		AllDialog,
	},
});


</script>