<template>
<div>
  <Navbar />
  <div class="home">
    <Body />
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
  }
}
</script>
