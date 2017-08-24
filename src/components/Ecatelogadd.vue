<template>
<div class="banner-over">
    <div class="cat-left-side">
        <h4>{{ecatTitle}}</h4>
        <ul>
            <li v-for="items in item">
                <a :href="items.url">{{ items.catlogTitle }}</a>
            </li>
        </ul>
        <a class="see-more" :href="url">{{ seeTitle }}<img :src="arrowImg" ></a>
    </div>
</div>
</template>
<script>
export default ({
    data() {
        return {
            ecatTitle: 'E-CATALOG',
            item: [{
                'url': '/',
                'catlogTitle': 'Gosh Catalogs'
            }, {
                'url': '/',
                'catlogTitle': 'Company Gifts'
            }, {
                'url': '/',
                'catlogTitle': 'Work Clothes'
            }, {
                'url': '/',
                'catlogTitle': 'Profile &amp; Sport Clothes'
            }, {
                'url': '/',
                'catlogTitle': 'Profile &amp; Advertising Items'
            }],
            url: '/',
            seeTitle: 'See More',
            arrowImg: 'src/assets/images/see-more-arrow.png'
        }
    }
})
</script>
<style scoped>
.banner-box .cat-left-side {
    background: url('../../src/assets/images/cat-01.png') 96% 85% no-repeat #253a5c;
    min-width: 570px;
    min-height: 400px;
    padding: 35px 0 0 35px;
    -webkit-transition: all .1s ease 0;
    transition: all .1s ease 0;
    background-attachment: scroll
}

.cat-left-side h4 {
    color: #fff;
    font-size: 30px;
    margin: 0 0 10px;
    padding: 0;
}

.cat-left-side ul li {
    color: #93a1b9;
    font-size: 14px;
    margin: 2px 0 0;
    padding: 0 12px;
    list-style: none;
}

.cat-left-side ul li:before {
    background: url('../../src/assets/images/sprite.png') no-repeat scroll -250px -572px;
    content: "";
    display: inline-block;
    height: 10px;
    width: 10px;
}

.cat-left-side ul {
    margin-bottom: 8px;
}

.cat-left-side a.see-more img {
    margin: -2px 0 0 5px;
}

.cat-left-side a.see-more {
    color: #1ea7c1;
    font-family: "Roboto Condensed", sans-serif;
    font-size: 12px;
    font-weight: 700;
    text-transform: uppercase;
}

.cat-left-side ul li a,
.cat-left-side ul li a:hover {
    color: #93a1b9;
    font-family: "Roboto Condensed", sans-serif;
    font-size: 13px;
    font-weight: 400;
    text-decoration: none;
}
</style>
