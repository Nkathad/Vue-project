<template>
<div>
    <div class="container">
        <div class="row">
            <div class="col-lg-12">
                <common-title :klass="classObject">
                    <h1 slot="common-title">Product </h1>
                </common-title>
            </div>
            <div class="clearfix"></div>
        </div>
        <div class="row">
            <div class="col-lg-3 col-md-4 col-sm-4 col-xs-12">
                <grid-leftnav></grid-leftnav>
            </div>
            <div class="col-lg-9 col-md-8 col-sm-8 col-xs-12">
                <div class="col-lg-12">
                    <common-title :klass="classObject">
                        <h1 slot="common-title">Tennis Shirts/Blouses </h1>
                    </common-title>
                </div>
                <div class="clearfix"></div>
                <ul class="product_listing">
                    <li v-for="slide in slides" :key="slide.id" class="proitemlist">
                        <main-productbox :proitem="slide"></main-productbox>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</div>
</template>
<script>
import Commontitle from './Commontitle.vue';
import Mainprobox from './Mainprobox.vue';
import Gridleftnav from './Gridleftnav.vue';
export default ({
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
                    promainimg: 'src/assets/images/shirt1.jpg',
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
                    }, {
                        'icon': 'fa fa-star-o'
                    }, {
                        'icon': 'fa fa-star-o'
                    }],
                    salesflags: [{
                        'fcloseout': 'f-new',
                        'flagtitle': 'New',
                        'flagtag': 'fa fa-archive'
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
                    }, {
                        'icon': 'fa fa-star-o'
                    }, {
                        'icon': 'fa fa-star-o'
                    }, {
                        'icon': 'fa fa-star-o'
                    }],
                    salesflags: [{
                        'fcloseout': 'f-featured',
                        'flagtitle': 'Featured',
                        'flagtag': 'fa fa-thumbs-up'
                    }],
                    url: 'Home',
                    promainimg: 'src/assets/images/shirt3.jpg',
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
                    }, {
                        'fcloseout': 'f-featured',
                        'flagtitle': 'Featured',
                        'flagtag': 'fa fa-thumbs-up'
                    }, {
                        'fcloseout': 'f-new',
                        'flagtitle': 'New',
                        'flagtag': 'fa fa-archive'
                    }],
                    url: 'Home',
                    promainimg: 'src/assets/images/shirt1.jpg',
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
                },
                {
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
                    promainimg: 'src/assets/images/shirt1.jpg',
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
                    }, {
                        'icon': 'fa fa-star-o'
                    }, {
                        'icon': 'fa fa-star-o'
                    }],
                    salesflags: [{
                        'fcloseout': 'f-new',
                        'flagtitle': 'New',
                        'flagtag': 'fa fa-archive'
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
                    }, {
                        'icon': 'fa fa-star-o'
                    }, {
                        'icon': 'fa fa-star-o'
                    }, {
                        'icon': 'fa fa-star-o'
                    }],
                    salesflags: [{
                        'fcloseout': 'f-featured',
                        'flagtitle': 'Featured',
                        'flagtag': 'fa fa-thumbs-up'
                    }],
                    url: 'Home',
                    promainimg: 'src/assets/images/shirt3.jpg',
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
                    }, {
                        'fcloseout': 'f-featured',
                        'flagtitle': 'Featured',
                        'flagtag': 'fa fa-thumbs-up'
                    }, {
                        'fcloseout': 'f-new',
                        'flagtitle': 'New',
                        'flagtag': 'fa fa-archive'
                    }],
                    url: 'Home',
                    promainimg: 'src/assets/images/shirt1.jpg',
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
                }
            ]

        }
    },
    components: {
        'common-title': Commontitle,
        'main-productbox': Mainprobox,
        'grid-leftnav': Gridleftnav,
    },
    computed: {
        classObject() {
            return {
                commonTitle: "common-title"
            }
        }
    }
})
</script>
<style scoped>
.product_listing li.proitemlist {
    list-style: none;
    float: left;
    width: 33%;
}
</style>
