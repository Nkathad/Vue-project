<template>
<div>
    <div v-for="fmenus in fmenu" class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
        <div class="common-title">
            <h3 class="footer-heading">{{fmenus.fooHeading}}</h3>
        </div>
        <div class="clearfix"></div>
        <ul v-bind:class="fmenus.classname" class="footer-link">
            <li v-for="foolinks in fmenus.foolink" v-bind:class="foolinks.classname">
                <a class="menu__link" :href="foolinks.url">{{ foolinks.name }}</a>
            </li>
        </ul>
    </div>
</div>
</template>
<script>
export default ({
    data() {
        return {
            fmenu: [{
                classname: 'list-unstyled',
                fooHeading: 'My accounts',
                foolink: [{
                    'url': 'Home',
                    'name': 'My accounts'
                }, {
                    'url': 'Home',
                    'name': 'Order History'
                }, {
                    'url': 'Home',
                    'name': 'Wish List'
                }, {
                    'url': 'Home',
                    'name': 'Vision'
                }, {
                    'url': 'Home',
                    'name': 'Lorem Ipsum'
                }]
            }, {
                classname: 'list-unstyled',
                fooHeading: 'information',
                foolink: [{
                    'url': 'Home',
                    'name': 'About Us'
                }, {
                    'url': 'Home',
                    'name': 'Freight & Delivery information'
                }, {
                    'url': 'Home',
                    'name': 'Privacy Policy'
                }, {
                    'url': 'Home',
                    'name': 'Terms & Conditions'
                }, {
                    'url': 'Home',
                    'name': 'Buying Guide'
                }]
            }, {
                classname: 'footer-contact-detail',
                fooHeading: 'Contact Details',
                foolink: [{
                    'classname': 'phone-number',
                    'name': '+47 51 90 57 50'
                }, {
                    'classname': 'fax-number',
                    'name': '+47 51 90 57 57'
                }, {
                    'classname': 'email-contact',
                    'url': 'Home',
                    'name': 'kontakt@respond.no'
                }, {
                    'classname': 'address-contact',
                    'url': 'Home',
                    'name': 'Madlaveien 4994020 Stavanger, Norway'
                }]
            }]
        }
    }
})
</script>
<style scoped>
ul li {
    list-style: none;
}

.middle-footer .footer-heading {
    float: left;
    font-family: "Roboto Condensed", sans-serif;
    font-size: 18px;
    font-weight: 700;
    letter-spacing: 0.5px;
    margin: 0 0 15px;
    padding: 0;
    text-transform: uppercase;
}

.list-unstyled {
    list-style: outside none none;
    padding-left: 0;
}

.middle-footer .footer-link a {
    font-family: "Roboto Condensed", sans-serif;
    font-size: 14px;
    font-weight: 300;
    line-height: 24px;
}

.footer-contact-detail li.phone-number,
.footer-contact-detail li.fax-number,
.footer-contact-detail li.email-contact,
.footer-contact-detail li.address-contact {
    background: url("../../src/assets/images/footer-icons.png") no-repeat;
    display: block;
    height: 30px;
    padding-left: 25px;
}

.footer-contact-detail li.phone-number {
    background-position: 0 0;
}

.footer-contact-detail li.fax-number {
    background-position: 0 -58px;
}

.footer-contact-detail li.address-contact {
    background-position: 0 -158px;
}

.footer-contact-detail li.email-contact {
    background-position: 0 -108px;
}
</style>
