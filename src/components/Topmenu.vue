<template>
<div class="ob-top-menu component__list-item">
    <div class="container">
        <div class="info-menu slidemenu">
            <ul class="header-login">
                <li v-for="item in items" v-bind:class="item.className">
                    <a class="menu__link" :href="item.url" @click="item.showDropdown = true" @blur="item.showDropdown = false">{{ item.menu_title }}</a>
                    <ul class="dropdown-menu" v-if="item.showDropdown" style="display:block">
                        <li v-for="subMenu in item.subMenu">
                            <a :href="subMenu.url">{{subMenu.submenu_title}}</a>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    </div>
</div>
</template>
<script>
export default ({
    data() {
        return {
            items: [{
                'menu_title': 'Track Your Order',
                'url': 'Aboutstest',
                'showDropdown': false
            }, {
                'menu_title': 'Special Order',
                'url': '#',
                'className': 'dropdown',
                'showDropdown': false,
                subMenu: [{
                    'submenu_title': 'Abouts Test',
                    'url': 'Aboutstest'
                }, {
                    'submenu_title': 'Submenu Item2',
                    'url': '#'
                }, {
                    'submenu_title': 'Submenu Item3',
                    'url': '#'
                }]
            }, {
                'menu_title': 'About Us',
                'url': 'Aboutus',
                'showDropdown': false
            }, {
                'menu_title': 'Information',
                'url': 'Information',
                'showDropdown': false
            }, {
                'menu_title': 'Contact Us',
                'url': '#',
                'showDropdown': false
            }]
        }
    }

});
</script>
<style scoped>
.info-menu ul li>a {
    display: inline-block;
    border-right: #9c9c9c 1px solid;
    padding: 0 9px;
    line-height: 14px;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 12px;
}

.info-menu ul li ul li {
    display: block;
}

.info-menu ul li ul li a {
    display: block;
    padding: 5px;
    color: #000;
    text-align: left;
    border-right: none;
}

.info-menu ul li:last-child a {
    border-right: 0;
    padding-right: 0;
}

.info-menu ul li {
    display: inline-block;
    text-align: right;
}

.header-loging {
    list-style: none;
    margin: 34px 0 10px;
    padding: 0;
    float: right;
}

.info-menu ul {
    text-align: right;
    margin: 0;
}

.info-menu ul li ul.dropdown-menu {
    margin-top: 6px;
    border-radius: 0;
}

.ob-header .ob-top-menu {
    border-bottom: 1px #222 solid;
    font-family: 'Roboto Condensed', sans-serif;
    font-weight: 400;
    font-size: 13px;
    padding: 6px 0;
}

.show {
    display: block;
}
</style>
