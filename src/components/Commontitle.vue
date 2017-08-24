<template>
<div class="component__heading common-title">
    <slot name="common-title">
        <h1>{{ comtitle }}</h1>
    </slot>
</div>
</template>
<script>
export default ({
    props: ['klass'],
    data() {
        return {
            comtitle: 'Let us Help you in what you are Looking for!',
        }
    }
})
</script>
<style>
.common-title h1 {
    font-size: 18px;
    font-family: 'Roboto', sans-serif;
    text-transform: uppercase;
    font-weight: 700;
}
</style>
