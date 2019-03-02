<template>
  <div class="wechat">
    <div
      class="item"
      v-for="wx in $themeConfig.wxConfig">
      <h6 class="title" v-show="!notName">{{wx.title}}</h6>
      <div class="thumb">
        <img :src="wx.src" :alt="wx.title">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'wechat',
  props: ['notName']
}
</script>

<style scoped lang="stylus">
.wechat 
  position fixed;
  z-index 99;
  top 90px;
  right 20px;
  width 100px;


@media (max-width: 1270px)
  .wechat 
    display none;

.item 
  text-align center;


img 
  max-width 80px;


h6 
  margin .4rem;

</style>
