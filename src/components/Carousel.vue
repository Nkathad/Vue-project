<template>
<div class="container">
    <div id="carousel-example-generic" class="carousel slide">
        <!-- Indicators -->
        <ol class="carousel-indicators">
            <li :class="[indx==start ? 'indicators active' : 'indicators']" @click="thisImage(indx)" v-for="(img, indx) in imageList"></li>
        </ol>
        <!-- Wrapper for slides -->
        <div class="carousel-inner">
            <div :class="[indx==start ? 'item active' : 'item']" v-for="(img, indx) in imageList">
                <img :src="img.img" alt="Image1">
                <div class="carousel-caption">
                </div>
            </div>
        </div>
        <!-- Controls -->
        <a class="left carousel-control" href="javascript:void(0);" @click="prevImage">
            <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
        </a>
        <a class="right carousel-control" href="javascript:void(0);" @click="nextImage">
            <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
        </a>
    </div>
</div>
</template>
<script>
export default {
    name: 'Carousel',
    data() {
        return {
            start: 0,
            end: 2,
            imageList: [{
                img: 'src/assets/images/slide-01.png'
            }, {
                img: 'src/assets/images/slide-02.jpg'
            }, {
                img: 'src/assets/images/slide-03.jpg'
            }, {
                img: 'src/assets/images/slide-04.jpg'
            }]
        }
    },
    created() {
        setInterval(this.nextImage, 2000);
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


}
</script>
<style scoped>
.carousel-inner>.item.active {
    left: 0;
    transform: translate3d(0px, 0px, 0px);
}

.carousel-inner>.item.active.slide-move {
    left: -100%;
    transform: translate3d(-100%, 0px, 0px);
}

.carousel-control .icon-next::before,
.carousel-control .icon-prev::before {
    display: none;
}

.carousel-control .icon-next {
    right: 10%;
}

.carousel-control .icon-prev {
    left: 10%;
}
</style>
