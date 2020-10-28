<template>
    <div id="header">
        <div>
            <img src="@/assets/logo4.png" alt="">
        </div>
        <div>
            <h1>He thong dang ky hoc truc tuyen</h1>
        </div>
        <div>
           <router-link to ='/thong-tin-ca-nhan'>Le ngoc Ha</router-link>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Header"
    }
</script>

<style lang="scss" scoped>
    #header{
        display: flex;
        height: 200px;
        align-items: center;
        justify-content: space-between;
        text-align: center;
        & div{
            flex-grow: 1;
            img {
            width: 300px;
            margin: 20px;
            margin-top: 50px;
            border-radius: 100px;
        }
        }
    }
</style>