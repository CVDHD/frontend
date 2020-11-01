<template>
<div>
  <Header />
  <Navbar />
  <div class="home">
    <Body />
  </div>
  </div>
</template>
<script>
import Body from '@/components/student/Home/Body'
import Header from '@/components/common/Header'
import Navbar from '@/components/common/Navbar'
export default {
  name: 'Home',
  components: {
    Body,
    Header,
    Navbar
  }
}
</script>
