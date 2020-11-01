<template>
    <div>
         <Header />
        <Navbar />
    <div id="result-register">
        Ket qua dang ky hoc
    </div>
    </div>
</template>

<script>
import Header from '@/components/common/Header'
    import Navbar from '@/components/common/Navbar'
    export default {
        components: {
            Header,
            Navbar
        }
    }
</script>

<style lang="scss" scoped>
    #result-register{
        min-height: 63vh;
    }
</style>