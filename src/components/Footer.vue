<template>
<footer>
    <div class="middle-footer component__list-item">
        <div class="container">
            <div class="row">
                <footer-link></footer-link>
            </div>
            <footer-social></footer-social>
        </div>
    </div>
    <div class="bottom-footer main_colorbg">
        <div class="container">
            <span class="pull-left">Copyright © 2017 Gosh, All rights reserved</span>
            <span class="pull-right">Powered by :
              <a href="https://www.officebeacon.com/index.php/office-brain-software/" target="_blank">
                <img src="src/assets/images/officebrain-poweredby.png" alt="Office Brain">
              </a>
            </span>
        </div>
    </div>
</footer>
</template>
<script>
import Footerlink from './Footerlink.vue';
import Footersocial from './Footersocial.vue';
export default ({
    data() {
        return {}
    },
    components: {
        'footer-link': Footerlink,
        'footer-social': Footersocial,
    }
});
</script>

<style>
.middle-footer {
    font-size: 12px;
    letter-spacing: 0.8px;
    line-height: 22px;
    padding: 25px 0;
    text-transform: uppercase;
}

.bottom-footer {
    color: #fff;
    font-size: 12px;
    line-height: 40px;
}

.bottom-footer span {
    font-family: "Roboto Condensed", sans-serif;
    font-size: 14px;
    font-weight: 300;
}
</style>
