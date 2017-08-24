<template>
<carousel :perPage="10">
    <slide v-for="slide in slides" :key="slide.id">
        <div class="product-block">
            <a :href="slide.url"><img :src="slide.brandimg"></a>
        </div>
    </slide>
</carousel>
</template>
<script>
import {
    Carousel,
    Slide
} from 'vue-carousel';
export default {
    data() {
        return {
            slides: [{
                'url': '/',
                'brandimg': 'src/assets/images/b-logo-1.png'
            }, {
                'url': '/',
                'brandimg': 'src/assets/images/b-logo-2.png'
            }, {
                'url': '/',
                'brandimg': 'src/assets/images/b-logo-3.png'
            }, {
                'url': '/',
                'brandimg': 'src/assets/images/b-logo-4.png'
            }, {
                'url': '/',
                'brandimg': 'src/assets/images/b-logo-5.png'
            }, {
                'url': '/',
                'brandimg': 'src/assets/images/b-logo-6.png'
            }, {
                'url': '/',
                'brandimg': 'src/assets/images/b-logo-7.png'
            }, {
                'url': '/',
                'brandimg': 'src/assets/images/b-logo-8.png'
            }, {
                'url': '/',
                'brandimg': 'src/assets/images/b-logo-9.png'
            }, {
                'url': '/',
                'brandimg': 'src/assets/images/b-logo-10.png'
            }, {
                'url': '/',
                'brandimg': 'src/assets/images/b-logo-1.png'
            }, {
                'url': '/',
                'brandimg': 'src/assets/images/b-logo-2.png'
            }, {
                'url': '/',
                'brandimg': 'src/assets/images/b-logo-3.png'
            }]
        }
    }
}
</script>
<style scoped>
.product-block {
    border: medium none;
    height: 75px;
    margin: 10px 5px;
    min-height: auto;
    overflow: hidden;
    position: relative;
    text-align: center;
    transition: all 0.2s ease 0.2s;
}

.product-block a {
    background: #fff none repeat scroll 0 0;
    border: 1px solid #dfdfdf;
    display: table-cell;
    height: 50px;
    text-align: center;
    vertical-align: middle;
    width: 118px;
}

.product-block a img {
    display: inherit;
    margin: 0 auto;
    width: 90%;
}
</style>
