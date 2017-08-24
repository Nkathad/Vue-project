import Vue from 'vue';
import Vuex from 'Vuex';
import VueRouter from 'vue-router';
import VueCarousel from 'vue-carousel';
import App from './App.vue';
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import Home from './components/Home.vue';
import Aboutus from './components/Aboutus.vue';
import Product from './components/Product.vue';
import Information from './components/Information.vue';
import Aboutstest from './components/Aboutstest.vue';
import Dweep from './components/Dweep.vue';

Vue.use(Vuex);

Vue.use(VueRouter);
const routes = [
  { path: '/', component: Home},
  { path: '/Aboutus', component: Aboutus},
  { path: '/Product', component: Product},
  { path: '/Information', component: Information},
  { path: '/Aboutstest', component: Aboutstest},
  { path: '/Dweep', component: Dweep},
];
const router = new VueRouter({
  routes,
  mode: 'history'
});

Vue.use(VueCarousel);

Vue.component('header-component', Header);
Vue.component('footer-component', Footer);

new Vue({
  el: '#app',
  router,
  render: h => h(App)
});
