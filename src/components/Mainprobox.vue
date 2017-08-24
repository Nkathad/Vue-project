<template>
<div>
    <div class="col-lg-12" v-for="proitem in getMainProBox">
        <div class="pro-box">
            <div class="pro-image box01">
                <div class="product-rating-top-block">
                    <div class="rating">
                        <i v-for="rating in proitem.starratings " v-bind:class="rating.icon"></i>
                    </div>
                </div>
                <div class="product-flag-block">
                    <div v-for="sales in proitem.salesflags" class="sales">
                        <div v-bind:class="sales.fcloseout" class="product-label">
                            <h2 class="logo"><i v-bind:class="sales.flagtag"></i>{{ sales.flagtitle }}</h2>
                        </div>
                    </div>
                </div>
                <div class="clearfix"></div>
                <div class="product-img-blk">
                    <a :href="proitem.url"><img class="img-responsive center-block" :src="proitem.promainimg" alt=""></a>
                </div>
                <div class="product-quickview hidden-xs">
                    <a class="pav-colorbox glyphicon cboxElement" href="" data-target="#quick_view_product" data-toggle="modal">
                        <i class="fa fa-eye"></i>
                    </a>
                </div>
            </div>
            <div class="pro-desc component__list-item">
                <a :href="proitem.url" class="item-title component__heading">{{ proitem.promaintitle }}</a>
                <div class="item-code">
                    {{ proitem.itemcode }}
                </div>
                <div class="item-price">
                    <span>{{ proitem.itemlowas }}</span> {{ proitem.itemprice }}
                </div>
                <div class="list-quantity-block">
                    <p>{{ proitem.productdisc }}</p>
                </div>
                <div class="pro-button">
                    <ul>
                        <li v-for="probtn in proitem.productbtns">
                            <a :href="probtn.url">
                                <i v-bind:class="probtn.icons"></i>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</div>
</template>
<script>
export default ({
    props: ['proitem'],
    data() {
        return {
            proitems: []
        }
    },
    computed: {
        getMainProBox() {
            if (Array.isArray(this.proitem)) {
                this.proitems = this.proitem;
            } else {
                this.proitems.push(this.proitem);
            }
            return this.proitems;
        }
    }
})
</script>
<style scoped>
.pro-box {
    border: 1px #d2d2d2 solid;
}

.pro-box {
    margin-bottom: 30px;
    position: relative;
    cursor: auto;
}

.pro-image {
    position: relative;
}

.list-quantity-block {
    display: none;
}

.product-img-blk {
    position: relative;
    height: 280px;
    background: #fff;
    text-align: center;
    display: block;
    width: 100%;
}

.product-block .product-rating-top-block,
.pro-box .product-rating-top-block {
    left: 10px;
    position: absolute;
    top: 7px;
    z-index: 2;
}

.rating {
    font-size: 15px;
    font-weight: 400;
    height: 20px;
    transition: all 0.3s ease-in-out 0s;
    width: auto;
}

.product-img-blk img,
.print-main-img img {
    top: 50%;
    left: 50%;
    margin: auto;
    max-height: 75%;
    max-width: 99%;
    position: absolute;
    -ms-transform: translateX(-50%) translateY(-50%);
    transform: translateX(-50%) translateY(-50%);
    -webkit-transform: translateX(-50%) translateY(-50%);
}

.product-flag-block {
    position: absolute;
    right: 0;
    z-index: 1;
}

.sales {
    text-align: center;
    margin: 0 auto;
}

.product-label {
    position: relative;
    height: 30px;
    padding: 0 10px 0 0;
    right: 0;
    float: right;
    background: #8D8D8D;
}

.f-new {
    background: #f06142;
}

.f-closeout {
    background: #359dd3;
}

.f-featured {
    background: #9cc02c;
}

.product-label h2 {
    padding-top: 9px;
    color: #fff;
    font-size: 12px;
    text-transform: uppercase;
    white-space: nowrap;
}

.product-label h2.logo i {
    padding-right: 5px;
}

