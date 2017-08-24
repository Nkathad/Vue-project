<template>
<div class="ob-slide-box">
    <carousel :indicators="false" :auto="3000">
        <div v-for="i in 3">
            <img :src="slider_image">
            <div class="slider-content">
                <h1>{{ slider_title }}</h1>
                <h2>{{ slider_subtitle }}</h2>
            </div>
        </div>
    </carousel>
</div>
</template>
<script>
import Carousel from 'vue-m-carousel';
export default ({
    data() {
        return {
            slider_image: 'src/assets/images/slide-01.png',
            slider_title: 'Hello Naresh',
            slider_subtitle: 'Vuejs test'
        }
    },
    components: {
        Carousel
    }
})
</script>
<style>
.carousel-item {
    position: relative;
}

.carousel-item .slider-content {
    position: absolute;
    padding: 10px;
    top: 0;
    left: 0;
    color: #fff;
}
</style>
