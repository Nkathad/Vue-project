<template>
<div class="container">
    <div class="row">
        <div class="col-lg-12">
            <common-title :klass="classObject">
                <h1 slot="common-title">Information </h1>
            </common-title>
        </div>
        <div class="clearfix"></div>
        <div class="col-lg-12">
            <p>Hello Naresh</p>
            <carousel :bannerList="imageList" :circularloop="true"></carousel>
        </div>

    </div>
</div>
</template>
<script>
import Commontitle from './Commontitle.vue';
import Carousel from './Carousel.vue';
export default ({
    name: 'Carousel',
    data() {
        return {
            imageList: [{
                image: 'src/assets/images/slide-01.png'
            }, {
                image: 'src/assets/images/slide-02.png'
            }, {
                image: 'src/assets/images/slide-03.png'
            }, {
                image: 'src/assets/images/slide-04.png'
            }]
        }
    },
    components: {
        'common-title': Commontitle,
        'carousel': Carousel,
    },
    computed: {
        classObject() {
            return {
                commonTitle: "common-title"
            }
        }
    }
})
</script>
<style scoped>

</style>
