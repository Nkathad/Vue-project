<template>
<div>
    <div class="container">
        <div class="row">
            <div class="col-lg-12">
                <div class="carousel slide" @mouseleave="resume" @mouseover="pause">
                    <ul class="carousel-indicators">
                        <li :class="[index==start ? 'active' : '']" v-for="(banner, index) in bannerList" @click="indicators(index)"></li>
                    </ul>
                    <transition-group name="slide" tag="ul" class="carousel-inner" v-bind:css="false">
                        <li :class="[index==start ? 'item active' : 'item', index==old ? direction : '']" v-for="(banner, index) in bannerList" :key="index">
                            <img :src="banner.image" class="img-responsive" />
                        </li>
                    </transition-group>
                    <a class="left carousel-control" href="javascript:void(0);" @click="prev">
                        <span class="icon-prev"><i class="fa fa-chevron-left"></i></span>
                    </a>
                    <a class="right carousel-control" href="javascript:void(0);" @click="next">
                        <span class="icon-next"><i class="fa fa-chevron-right"></i></span>
                    </a>
                </div>
            </div>
            <div class="col-lg-12">

            </div>
        </div>
    </div>
</div>
</template>
<script>
export default ({
    data() {
        return {
            start: 0,
            end: 0,
            timer: null,
            old: null,
            direction: 'prew',
            bannerList: [{
                image: '/src/assets/images/slide-01.png'
            }, {
                image: '/src/assets/images/slide-02.jpg'
            }, {
                image: '/src/assets/images/slide-03.jpg'
            }, {
                image: '/src/assets/images/slide-04.jpg'
            }]
        }
    },
    watch: {
        start(newValue, oldValue) {
            this.new = newValue;
            this.old = oldValue;
        }
    },
    created() {
        this.end = this.bannerList.length - 1;
        this.timer = setInterval(this.next, 5000);
    },
    methods: {
        slide(direction) {
            var nodeList = this.$el.querySelectorAll('.carousel-inner .item')
            if (direction == "prew") {
                nodeList[this.start].classList.remove('prew');
                nodeList[this.start].classList.add('next');
            }
            if (direction == "next") {
                nodeList[this.start].classList.remove('next');
                nodeList[this.start].classList.add('prew');
            }
        },
        next() {
            if (this.start == this.end) {
                if (this.circularloop) {
                    this.start = 0;
                    this.direction = 'next';
                } else {
                    return false;
                }
            } else {
                this.start = this.start + 1;
            }
            this.direction = 'prev';
            this.slide(this.direction);
        },
        prev() {
            if (this.start == 0) {
                if (this.circularloop) {
                    this.start = this.end;
                    this.direction = 'prev';
                } else {
                    return false;
                }
            } else {
                this.start = this.start - 1;
            }
            this.direction = 'next';
            this.slide(this.direction);
        },
        pause() {
            clearInterval(this.timer);
        },
        resume() {
            this.timer = setInterval(this.next, 5000);
        },
        indicators(index) {
            if (this.start > index) {
                this.start = index;
                this.direction = 'prev';
            } else {
                this.start = index;
                this.direction = 'next';
            }
            this.slide(this.direction);
        }
    }
})
</script>
<style scoped>
.jiya-slider-main {
    position: relative;
    ;
}

.jiya-slider-main .jiya-slider {
    position: relative;
    width: 100%;
    overflow: hidden;
}

.jiya-slider-main .jiya-slider-indeca li,
.jiya-slider-main .jiya-slider li {
    list-style: none;
}

.jiya-slider-main .jiya-slider-indeca {
    text-align: center;
}

.jiya-slider-main .jiya-slider-indeca li {
    background: #f7ddda;
    border-radius: 50px;
    width: 13px;
    height: 13px;
    margin: 0 5px;
    display: inline-block;
    border: 1px solid #915f5a;
}

.jiya-slider-main .jiya-slider-indeca li.active {
    background: #915f5a;
    border: 2px solid #915f5a;
}
</style>
