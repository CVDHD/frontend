<template>
    <div class="flex-container">
        <router-link to ='/' >E-learning</router-link>
        <router-link to ='/dang-ky-hoc' >Đăng ký học</router-link>
        <router-link to ='/ket-qua-dang-ky-hoc' >Kết quả đăng ký học</router-link>
        <div class="search">
           
                <input v-if="showSearch" type="search" class="form-control">
            
           <img @click="search" src="@/assets/search.png" alt="search" />
        </div>
    </div>
</template>

<script>
    export default {
        name: 'NavBar',
        data () {
            return {
                showSearch: false
            }
        },

        methods:  {
            search(){
                this.showSearch = !this.showSearch
            }
        }
    }
</script>

<style lang="scss" scoped>
    .flex-container {
        margin-top: 50px;
        display: flex;
        font-family: Simplifica;
        text-align: center;
        align-items: center;
        justify-content: space-around;
        height: 50px;
        background-color: red;
        & a {
            color: #ffff;
            margin: 10px;
            padding: 20px;
            font-size: 20px;
            flex-grow: 1;
            font-weight: bold;
            text-decoration: none;
            max-width: 250px;
            &.router-link-exact-active{
                 color: #f0ec22;
                 text-decoration: none;
            }
            &:hover{
                color: #f0ec22;
            }
        }
        & div.search {
             display: flex;
             margin: 10px;
             flex-grow: 4;
             margin-left: auto;  
             justify-content: flex-end;  
             height: 40px;        
            & input{
                width: 500px;
                transition: .5s;
                border: none;
                font-size: 20px;
                font-weight: bold;
                background-color: #40a9ff;
                padding-left: 20px;
                border-radius: 7px;
                border-bottom-left-radius: 7px;
                 &:focus {
                 outline: none;
                 border:2px solid #f0ec22;
             }
            }
            & img{
                width: 50px;
                cursor: pointer;
            }
        }
    }
    .fade-enter-active, .fade-leave-active {
        transition: width 5s;
    }
    .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
        width: 200px;
    }

</style>