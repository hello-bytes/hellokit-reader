<template>
    <div>
        <NuxtLayout>
            <NuxtPage />
        </NuxtLayout>
    </div>
</template>

<script>
import device from "@/service/device"
export default defineNuxtComponent({

    mounted() {
        device.ensureDeivceExist();
    }

});

</script>
