<template>
<div id="home">
    <div class="carousel slide" @mouseleave="resume" @mouseover="pause">
        <!-- Indicators -->
        <ol class="carousel-indicators">
            <li :class="[index==start ? 'active' : '']" v-for="(banner,index) in bannerList" @click="indicators(index)"></li>
        </ol>

        <!-- Wrapper for slides -->
        <transition-group name="slide" tag="div" class="carousel-inner" v-bind:css="false">
            <div :class="[index==start ? 'item active': 'item', old==index ? direction:'']" v-for="(banner,index) in bannerList" :key="index">
                <img :src="banner.image" alt="sdf">
                <div class="carousel-caption" v-if="banner.label">
                    Here vxcv xcvxcv
                </div>
            </div>
        </transition-group>

        <!-- Controls -->
        <a class="left carousel-control" href="javascript:void(0);" @click="prev">
            <span class="icon-prev"><i class="fa fa-chevron-left"></i></span>
        </a>
        <a class="right carousel-control" href="javascript:void(0);" @click="next">
            <span class="icon-next"><i class="fa fa-chevron-right"></i></span>
        </a>
    </div>
</div>
</template>

<script>
export default {
    props: ['bannerList', 'circularloop'],
    data() {
        return {
            start: 0,
            end: 0,
            timer: null,
            direction: 'next',
            new: null,
            old: null
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
            console.log('________________', nodeList);
            if (direction == "prev") {
                console.log('_________ PREV _______', nodeList[this.start].classList.remove('prev'));
                nodeList[this.start].classList.remove('prev');
                nodeList[this.start].classList.add('next');
            }
            if (direction == "next") {
                nodeList[this.start].classList.remove('next');
                nodeList[this.start].classList.add('prev');
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

#home {
    padding-top: 30px;
}

#home h1 {
    color: #f2af00;
    font-weight: 300;
    padding-bottom: 10px;
}

#home h2 {
    line-height: 10px;
}

#home .btn {
    background: rgba(255, 255, 255, 0.6);
    border: 2px solid #444;
    border-radius: 0px;
    color: #444;
    font-weight: bold;
    font-size: 16px;
    padding-top: 14px;
    width: 200px;
    padding: 20px;
    margin-top: 20px;
    transition: all 0.4s ease-in-out;
    -webkit-transition: all 0.4s ease-in-out;
    -moz-transition: all 0.4s ease-in-out;
    -ms-transition: all 0.4s ease-in-out;
}

#home .btn:hover {
    background: #dc5034;
    border-color: transparent;
    color: #fff;
}
</style>
