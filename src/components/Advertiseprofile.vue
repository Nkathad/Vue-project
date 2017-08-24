<template>
<div>
    <div class="banner-over">
        <div class="right-banner-bg2">
            <h4>{{ profileTitle }}</h4>
            <p class="right-banner-para2">{{ profileMsg }}</p>
            <a class="see-more" :href="url">{{ seeTitle }}<img :src="arrowImg" ></a>
        </div>
    </div>
</div>
</template>
<script>
export default ({
    data() {
        return {
            profileTitle: 'Why profile advertising',
            profileMsg: 'A strong and clear brand image is important for recognition and a whole in the overall marketing campaign.',
            url: 'Home',
            seeTitle: 'Learn More',
            arrowImg: 'src/assets/images/see-more-arrow.png'
        }
    }
})
</script>
<style scoped>
.cat-right-side .right-banner-bg2 {
    background: url("../../src/assets/images/cat-banner-log2.png") no-repeat scroll 100% 100%;
    min-height: 185px;
    min-width: 152px;
    padding: 42px 0 0 15px;
}

.right-banner-bg2 h4 {
    color: #fff;
    font-family: "Roboto Condensed", sans-serif;
    font-size: 22px;
    font-weight: 400;
    margin: 0 0 5px;
    padding: 0;
    text-transform: uppercase;
}

p.right-banner-para2 {
    color: #fff;
    font-size: 13px;
    line-height: 14px;
    margin: 0;
    padding-bottom: 5px;
}

.right-banner-bg2 a.learn-more {
    color: #fff;
    font-family: "Roboto", sans-serif;
    font-size: 12px;
    font-weight: 700;
    text-transform: uppercase;
}
</style>
