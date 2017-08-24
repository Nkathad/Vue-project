<template>
<div class="ob-logo-block">
    <div class="container">
        <div class="row">
            <div class="col-lg-3 col-md-3 col-sm-3">
                <main-logo></main-logo>
            </div>
            <div class="col-lg-9 col-md-9 col-sm-9">
                <shop-menu></shop-menu>
            </div>
        </div>
    </div>
</div>
</template>
<script>
import Mainlogo from './Mainlogo.vue';
import Shopmenu from './Shopmenu.vue';
export default ({
    data() {
        return {}
    },
    components: {
        'main-logo': Mainlogo,
        'shop-menu': Shopmenu,
    }
});
</script>
<style>
.ob-logo-block {
    padding: 10px 0;
}
</style>
