<template>
<div class="row">
    <carousel :perPage="1">
        <slide v-for="slide in slides" :key="slide.id">
            <main-productbox :proitem="slide"></main-productbox>
        </slide>
    </carousel>
</div>
</template>

<script>
import {
    Carousel,
    Slide
} from 'vue-carousel';
import Mainprobox from './Mainprobox.vue';

export default {
    data() {
        return {
            slides: [{
                starratings: [{
                    'icon': 'fa fa-star-o'
                }, {
                    'icon': 'fa fa-star-o'
                }],
                salesflags: [{
                    'fcloseout': 'f-closeout',
                    'flagtitle': 'Closeout',
                    'flagtag': 'fa fa-tags'
                }],
                url: 'Home',
                promainimg: 'src/assets/images/shirt5.jpg',
                promaintitle: 'Berkeley Hampton Polo',
                itemcode: 'Item code P742.041',
                itemprice: 'Kr.9.30',
                itemlowas: 'as low as',
                productbtns: [{
                    'url': 'Home',
                    'icons': 'fa fa-shopping-cart fa-fw'
                }, {
                    'url': 'Home',
                    'icons': 'fa fa-comment'
                }, {
                    'url': 'Home',
                    'icons': 'fa fa-heart fa-fw'
                }, {
                    'url': 'Home',
                    'icons': 'fa fa-retweet fa-fw'
                }],
                productdisc: 'This is Photoshops version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit.'
            }, {
                starratings: [{
                    'icon': 'fa fa-star-o'
                }, {
                    'icon': 'fa fa-star-o'
                }],
                salesflags: [{
                    'fcloseout': 'f-closeout',
                    'flagtitle': 'Closeout',
                    'flagtag': 'fa fa-tags'
                }],
                url: 'Home',
                promainimg: 'src/assets/images/shirt2.jpg',
                promaintitle: 'Berkeley Hampton Polo',
                itemcode: 'Item code P742.041',
                itemprice: 'Kr.9.30',
                itemlowas: 'as low as',
                productbtns: [{
                    'url': 'Home',
                    'icons': 'fa fa-shopping-cart fa-fw'
                }, {
                    'url': 'Home',
                    'icons': 'fa fa-comment'
                }, {
                    'url': 'Home',
                    'icons': 'fa fa-heart fa-fw'
                }, {
                    'url': 'Home',
                    'icons': 'fa fa-retweet fa-fw'
                }],
                productdisc: 'This is Photoshops version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit.'
            }, {
                starratings: [{
                    'icon': 'fa fa-star-o'
                }, {
                    'icon': 'fa fa-star-o'
                }],
                salesflags: [{
                    'fcloseout': 'f-closeout',
                    'flagtitle': 'Closeout',
                    'flagtag': 'fa fa-tags'
                }],
                url: 'Home',
                promainimg: 'src/assets/images/shirt7.jpg',
                promaintitle: 'Berkeley Hampton Polo',
                itemcode: 'Item code P742.041',
                itemprice: 'Kr.9.30',
                itemlowas: 'as low as',
                productbtns: [{
                    'url': 'Home',
                    'icons': 'fa fa-shopping-cart fa-fw'
                }, {
                    'url': 'Home',
                    'icons': 'fa fa-comment'
                }, {
                    'url': 'Home',
                    'icons': 'fa fa-heart fa-fw'
                }, {
                    'url': 'Home',
                    'icons': 'fa fa-retweet fa-fw'
                }],
                productdisc: 'This is Photoshops version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit.'
            }, {
                starratings: [{
                    'icon': 'fa fa-star-o'
                }, {
                    'icon': 'fa fa-star-o'
                }],
                salesflags: [{
                    'fcloseout': 'f-closeout',
                    'flagtitle': 'Closeout',
                    'flagtag': 'fa fa-tags'
                }],
                url: 'Home',
                promainimg: 'src/assets/images/shirt8.jpg',
                promaintitle: 'Berkeley Hampton Polo',
                itemcode: 'Item code P742.041',
                itemprice: 'Kr.9.30',
                itemlowas: 'as low as',
                productbtns: [{
                    'url': 'Home',
                    'icons': 'fa fa-shopping-cart fa-fw'
                }, {
                    'url': 'Home',
                    'icons': 'fa fa-comment'
                }, {
                    'url': 'Home',
                    'icons': 'fa fa-heart fa-fw'
                }, {
                    'url': 'Home',
                    'icons': 'fa fa-retweet fa-fw'
                }],
                productdisc: 'This is Photoshops version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit.'
            }]

        }
    },
    components: {
        Carousel,
        Slide,
        'main-productbox': Mainprobox,
    }
};
</script>
