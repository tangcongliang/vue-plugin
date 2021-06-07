<template>
  <div class="wraper">
    <div class="container">
      <crousel
      :autoplay="false"
      :duration='3000'
      :initial='0'
      :hasDot='true'
      :hasDirector='true'
      >
        <car-item v-for="(item,index) in CarData" :key='index'>
          <img :src="require(`./assets/img/${item.img_name}`)" alt="">
        </car-item>
         </crousel>
    </div>
  </div>
</template>
<script>
// import CarData from './data/carosel.js'
import CarData from './data/carousel.js'
export default {
  setup(){
    return{CarData}
  }
};
</script>
<style lang="less" scoped>
.container{
  width:520px ;
  height: 280px;
  margin:  150px;
  margin: 0 auto;
  img{
    display: block;
    width: 100%;
    height: 100%;
  }
}
</style>