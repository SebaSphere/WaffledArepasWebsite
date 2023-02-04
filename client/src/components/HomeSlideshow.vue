<!-- TODO: at suggestion of my brother, make the slideshow "go big" when you scroll down -->
<!-- TODO: make slides clickable and go to different:bulb: places on the website with <router-link> -->
<template>
  <vueper-slides autoplay :dragging-distance="70" prevent-y-scroll :pause-on-hover = true>
    <vueper-slide
        v-for="(slide, i) in slides"
        duration="7000"
        :key="i"
        :image="slide.image_url"
        class="transform hover:scale-[110%] transition-all duration-300"
    >
    </vueper-slide>
  </vueper-slides>
</template>

<script>
  import { VueperSlides, VueperSlide } from 'vueperslides'
  import 'vueperslides/dist/vueperslides.css'
  export default {
    components: { VueperSlides, VueperSlide },
    data: () => ({
      // TODO: take actual images of arepas
      slides: [
        {
          image_url: 'https://images.unsplash.com/photo-1562376552-0d160a2f238d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1325&q=80',
          website_url: `/`
        },
        {
          image_url: 'https://assets.epicurious.com/photos/609e95b3761b1a5ebbdfb308/16:9/w_1280,c_limit/Best-Waffle-Iron-03052018_V1.jpg',
          website_url: `/`
        },
        {
          image_url: 'https://www.gannett-cdn.com/presto/2020/05/21/USAT/3cdb914b-9b84-4d66-9903-382f499035cf-Waffle_House_Waffles_-_Made_at_Home_-_REV6.00_01_23_09.Still001.jpg?crop=1911,1075,x0,y0&width=1911&height=1075&format=pjpg&auto=webp',
          website_url: `/`
        }
      ]
    })
  }

</script>