<template>
    <div>
        <div id="body">
            <p>{{getTime()}}</p>
        <div class="text">
           <div class="container">
               <div class="time">
                   <span>Hiện tại đang trong kỳ đăng ký học</span><br />
                   <span class="timec">{{timeRegister.register_start}} - {{timeRegister.register_end}}</span>
                   <div v-if="getRole">
                   <a-button v-if="!editTime" type="danger" @click="changeEditTime">Edit</a-button>
                   <a-button v-if="editTime" type="primary" @click="submitTime">Save</a-button>
                   <a-button type="danger" v-if="editTime" @click="changeEditTime" class="close">Cancel</a-button><br />
                   <a-range-picker v-if="editTime"
                        :show-time="{ format: 'HH:mm' }"
                        format="YYYY-MM-DD HH:mm"
                        :placeholder="['Start Time', 'End Time']"
                        @change="onChange"
                    />
                   </div>
               </div>
               <h1 class="title">E-Learning</h1>
               <div class="slogan">
                   <h3>Giải pháp cho học tập trực tuyến.Hãy cùng chúng tôi đưa E-learning ngày càng phổ biến và rộng rãi hơn</h3>
               </div>
               <div class="button">
                   <button><router-link to ='/login' >Đăng nhập</router-link></button>
                   <button><router-link to ='/login' >Đăng ký</router-link></button>
               </div>
               
               <div class="link">
                   <img src="@/assets/link.png" alt="">
               </div>
           </div>
           
        </div>
        <div class="banner">
            <a-carousel autoplay effect="fade" :dots="false">
                <img src="@/assets/el.png" alt="banner">
                <img src="@/assets/el2.png" alt="banner1">
                <img src="@/assets/el3.png" alt="banner3">
            </a-carousel>
        </div>
    </div>
    </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'
// import moment from 'moment'
    export default {
        data(){
            return {
                editTime: false,
                startDate: '',
                endDate: ''
            }
        },
        methods:{
            onChange(value, dateString) {
            this.startDate = dateString[0]
            this.endDate=dateString[1]
            },
            changeEditTime(){
                this.editTime = !this.editTime
            },
            ...mapActions({
                getTimeRegister: 'adminModule/getTimeRegister',
                setTimeRegister: 'adminModule/setTimeRegister'
            }),
           async submitTime(){
                await this.setTimeRegister({
                    start_time: this.startDate,
                    end_time: this.endDate
                })
                this.editTime = !this.editTime
            },
            remainTime(){
                // let subDate = moment(this.timeRegister.register_end, "YYYY/MM/DD HH:mm").diff(moment(this.timeRegister.register_start,  "YYYY/MM/DD HH:mm"))
                
            },
            getTime(){
                setInterval(()=>{
                    return new Date()
                },1000)
            }
        },
        computed:{
            ...mapGetters({
                    timeRegister: 'commonModule/getTimeRegister'
                }),
                getRole: function(){
                    return localStorage.getItem('role') == 'admin'
                }
        },
        async mounted(){
           await this.getTimeRegister()
            this.remainTime()
        }
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
                .time{
                    text-align: center;
                    font-weight: bold; 
                    span{
                        color: white;
                        font-size: 2em;
                    }
                    .timec{
                        color: yellow;
                        margin-right: 1em;
                    }
                    .close{
                        margin-left: 1em;
                    }
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