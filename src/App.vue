<template>
  <div>
    <header-main/>
    <shop-content/>
  </div>
</template>

<script>
import HeaderMain from '@/components/HeaderMain.vue'
import ShopContent from './components/ShopContent.vue'

export default {
  name: 'App',
  data () {
    return {
      showModal: false
    }
  },
  components: { HeaderMain, ShopContent}
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.container{
  max-width: 1200px;
  margin: auto;
}
</style>
