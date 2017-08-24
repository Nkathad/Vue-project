<template>
<div class="ob-pro-category-box main_colorbg">
    <div class="container">
        <ul class="row pro-category-list">
            <li v-for="procatlist in productcatlist" v-bind:class="procatlist.colclass">
                <h3 class="pro-categoer-title">{{ procatlist.procattitle }}</h3>
                <h4 class="pro-categoer-title2">{{ procatlist.procattitle2 }}</h4>
                <div v-bind:class="procatlist.procatclass">
                    <a :href="procatlist.url">
                        <i></i>
                        <div> {{ procatlist.producttitle }} </div>
                    </a>
                </div>
            </li>
        </ul>
    </div>
</div>
</template>
<script>
export default ({
    data() {
        return {
            productcatlist: [{
                'colclass': 'col-lg-2 col-md-2 pro-cat-list1',
                'procattitle': 'PRODUCT',
                'procattitle2': 'CATEGORY'
            }, {
                'colclass': 'col-lg-1 col-md-1',
                'procatclass': 'pro-category1',
                'url': 'Home',
                'producttitle': 'Respond Exclusive'
            }, {
                'colclass': 'col-lg-1 col-md-1',
                'procatclass': 'pro-category2',
                'url': 'Home',
                'producttitle': 'Profile Clothing'
            }, {
                'colclass': 'col-lg-1 col-md-1',
                'procatclass': 'pro-category3',
                'url': 'Home',
                'producttitle': 'Identity'
            }, {
                'colclass': 'col-lg-1 col-md-1',
                'procatclass': 'pro-category4',
                'url': 'Home',
                'producttitle': 'Corporate Gifts'
            }, {
                'colclass': 'col-lg-1 col-md-1',
                'procatclass': 'pro-category5',
                'url': 'Home',
                'producttitle': 'Giveaways'
            }, {
                'colclass': 'col-lg-1 col-md-1',
                'procatclass': 'pro-category6',
                'url': 'Home',
                'producttitle': 'Travel Accessories'
            }, {
                'colclass': 'col-lg-1 col-md-1',
                'procatclass': 'pro-category7',
                'url': 'Home',
                'producttitle': 'Office Supplies'
            }, {
                'colclass': 'col-lg-1 col-md-1',
                'procatclass': 'pro-category8',
                'url': 'Home',
                'producttitle': 'Sportswear'
            }, {
                'colclass': 'col-lg-1 col-md-1',
                'procatclass': 'pro-category9',
                'url': 'Home',
                'producttitle': 'Safety Products'
            }, {
                'colclass': 'col-lg-1 col-md-1',
                'procatclass': 'pro-category10',
                'url': 'Home',
                'producttitle': 'Work'
            }]
        }
    }
})
</script>
<style scoped>
.ob-pro-category-box {
    height: auto;
    margin-top: 12px;
    padding-bottom: 100px;
}

.pro-category-list {
    margin-top: 70px;
    text-align: center;
}

.pro-category-list {
    color: #797e8c;
    font-family: "Roboto Condensed", sans-serif;
    font-size: 16px;
    font-weight: 400;
}

.ob-pro-category-box .pro-categoer-title {
    color: #fff;
    display: block;
    font-family: "Roboto", sans-serif;
    font-size: 36px;
    font-weight: 700;
    letter-spacing: 0.8px;
    margin-bottom: 5px;
    margin-top: 0;
}

.ob-pro-category-box .pro-categoer-title2 {
    color: #fff;
    display: block;
    font-family: "Roboto", sans-serif;
    font-size: 26px;
    font-weight: 300;
    letter-spacing: 5px;
    margin: 0;
    text-transform: uppercase;
}

.pro-category1 div,
.pro-category2 div,
.pro-category3 div,
.pro-category4 div,
.pro-category5 div,
.pro-category6 div,
.pro-category7 div,
.pro-category8 div,
.pro-category9 div,
.pro-category10 div,
.pro-category11 div,
.pro-category12 div,
.pro-category13 div {
    margin-top: 70px;
    font-size: 0.78em;
}

.pro-category-list {
    margin-top: 70px;
    text-align: center;
    list-style: none;
}

.pro-category1 a,
.pro-category2 a,
.pro-category3 a,
.pro-category4 a,
.pro-category5 a,
.pro-category6 a,
.pro-category7 a,
.pro-category8 a,
.pro-category9 a,
.pro-category10 a,
.pro-category11 a,
.pro-category12 a,
.pro-category13 a {
    border: 2px solid #fff;
    color: #fff;
    cursor: pointer;
    display: block;
    float: left;
    text-align: center;
    text-decoration: none;
    -webkit-transition: all .4s 0 ease;
    transition: all .4s 0 ease;
    width: 100%;
    height: 66px;
    font-size: 14px
}

