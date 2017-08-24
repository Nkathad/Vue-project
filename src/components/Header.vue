<template>
<header>
    <div id="js-fix-header-controller">
        <top-header></top-header>
        <header-navbar></header-navbar>
    </div>
</header>
</template>

<script>
import Topheader from './Topheader.vue';
import Mainnavbar from './Mainnavbar.vue';

export default {
    data() {
        return {}
    },
    components: {
        'top-header': Topheader,
        'header-navbar': Mainnavbar,
    }
}
</script>

<style>
header {
    margin: 0;
}
</style>
