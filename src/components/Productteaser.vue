<template>
<div class="row">
    <div v-for="proitem in proitems" class="col-lg-3 col-md-3 col-sm-3 col-xs-12 help-products">
        <a :href="proitem.url">
            <img class="img-responsive" :src="proitem.proimg">
        </a>
    </div>
</div>
</template>
<script>
export default ({
    data() {
        return {
            proitems: [{
                'proimg': 'src/assets/images/help1.png',
                'url': 'Home'
            }, {
                'proimg': 'src/assets/images/help2.png',
                'url': 'Home'
            }, {
                'proimg': 'src/assets/images/help3.png',
                'url': 'Aboutus'
            }, {
                'proimg': 'src/assets/images/help4.png',
                'url': 'Home'
            }]
        }
    }
})
</script>
<style scoped>
.help-products a {
    display: table-cell;
    vertical-align: middle;
    height: 178px;
    border: 1px solid #e5e5e5;
}
</style>
