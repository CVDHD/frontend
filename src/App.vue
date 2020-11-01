<template>
  <div id='container'>
      <router-view/>
  </div>
</template>
<script>
export default {
  name: 'App'
}
</script>
<style scoped>
 #container{
   width: 100%;
   padding: 0;
   background-color: #21D4FD;
   background-image:url("./assets/bk.jpg");
   background-size: 100% 100%;
   min-height: 100vh;

 }
</style>
