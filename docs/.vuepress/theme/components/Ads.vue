<template>
  <div class="ads">
    <div
      class="item"
      v-for="ads in $themeConfig.adsConfig">
      <h6 class="title" v-show="!notName">{{ads.title}}</h6>
      <div class="thumb">
        <a  :href="ads.url || ads.src" target="_blank">
          <img :src="ads.src" :alt="ads.title">
        </a>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ads',
  props: ['notName']
}
</script>

<style scoped lang="stylus">
.ads 
  position fixed;
  z-index 99;
  top 90px;
  right 20px;
  width 100px;


@media (max-width: 1270px)
  .ads 
    display none;

.item 
  text-align center;


img 
  max-width 80px;


h6 
  margin .4rem;

</style>
