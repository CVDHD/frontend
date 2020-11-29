<template>
    <div>
    <div class="flex-container">
        <div>
            <img src="@/assets/logo.png" alt="">
        </div>
        <div class="menu">
            <router-link to ='/' >E-learning</router-link>
            <router-link to ='/dang-ky-hoc' >Đăng ký học</router-link>
            <router-link to ='/ket-qua-dang-ky-hoc' >Kết quả đăng ký học</router-link>
            <router-link to ='/thong-bao' >Thông báo</router-link>
            <a-dropdown v-model="visible">
                <a class="ant-dropdown-link" @click="e => e.preventDefault()">
                <img src="@/assets/person.png" class="person" />
                </a>
                <a-menu slot="overlay" @click="handleMenuClick">
                <a-menu-item @click="logout" key="1">
                    Đăng xuất
                </a-menu-item>
                <a-menu-item key="2">
                    Đổi mật khẩu
                </a-menu-item>
                <a-menu-item key="3">
                    Thông tin cá nhân
                </a-menu-item>
                </a-menu>
            </a-dropdown>
        </div>
    </div>
    </div>
</template>

<script>
import router from '../../router'
import Token from '../../services/cookie_local_storage/Token'
    export default {
        name: 'NavBar',
        data () {
            return {
                showSearch: false,
                 visible: false,
            }
        },
        components:{
        },
        methods:  {
            search(){
                this.showSearch = !this.showSearch
            },
            handleMenuClick(e) {
                if (e.key === '3') {
                    this.visible = false;
                }
            },
            logout(){
                 Token.clearToken()
                router.push('/login')

            }
        }
    }
</script>

<style lang="scss" scoped>
    .flex-container {
        padding-top: 50px;
        padding-bottom: 50px;
        display: flex;
        font-family: Simplifica;
        text-align: center;
        align-items: center;
        justify-content: space-around;
        height: 50px;
        width: 100%;
        position: sticky;
        .menu{
            margin-left: 30%;
        }
        & a {
            color: #ffff;
            margin: 10px;
            padding: 10px 25px;
            font-size: 20px;
            max-width: 500px;
            font-weight: bold;
            text-decoration: none;
            &.router-link-exact-active{
                 color: #f0ec22;
                 border: 1px solid #f0ec22;
                 border-radius: 20px ;
            }
            &:hover{
                color: #f0ec22;
            }
        }
    }
    .person{
        width: 80px;
    }
    .fade-enter-active, .fade-leave-active {
        transition: width 5s;
    }
    .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
        width: 200px;
    }

</style>