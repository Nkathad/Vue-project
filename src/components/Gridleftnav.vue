<template>
<div>
    <div class="ob-product-grid-left">
        <div class="filter-search">
            <!--CATEGORY FILTER-->
            <category-filter></category-filter>
            <!--END CATEGORY FILTER-->
        </div>
    </div>
</div>
</template>
<script>
import Categoryfilter from './Categoryfilter.vue';
export default ({
    data() {
        return {}
    },
    components: {
        'category-filter': Categoryfilter,
    }
})
</script>
<style scoped>

</style>
