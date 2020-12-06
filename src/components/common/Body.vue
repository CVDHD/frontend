<template>
    <div id="body">
        <div class="text">
           <div class="container">
               <h1 class="title">E-Learning</h1>
               <div class="slogan">
                   <h3>Giải pháp cho học tập trực tuyến.Hãy cùng chúng tôi đưa E-learning ngày càng phổ biến và rộng rãi hơn</h3>
               </div>
               <div class="button">
                   <button><router-link to ='/login' >Đăng nhập</router-link></button>
                   <!-- <button>Đăng ký</button> -->
               </div>
               <div class="link">
                   <img src="@/assets/link.png" alt="">
               </div>
           </div>
           
        </div>
        <div class="banner">
            <a-carousel autoplay effect="fade" dots="false">
                <img src="@/assets/el.png" alt="banner">
                <img src="@/assets/el2.png" alt="banner1">
                <img src="@/assets/el3.png" alt="banner3">
            </a-carousel>
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
        .text {
            width: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
            .container{
                width: 100%;
                .title{
                    color: aliceblue;
                    text-align: center;
                    font-size: 5em;
                    font-weight: bold;
                }
                .button {
                    margin-top: 20px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    button {
                        width: 200px;
                        padding: 10px 14px;
                        border: 1px solid rgb(212, 199, 12);
                        border-radius: 30px;
                        margin-right: 10px;
                        color: aliceblue;
                        font-size: 1.5em;
                        background-color: Transparent;
                        cursor: pointer;
                        font-weight: bold;
                        &:focus{
                            outline: none;
                        }
                        &:hover{
                            background-color: chartreuse;
                        }
                        a{
                            color: white;
                        }
                    }
                }
                .link {
                    margin-top: 30px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    img{
                        width: 400px;
                    }
                }
                .slogan{
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    font-size: 1.5em;
                    font-weight: bold;
                    h3{
                        padding: 0 230px 0;
                        text-align: center;
                        color: aliceblue;
                    }
                    
                }
            }
        }
        .banner{
            width: 50%;
            img{
                width: 100%;
            }
        }
        
    }
</style>