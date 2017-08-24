<template>
<div class="container">
    <div class="row">
        <div class="col-lg-12">
            <carousel1 :bannerList="imageList" :circularloop="true"></carousel1>
        </div>
    </div>
</div>
</template>
<script>
import Carousel1 from './Carousel1.vue';
export default {
    name: 'home',
    components: {
        'carousel1': Carousel1,
    },
    data() {
        return {
            imageList: [{
                image: '/src/assets/images/slide-01.png'
            }, {
                image: '/src/assets/images/slide-01.png'
            }, {
                image: '/src/assets/images/slide-01.png'
            }]
        }
    }
}
</script>
<style>
body {
    background: #F3F8FB;
    font-family: 'lane_-_narrowregular', sans-serif;
    line-height: 30px;
}

h1,
p {
    font-family: 'Raleway', sans-serif;
    font-weight: 400;
    text-align: left;
}

h4 {
    text-align: left;
}

h2,
h3 {
    font-weight: bold;
    text-align: left;
}

hr {
    border-color: #f2af00;
    margin: 0;
    opacity: 0.3;
}

img {
    max-width: 100%;
    height: auto;
    transition: all 0.3s ease-in;
}

img:hover {
    cursor: pointer;
    opacity: 0.5;
}

.title-tag h2::after {
    content: "";
    position: absolute;
    content: "";
    height: 2px;
    background-color: #f2af00;
    width: 4%;
    top: 54%;
    left: 48%;
}
</style>
