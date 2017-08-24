<template>
<div id="app">
    <div class="controls">
        <h2>Select Theme Color</h2>
        <button class="theme-btn" data-theme="default"></button>
        <button class="theme-btn" data-theme="banana"></button>
        <button class="theme-btn" data-theme="cherry" disabled></button>
        <button class="theme-btn" data-theme="blueberry"></button>
        <button class="theme-btn" data-theme="leaf"></button>
        <button class="theme-btn" data-theme="nightsky"></button>
        <button class="theme-btn" data-theme="lightgreen"></button>
    </div>
    <header-component></header-component>
    <router-view></router-view>
    <footer-component></footer-component>
</div>
</template>


<script>
export default ({
    data() {
        return {}
    }
});
</script>
<style lang="scss">@import "assets/sass/color.scss";</style>
