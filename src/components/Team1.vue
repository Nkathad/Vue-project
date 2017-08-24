<template>
<div>
    <div id="team">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="slider-wrapper">
            <div class="col-md-12 col-sm-12 title-tag">
                <h2>People behind the firm</h2>
            </div>
            <div class="clearfix"></div>
            <div class="owl-carousel">
              <div v-for="(team,index) in teams" :class="[end >= index && index>=start ? 'item col-lg-3 active' :'item col-lg-3' ]">
                <div class="product-block">
                  <a :href="team.teamurl"><img :src="team.teamimg" alt="Text"></a>
                </div>
              </div>
              <div class="owl-nav">
                <div class="owl-prev" @click="prevSlide">prev</div>
                <div class="owl-next" @click="nextSlide">next</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="clearfix"></div>
</div>

</template>

<script>
export default {
  name: 'Team',

  data() {
    return {
      start: 0,
      end: 0,
      noofslide: 4,
      totalslide: 0,
      teams: [{
          'teamurl': 'coming-soon',
          'teamimg': 'static/images/team1.jpg',
        },
        {
          'teamurl': 'coming-soon',
          'teamimg': 'static/images/team2.jpg',
        },
        {
          'teamurl': 'coming-soon',
          'teamimg': 'static/images/team3.jpg',
        },

        {
          'teamurl': 'coming-soon',
          'teamimg': 'static/images/team4.jpg',
        },

        {
          'teamurl': 'coming-soon',
          'teamimg': 'static/images/team1.jpg',
        },

        {
          'teamurl': 'coming-soon',
          'teamimg': 'static/images/team2.jpg',
        },
        {
          'teamurl': 'coming-soon',
          'teamimg': 'static/images/team3.jpg',
        },
        {
          'teamurl': 'coming-soon',
          'teamimg': 'static/images/team4.jpg',
        },

      ]

    }
  },
  created() {
    this.end = this.noofslide - 1;
    this.totalslide = this.teams.length;
    //setInterval(this.nextImage, 2000);
  },
  methods: {

    prevSlide() {
      this.start = this.start - 1;
      if (this.start < 0) {
        this.start = 0;
        this.end = this.noofslide - 1;
      } else {
        this.end = this.end - 1;
      }
    },

    nextSlide() {
      this.end = this.end + 1;
      if (this.end < this.totalslide) {
        this.start = this.start + 1;
      } else {
        this.end = this.totalslide - 1;
      }
    }

  }

}
</script>
<style scoped>
.clearfix{clear:both;}

.owl-carousel .owl-item img {
  transform-style: preserve-3d;
}

.owl-carousel .owl-item img {
  display: block;
  -webkit-transform-style: preserve-3d;
}

.owl-next, .owl-prev {
    float: left;
    cursor: pointer;
}
.owl-brand .owl-nav {
    margin-right: -4px;
    margin-top: -45px;
}
.owl-carousel .owl-nav {
    cursor: default;
    pointer-events: auto;
    opacity: 1;
    text-align: right;
    margin: -40px 12px 0 0;
    position: absolute;
    display: inline-block;
    top: inherit;
    right: 0;
    font-size: 0;
}
.item.active {
  display: block;
}

.item {
  display: none;
}
/* team section */
#team {
  padding-top: 60px;
  padding-bottom: 80px;
}
#team h2 {
  display: inline-block;
  padding: 0;
}
#team h4 {
	padding-bottom: 40px;
}
#team .col-md-12 {
  text-align: center;
  padding-bottom: 60px;
}
#team img {
  border: 1px solid #666;
  padding: 15px;
}
#team .owl-carousel .item {
    margin: 15px;
}
/* portfolio section */
</style>
