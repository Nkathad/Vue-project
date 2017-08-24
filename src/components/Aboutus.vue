<template>
<div class="container">
    <div class="row">
        <div class="col-lg-12">
            <common-title :klass="classObject">
                <h1 slot="common-title">About Us </h1>
            </common-title>
        </div>
        <div class="clearfix"></div>
        <!-- <div class="col-lg-12">
            <button @click="show = !show">Akash</button>
            <transition name="bounce">
                <p v-if="show">Hello Akash</p>
            </transition>
        </div> -->
        <div class="col-lg-12">
            <transition name="slide-fade">
                <div id="carousel-example-generic" class="carousel slide">
                    <!-- Indicators -->
                    <ol class="carousel-indicators">
                        <li :class="[indx==start ? 'indicators active' : 'indicators']" @click="thisImage(indx)" v-for="(img, indx) in imageList"></li>
                    </ol>
                    <!-- Wrapper for slides -->
                    <div class="carousel-inner">
                        <div :class="[indx==start ? 'item active' : 'item']" v-for="(img, indx) in imageList">
                            <img :src="img.img" alt="Jiyanshi">
                            <div class="carousel-caption">
                                <h1>{{ img.imgTitle }}</h1>
                                <p>{{ img.imgDicrip }}</p>
                            </div>
                        </div>
                    </div>
                    <!-- Left and right controls -->
                    <a class="left carousel-control" href="javascript:void(0)" @click="prevImage">
                        <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                    </a>
                    <a class="right carousel-control" href="javascript:void(0)" @click="nextImage">
                        <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                    </a>
                </div>
            </transition>
        </div>
        <div class="clearfix"></div>
    </div>
</div>
</template>
<script>
import Commontitle from './Commontitle.vue';
export default ({
    name: 'Carousel',
    data() {
        return {
            start: 0,
            end: 2,
            imageList: [{
                img: 'src/assets/images/slide-02.jpg',
                imgTitle: 'Hello Jiyanshi',
                imgDicrip: 'File Explorer (previously called Windows Explorer) helps you browse locations on your PC and network and work with files and folders.'
            }, {
                img: 'src/assets/images/slide-03.jpg',
                imgTitle: 'How are you Jiyanshi',
                imgDicrip: 'Use the navigation pane to access all kinds of locations: folders you have added to your favorites list, your libraries, the drives on your PC, and other PCs on your network.'
            }, {
                img: 'src/assets/images/slide-04.jpg',
                imgTitle: 'I am Fine',
                imgDicrip: 'The tabs change to show extra tasks that apply to the selected item.'
            }]
        }
    },
    components: {
        'common-title': Commontitle,
    },
    computed: {
        classObject() {
            return {
                commonTitle: "common-title"
            }
        }
    },
    created() {
        setInterval(this.nextImage, 5000);
    },
    methods: {
        prevImage() {
            if (this.start == 0) {
                this.start = this.end;
            } else {
                this.start = this.start - 1;
            }
        },
        nextImage() {
            if (this.start == this.end) {
                this.start = 0;
            } else {
                this.start = this.start + 1;
            }
        },
        thisImage(ind) {
            this.start = ind;
        }
    }
})
</script>
<style scoped>
.slide-fade-enter-active {
    transition: all .3s ease;
}

.slide-fade-leave-active {
    transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}

.slide-fade-enter,
.slide-fade-leave-to
/* .slide-fade-leave-active for <2.1.8 */

{
    transform: translateX(10px);
    opacity: 0;
}

.carousel-caption {
    background: rgba(0, 0, 0, 0.5);
    width: 100%;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 0;
}
</style>
