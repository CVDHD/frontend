<template>
    <div id="login">
        <div class="form">
            <div class="img">
                <img src="@/assets/person.jpg" alt="">
            </div>
            <div class="login-forget">
                <div v-if="status" class="login">
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
                        Login
                    </a-button>

                </div>
                <div v-else class="forget-passwd">
                    <h1>Forget Password</h1>
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
                status: true,
                username: '',
                passwd: ''
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
                    username: this.username, 
                    passwd: this.passwd
                    })
            }
        },
    }
</script>

<style lang="scss" scoped>
    #login{
        display: flex;
        width: 100%;
        height: 100vh;
        justify-content: center;
        align-items: center;
       .form{
           display: flex;
           width: 80%;
           max-width: 1000px;
           height: 500px;
           background-color: #ecf0f5;
           border-radius: 1%;
           overflow: hidden;
           .img{
               display: flex;
               justify-content: center;
               align-items: center;
               width: 50%;
               img{
                   width: 100%;
                   height: 100%;
               }

           }
           .login-forget{
               display: flex;
               justify-content: center;
               align-items: center;
               width: 50%;
            //    border-left: 1px solid yellow;
               .login{
                   width: 80%;
                  input{
                       margin-bottom: 30px;
                   }
                   h1{
                       color: rgb(30, 138, 233);
                       text-align: center;
                       margin-bottom: 3em;
                   }
                   button{
                       margin-top: 2em;
                       width: 100%;
                       height: 50px;
                   }
               }
           }

       }
    }
</style>