.product-label:after,
.product-label:before {
    left: 0;
    top: 0;
    border: 1px solid transparent;
    content: " ";
    height: 0;
    width: 0;
    position: absolute;
    pointer-events: none;
}

.sales {
    height: 30px;
    margin-top: 5px;
    max-width: 130px;
}

.product-label:before {
    content: '';
    position: absolute;
    left: 0;
    left: -20px;
    top: 0;
    width: 0;
    height: 0;
    border-top: 29px solid #8D8D8D;
    border-left: 20px solid transparent;
}

.product-label:after {
    content: '';
    position: absolute;
    left: -20px;
    right: 0;
    width: 0;
    height: 0;
    border-bottom: 29px solid #8D8D8D;
    border-left: 20px solid transparent;
}

.product-label.f-closeout:before {
    border-top: 29px solid #359dd3;
}

.product-label.f-closeout:after {
    border-bottom: 29px solid #359dd3;
}

.product-label.f-featured:before {
    border-top: 29px solid #9cc02c;
}

.product-label.f-featured:after {
    border-bottom: 29px solid #9cc02c;
}

.product-label.f-new:before {
    border-top: 29px solid #f06142;
}

.product-label.f-new:after {
    border-bottom: 29px solid #f06142;
}

.pro-box:hover {
    border: 1px #ec008b solid;
}

.pro-box .pav-colorbox {
    left: 40%;
    top: 45%;
}

.pro-box .product-zoom,
.pro-box .pav-colorbox {
    border-radius: 100%;
    color: #fff;
    display: block;
    font-size: 20px;
    height: 54px;
    line-height: 48px;
    opacity: 0;
    position: absolute;
    text-align: center;
    transform: scale(0.2) rotate(0deg);
    transition: all .1s ease .1s;
    visibility: hidden;
    width: 55px;
    z-index: 1;
}

.pro-box:hover .product-zoom,
.pro-box:hover .pav-colorbox {
    opacity: 1;
    outline: medium none;
    transform: scale(1) rotate(360deg);
    transition: all .1s ease 0;
    visibility: visible;
}

.pro-desc {
    text-align: center;
    padding: 15px 0;
    position: relative;
    min-height: 110px;
}

.pro-box:hover .pro-desc .item-title {
    color: #ec008b;
}

.pro-desc .item-code {
    font-size: 14px;
    color: #7f7f7f;
    border-bottom: 1px #ccc solid;
    display: inline-block;
    font-family: 'Roboto Condensed', sans-serif;
    font-weight: 300;
    padding-bottom: 5px;
}

.pro-desc .item-price {
    font-size: 22px;
    font-family: 'Roboto Condensed', sans-serif;
    font-weight: 700;
}

.pro-desc .item-price span {
    margin-top: -3px;
    display: inline-block;
    font-size: 17px;
    color: #999;
    font-family: 'Roboto Condensed', sans-serif;
    font-weight: 300;
    vertical-align: middle;
    padding-right: 5px;
}

.pro-desc .item-title {
    font-size: 15px;
    display: block;
    font-family: 'Roboto Condensed', sans-serif;
    font-weight: 400;
    text-transform: uppercase;
    padding: 0 5px;
    min-height: 45px;
}

.pro-box:hover .pro-desc .item-price {
    color: #222;
}

.pro-desc .pro-button {
    left: 0;
    margin: 0 auto;
    opacity: 0;
    padding: 5px 0;
    position: absolute;
    right: 0;
    top: -44px;
}

.pro-desc .pro-button ul li:first-child {
    min-width: 35px;
    width: auto;
}

.pro-desc .pro-button ul li {
    display: inline-block;
    margin-right: 6.5px;
    width: 35px;
}

.pro-desc .pro-button ul li a {
    background: #999 none repeat scroll 0 0;
    color: #fff;
    display: block;
    font-size: 14px;
    padding: 7px 8px;
    text-transform: uppercase;
}

.pro-desc .pro-button ul li a i.fa {
    font-size: 15px;
}

.pro-box:hover .pro-button {
    display: block;
    opacity: 1;
}
</style>
