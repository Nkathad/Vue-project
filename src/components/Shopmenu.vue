<template>
<div class="shop-menu-col">
    <div class="slidemenu shop-menu">
        <ul class="header-loging">
            <li v-for="shop in shops" class="header-login-text">
                <a class="menu__link" :href="shop.url">
                    <i v-bind:class="shop.icon"></i>
                    <span class="login-text">
                    <span>{{ shop.manu_title }}</span> <span class="items-counter">({{ shop.count }})</span>
                    </span>
                </a>
            </li>

        </ul>
    </div>
</div>
</template>
<script>
export default ({
    data() {
        return {
            shops: [{
                'manu_title': 'Request Quote',
                'url': 'home',
                'icon': 'fa fa-quote-right',
                'count': 2
            }, {
                'manu_title': 'Compare',
                'url': 'home',
                'icon': 'fa fa-retweet fa-fw',
                'count': 2
            }, {
                'manu_title': 'Wishlist',
                'url': 'home',
                'icon': 'fa fa-heart',
                'count': 0
            }, {
                'manu_title': 'Add to Quote',
                'url': 'home',
                'icon': 'fa fa-comment',
                'count': 5
            }, {
                'manu_title': 'Cart',
                'url': 'home',
                'icon': 'fa fa-shopping-cart',
                'count': 0
            }, {
                'manu_title': 'Login',
                'url': 'home',
                'icon': 'fa fa-sign-in',
            }]
        }
    }
});
</script>
<style>
.header-loging {
    list-style: none;
    margin: 34px 0 10px;
    padding: 0;
    float: right;
}

.header-loging li.header-login-text {
    font-size: 12px;
    border-right: 1px solid #9e9e9e;
    float: left;
}

.header-loging li.header-login-text:last-child {
    border-right: none;
}

.header-loging li a {
    text-transform: uppercase;
    color: #666464;
    padding: 0 4px;
    font-size: 14px;
    font-family: 'Roboto', sans-serif;
}

.header-loging li.last {
    border-right: none;
}

.header-loging li.header-login-text:last-child a span.items-counter {
    display: none;
}
</style>
