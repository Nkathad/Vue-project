<template>
<div class="ob-header component">
    <div class="main-logo-part">
        <top-menubar></top-menubar>
        <main-logoblock></main-logoblock>
    </div>
</div>
</template>

<script>
import Topmenu from './Topmenu.vue';
import Mainheader from './Mainheader.vue';
export default ({
    data() {
        return {
            msg: 'Hello Naresh'
        }
    },
    components: {
        'top-menubar': Topmenu,
        'main-logoblock': Mainheader,
    }
});
</script>
<style scoped>
.ob-header {
    background: #f7f7f7;
    height: auto;
}
</style>
