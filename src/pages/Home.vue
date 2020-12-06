<template>
<div>
  <Navbar />
  <div class="home">
    <Body />
    <notifications group="foo" />
  </div>
  </div>
</template>
<script>
import Body from '@/components/common/Body'
import Navbar from '@/components/common/Navbar'

export default {
  
  name: 'Home',
  components: {
    Body,
    Navbar
  },
  mounted(){
    this.$notify({
  group: 'foo',
  title: 'Xin chào Bạn',
  text: 'Chào mừng bạn đến hệ thống của chúng tôi!'
});
  }
}
</script>
