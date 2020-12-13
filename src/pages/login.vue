<template>
    <div>
        <img src="@/assets/logo.png" alt="">
        <h1 class="title">HỆ THỐNG ĐĂNG KÝ HỌC E-LEARNING</h1>
        <div id="login">
        <div class="form">
            <div class="img">
                <a-button type="danger" class="changeStatus" @click="changeStatus">
                        {{isLogin ? "Đăng ký" : "Đăng nhập"}}
                    </a-button>
                <img src="@/assets/login.jpg" alt="">
            </div>
            <div class="login-forget">
                <div v-if="isLogin" class="login">
                    <h1>Login</h1>
                    <p class="note" v-if="validate_name">Bạn chưa nhập tên người dùng</p>
                     <a-input 
                     size="large" 
                     placeholder="Username" 
                     v-model="username"
                     />
                     <p class="note" v-if="validate_pass">Bạn chưa nhập mật khẩu</p>
                     <a-input-password 
                     size="large"
                     placeholder="Password" 
                     v-model="passwd"/>
                     <a-button type="primary" @click="login">
                        Đăng nhập
                    </a-button>

                </div>
                <div v-else class="register">
                    <h1 >Dang ky</h1>
                    <p class="note" v-if="validate_name">Bạn chưa nhập tên người dùng</p>
                    <a-input 
                     size="large" 
                     placeholder="FullName" 
                     
                     />
                     <a-input 
                     size="large" 
                     placeholder="Email" 
                     
                     />
                     <div class="date-sex">
                         <a-date-picker  
                     placeholder="Date of birth"
                     size="large"/>
                     <a-select default-value="Nam" size="large" style="width: 150px" @change="handleChange">
                        <a-select-option value="Nam">
                            Nam
                        </a-select-option>
                        <a-select-option value="Nu">
                            Nữ
                        </a-select-option>
                    </a-select>
                     </div>
                     <a-input 
                     size="large" 
                     placeholder="Username" 
                     
                     />
                     <p class="note" v-if="validate_pass">Bạn chưa nhập mật khẩu</p>
                     <a-input-password 
                     size="large"
                     placeholder="Password" 
                     />
                     <a-button type="primary" @click="login">
                        Đăng Ký
                    </a-button>

                </div>
            </div>
        </div>
    </div>
    </div>
</template>

<script>
import {mapActions} from 'vuex'

    export default {
        data(){
            return {
                isLogin: true,
                username: '17020908',
                passwd: 'namduong'
            }
        },
        computed: {
            validate_name() {
                return !this.username ? true : false
            },
            validate_pass(){
                return !this.passwd ? true : false
            }
        },
        methods: {
            ...mapActions({
                getListPageRegister: 'userModule/login',
            }),
            login(){
                this.getListPageRegister({
                    id: this.username, 
                    password: this.passwd
                    })
            },
            changeStatus(){
                this.isLogin = !this.isLogin
            }
        },
    }
</script>

<style lang="scss" scoped>
    .title{
        text-align: center;
        color: #cce218;
        font-weight: bold;
        margin-bottom: 100px;
    }
    #login{
        display: flex;
        width: 100%;
        height: 40vh;
        justify-content: center;
        align-items: center;
       .form{
           display: flex;
           width: 80%;
           max-width: 1000px;
           height: 500px;
           background: linear-gradient(135deg, rgb(5, 104, 21) 58%, rgb(22, 13, 192) 70%, rgb(229, 255, 80) 97%);
           border-radius: 20px;
           overflow: hidden;
           .img{
               display: flex;
               justify-content: center;
               align-items: center;
               width: 50%;
               position: relative;
               .changeStatus{
                   position: absolute;
                   z-index: 100;
                   top:10px;
                   right: 10px;
               }
               img{
                   width: 100%;
                   height: 100%;
                   position: absolute;
               }

           }
           .login-forget{
               display: flex;
               justify-content: center;
               align-items: center;
               width: 50%;
            //    border-left: 1px solid yellow;
               .login{
                   width: 60%;
                  input{
                       margin-bottom: 30px;
                       padding: 20px;
                       border-radius: 10px;
                   }
                   h1{
                       color: rgb(230, 235, 240);
                       text-align: center;
                       margin-bottom: 2em;
                       font-weight: bold;
                   }
                   button{
                       margin-top: 2em;
                       width: 100%;
                       height: 50px;
                       font-weight: bold;
                       font-size: 1.5em;
                   }
               }
                .register{
                    .date-sex{
                        margin-bottom: 20px;
                        display: flex;
                        justify-content: space-around;
                    }
                   width: 80%;
                  input{
                       margin-bottom: 30px;
                       padding: 20px;
                       border-radius: 10px;
                   }
                   h1{
                       color: rgb(230, 235, 240);
                       text-align: center;
                       margin-bottom: 1.2em;
                       font-weight: bold;
                   }
                   button{
                       margin-top: 1.5em;
                       width: 100%;
                       height: 50px;
                       font-weight: bold;
                       font-size: 1.5em;
                   }
               }
           }

       }
    }
</style>