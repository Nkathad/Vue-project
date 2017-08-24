<template>
<div class="ob-slide-box">
    <!-- <slider animation="fade">
        <slider-item v-for="(i, index) in list" :key="index">
            <div :style="i">
                <p style="line-height: 280px; font-size: 5rem; text-align: center;">Page{{ index + 1 }}</p>
            </div>
        </slider-item>
    </slider> -->
    <carousel :perPage="1">
        <slide v-for="slide in slides" :key="slide.id">
            <img :src="slide.backgroundImage" class="img-responsive">
        </slide>
    </carousel>
</div>
</template>
<script>
// import {
//     Slider,
//     SliderItem
// } from 'vue-easy-slider';
import {
    Carousel,
    Slide
} from 'vue-carousel';
export default ({
    data() {
        return {
            slides: [{
                'backgroundImage': 'src/assets/images/slide-01.png'
            }, {
                'backgroundImage': 'src/assets/images/slide-01.png'
            }, {
                'backgroundImage': 'src/assets/images/slide-01.png'
            }]
        }
    },
    components: {
        Carousel,
        Slide,
    }
})
</script>
<style>

</style>
