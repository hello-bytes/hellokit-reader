<template>
    <div>
        <svg>
            <use :href="`#icon-${iconName}`"></use>
        </svg>
    </div>
</template>

<script>

import '@/assets/svg/home.svg';

export default {
    props: {
        iconName: String
    }
}
</script>