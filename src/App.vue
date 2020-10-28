<template>
  <div id='container'>
      <Header />
      <Navbar />
      <router-view/>
     <Footer />
  </div>
</template>
<script>
import Navbar from './components/common/Navbar'
import Header from './components/common/Header'
import Footer from './components/common/Footer'
export default {
  name: 'App',
  components:{
    Navbar,
    Header,
    Footer
  },
  data () {
    return {

    }
  }
}
</script>
<style scoped>
 #container{
   width: 100%;
   margin: auto;
   background-color: #21D4FD;
   background-image:url("./assets/bg.jpg")

 }
</style>
