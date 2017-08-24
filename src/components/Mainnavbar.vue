<template>
<div class="ob-menu">
    <nav class="navbar navbar-default main_colorbg">
        <div class="container">
            <ul class="nav navbar-nav">
                <li v-for="navlists in navlist">
                    <a :href="navlists.url">{{ navlists.menu_item }}</a>
                </li>
            </ul>
            <find-distributor></find-distributor>
            <main-searchbar></main-searchbar>
        </div>
    </nav>
</div>
</template>
<script>
import Finddistributor from './Finddistributor.vue';
import Mainsearchbar from './Mainsearchbar.vue';
export default ({
    data() {
        return {
            navlist: [{
                'menu_item': 'Home',
                'url': '/'
            }, {
                'menu_item': 'Product',
                'url': 'Product'
            }, {
                'menu_item': 'Promotions',
                'url': 'Dweep'
            }, {
                'menu_item': 'E-Catalog',
                'url': 'e-catalog'
            }]
        }
    },
    components: {
        'find-distributor': Finddistributor,
        'main-searchbar': Mainsearchbar,
    }
})
</script>
<style>
.ob-menu {
    background: #f5f5f5;
    box-shadow: -1px 2px 4px 0 rgba(0, 0, 0, 0.30);
}

.navbar-default {
    border-radius: 0;
    border: none;
}

.nav.navbar-nav li a {
    text-transform: uppercase;
    color: #fff;
    font-size: 14px;
    font-family: 'Roboto', sans-serif;
}
</style>
