<template>
<div>
  <Navbar />
  <div class="home">
    <Body />
  </div>
  </div>
</template>
<script>
import Body from '@/components/student/Home/Body'
import Navbar from '@/components/common/Navbar'
export default {
  components: {
    Body,
    Navbar
  }
}
</script>
