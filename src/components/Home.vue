<template>
<div>
    <div class="home-content">
        <div class="container">
            <div class="row">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <a target="new" href="./Product">Hello Naresh</a>
                </div>
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <banner-slider></banner-slider>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <common-title :klass="classObject">
                        <h1 slot="common-title">This is testing </h1>
                    </common-title>
                    <product-teaser></product-teaser>
                </div>
                <div class="col-lg-9 col-md-8">
                    <common-title :klass="classObject">
                        <h1 slot="common-title">Recommended Products </h1>
                    </common-title>
                    <recommeded-products></recommeded-products>
                </div>
                <div class="col-lg-3 col-md-4">
                    <common-title :klass="classObject">
                        <h1 slot="common-title">BEST SELLING ITEMS </h1>
                    </common-title>
                    <bestsell-products></bestsell-products>
                </div>
            </div>
        </div>
    </div>
    <product-category></product-category>
    <div class="ob-our-brand component__list-item">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="slider-wrapper">
                        <common-title :klass="classObject">
                            <h1 slot="common-title">BEST SELLING ITEMS </h1>
                        </common-title>
                        <brand></brand>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="container">
        <div class="banner-box">
            <div class="row">
                <div class="col-lg-6 col-md-6 col-sm-12">
                    <ecatelog-add></ecatelog-add>
                </div>
                <div class="col-lg-6 col-md-6 col-sm-12 cat-right-side">
                    <deal-banner></deal-banner>
                    <div class="row">
                        <div class="col-md-6 col-sm-6 ">
                            <video-banner></video-banner>
                        </div>
                        <div class="col-md-6 col-sm-6 ">
                            <advertise-profile></advertise-profile>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="container">
        <div class="row">
            <div class="col-lg-12">
                <button type="button" class="btn-primary" @click="showModal = true">Demo Modal</button>
                <my-modal :showModal="showModal" @close="showModal = false">
                    <h4 slot="modal-title">Naresh Kathad</h4>
                    <div slot="modal-body">Home Body</div>
                </my-modal>
            </div>
        </div>
    </div>
</div>
</template>
<script>
import Bannerslider from './Bannerslider.vue';
import Commontitle from './Commontitle.vue';
import Productteaser from './Productteaser.vue';
import Recommededproducts from './Recommededproducts.vue';
import Bestsell from './Bestsell.vue';
import Productcategory from './Productcategory.vue';
import Brand from './Brand.vue';
import Ecatelogadd from './Ecatelogadd.vue';
import Advertisedeal from './Advertisedeal.vue';
import Advertisevideo from './Advertisevideo.vue';
import Advertiseprofile from './Advertiseprofile.vue';
import Modal from './Modal.vue';
export default ({
    data() {
        return {
            showModal: false,
            showNewPostModal: false,
            msg: ''
        }
    },
    components: {
        'banner-slider': Bannerslider,
        'common-title': Commontitle,
        'product-teaser': Productteaser,
        'recommeded-products': Recommededproducts,
        'bestsell-products': Bestsell,
        'product-category': Productcategory,
        'brand': Brand,
        'ecatelog-add': Ecatelogadd,
        'deal-banner': Advertisedeal,
        'video-banner': Advertisevideo,
        'advertise-profile': Advertiseprofile,
        'my-modal': Modal,
    },
    computed: {
        classObject() {
            return {
                commonTitle: "common-title"
            }
        }
    }
});
</script>
<style scoped>
.ob-our-brand {
    padding: 25px 0 10px;
}

.banner-box {
    margin-bottom: 30px;
    margin-top: 30px;
}
</style>
