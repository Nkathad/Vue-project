<template>
<div>
    <div class="deal-banner">
        <a :href="url">
            <img :src="dealImg" class="img-responsive" alt="">
        </a>
    </div>
</div>
</template>
<script>
export default ({
    data() {
        return {
            url: 'Home',
            dealImg: 'src/assets/images/home-video.png'
        }
    }
})
</script>
