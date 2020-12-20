<template>
  <div id='container'>
      <loading 
        :active.sync="loadingCommon" 
        :is-full-page="fullPage"
        :opacity="0.2"
        color="white"
        loader="dots"
        backgroundColor="black"
        :width="200"
        :height="200"
      />
      <router-view/>
  </div>
</template>
<script>
import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/vue-loading.css'
import {mapGetters} from 'vuex'
export default {
  name: 'App',
  components:{
    Loading
  },
  data() {
      return {
          fullPage: true
      }
  },
  computed: {
      ...mapGetters({
          loadingCommon: 'commonModule/getLoading'
    })
  },
  mounted(){
    console.log('BASE URL IS', process.env)
  }
}
</script>
<style >

 #container{
   width: 100%;
   padding: 0;
   background-color: #21D4FD;
   background-image:url("./assets/bk.jpg");
   background-size: 100% 100%;
   min-height: 100vh;

 }
</style>
