<template>
<div>
    <div class="social-icon-box">
        <div class="pull-left">
            <ul>
                <li v-for="fooSocials in fooSocial" class="social-icon">
                    <a :href="fooSocials.url"><i v-bind:class="fooSocials.classname" class="strip-icon"></i></a>
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
            fooSocial: [{
                'url': 'Home',
                'classname': 'fb-icon'
            }, {
                'url': 'Home',
                'classname': 'twitter-icon'
            }, {
                'url': 'Home',
                'classname': 'g-plus-icon'
            }, {
                'url': 'Home',
                'classname': 'in-icon'
            }, {
                'url': 'Home',
                'classname': 'instagram-icon'
            }]
        }
    }
})
</script>
<style scoped>
.middle-footer .social-icon-box {
    border-top: 1px solid #d5d5d5;
    margin-top: 20px;
    padding-top: 25px;
}

.social-icon-box li {
    display: inline-block;
}

.social-icon {
    float: left;
    margin-right: 10px;
}

.social-icon-box .strip-icon {
    background: url(../../src/assets/images/social-icons.png);
    background-repeat: no-repeat;
    width: 40px;
    height: 32px;
    background-position: 0 0;
    display: block
}

.social-icon-box .strip-icon.fb-icon {
    background-position: -9px -9px
}

.social-icon-box .strip-icon.twitter-icon {
    background-position: -59px -9px
}

.social-icon-box .strip-icon.g-plus-icon {
    background-position: -108px -9px
}

.social-icon-box .strip-icon.in-icon {
    background-position: -156px -9px
}

.social-icon-box .strip-icon.instagram-icon {
    background-position: -205px -9px
}
</style>
