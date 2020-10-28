<template>
    <div id="body">
        <div id="banner">
            <img src="@/assets/banner.jpg" alt="">
        </div>
        <div id="alert">
           <img src="@/assets/banner.jpg" alt="">
           <img src="@/assets/banner.jpg" alt="">
           <img src="@/assets/banner.jpg" alt="">
           <img src="@/assets/banner.jpg" alt="">
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
    #body{
        margin-top: 50px;
        display: flex;
        #banner{
            width: 80%;
            img{
                width: 100%;
                border-radius: 10px;
                cursor: pointer;
            }
        }
        #alert{
            margin-left: 5%;
            display: flex;
            width: 30%;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            img{
                max-width: 100%;
                margin-bottom: 10px;
                cursor: pointer;
            }
        }
    }
</style>