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
            url: '/',
            dealImg: 'src/assets/images/cat-banner1.png'
        }
    }
})
</script>
<style scoped>
.deal-banner {
    display: block;
    margin-bottom: 30px;
    overflow: hidden;
}
</style>