.pro-cat-list1 {
    text-align: left
}

.pro-category-list a {
    position: relative
}

.pro-category-list i {
    position: absolute;
    top: 11px;
    width: 35px;
    height: 35px;
    margin: 0 auto;
    left: 0;
    right: 0
}

.pro-category1 a i {
    background: url('../../src/assets/images/sprite.png')no-repeat -35px 5px;
}

.pro-category1 a:hover i {
    background: url('../../src/assets/images/sprite.png')no-repeat -76px 5px;
}

.pro-category-list .pro-category2 a i {
    background: url('../../src/assets/images/sprite.png') no-repeat -35px -29px;
}

.pro-category-list .pro-category2 a:hover i {
    background: url('../../src/assets/images/sprite.png') no-repeat -76px -29px;
}

.pro-category-list .pro-category3 a i {
    background: url('../../src/assets/images/sprite.png') no-repeat -35px -64px;
}

.pro-category-list .pro-category3 a:hover i {
    background: url('../../src/assets/images/sprite.png') no-repeat -76px -64px;
}

.pro-category-list .pro-category4 a i {
    background: url('../../src/assets/images/sprite.png') no-repeat -35px -98px;
}

.pro-category-list .pro-category4 a:hover i {
    background: url('../../src/assets/images/sprite.png') no-repeat -76px -98px;
}

.pro-category-list .pro-category5 a i {
    background: url('../../src/assets/images/sprite.png') no-repeat -35px -138px;
}

.pro-category-list .pro-category5 a:hover i {
    background: url('../../src/assets/images/sprite.png') no-repeat -76px -138px;
}

.pro-category-list .pro-category6 a i {
    background: url('../../src/assets/images/sprite.png') no-repeat -35px -177px;
}

.pro-category-list .pro-category6 a:hover i {
    background: url('../../src/assets/images/sprite.png') no-repeat -76px -177px;
}

.pro-category-list .pro-category7 a i {
    background: url('../../src/assets/images/sprite.png') no-repeat -35px -217px;
}

.pro-category-list .pro-category7 a:hover i {
    background: url('../../src/assets/images/sprite.png') no-repeat -76px -217px;
}

.pro-category-list .pro-category8 a i {
    background: url('../../src/assets/images/sprite.png') no-repeat -35px -255px;
}

.pro-category-list .pro-category8 a:hover i {
    background: url('../../src/assets/images/sprite.png') no-repeat -76px -255px;
}

.pro-category-list .pro-category9 a i {
    background: url('../../src/assets/images/sprite.png') no-repeat -35px -295px;
}

.pro-category-list .pro-category9 a:hover i {
    background: url('../../src/assets/images/sprite.png') no-repeat -76px -295px;
}

.pro-category-list .pro-category10 a i {
    background: url('../../src/assets/images/sprite.png') no-repeat -35px -334px;
}

.pro-category-list .pro-category10 a:hover i {
    background: url('../../src/assets/images/sprite.png') no-repeat -76px -334px;
}

.pro-category-list .pro-category11 a i {
    background: url('../../src/assets/images/sprite.png') no-repeat -35px -377px;
}

.pro-category-list .pro-category11 a:hover i {
    background: url('../../src/assets/images/sprite.png') no-repeat -76px -377px;
}

.pro-category-list .pro-category12 a i {
    background: url('../../src/assets/images/sprite.png') no-repeat -114px -377px;
}

.pro-category-list .pro-category12 a:hover i {
    background: url('../../src/assets/images/sprite.png') no-repeat -154px -377px;
}

.pro-category-list .pro-category13 a i {
    background: url('../../src/assets/images/sprite.png') no-repeat -114px -334px;
}

.pro-category-list .pro-category13 a:hover i {
    background: url('../../src/assets/images/sprite.png') no-repeat -154px -334px;
}

.pro-category-list .pro-category1 a:hover,
.pro-category-list .pro-category2 a:hover,
.pro-category-list .pro-category3 a:hover,
.pro-category-list .pro-category4 a:hover,
.pro-category-list .pro-category5 a:hover,
.pro-category-list .pro-category6 a:hover,
.pro-category-list .pro-category7 a:hover,
.pro-category-list .pro-category8 a:hover,
.pro-category-list .pro-category9 a:hover,
.pro-category-list .pro-category10 a:hover,
.pro-category-list .pro-category11 a:hover,
.pro-category-list .pro-category12 a:hover,
.pro-category-list .pro-category13 a:hover {
    color: #adb1bb;
    -webkit-transition: all .4s ease 0;
    transition: all .4s ease 0;
}
</style>
