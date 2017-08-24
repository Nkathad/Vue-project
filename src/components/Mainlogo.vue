<template>
<div class="logo-col">
    <a :href="url"><img class="img-responsive" :src="logo"></a>
</div>
</template>
<script>
export default ({
    data() {
        return {
            url: '/',
            logo: 'src/assets/images/logo.png'
        }
    }
});
</script>
<style scoped>
.logo-col {
    margin: 5px 0;
}
</style>
