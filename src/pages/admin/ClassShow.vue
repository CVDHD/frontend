<template>
    <div>
        <Navbar />
        <div class="body">
            <h1 class ='title'>KẾT QUẢ ĐĂNG KÝ HỌC CỦA SINH VIÊN LỚP -  {{class_id}}</h1>
            <TableByClass
                :dataList="listStudentOfClass"
            />
            <div class="form" v-if="isAdd">
                 <a-input placeholder="Mã sinh viên" v-model="student_id"/>
                 <a-button type="primary" @click="addStudentToClass">
                        Submit
                 </a-button>
             </div>
             <a-icon :type="!isAdd ? 'plus-circle': 'close-circle'" :class="isAdd ? 'deleteIcon' : 'addIcon'" @click="showAdd"/>
            <button class="getFile" @click="getFilePdf(class_id)">Save</button>
        </div>
    </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
import TableByClass from '@/components/common/TableByClass'
import Navbar from '@/components/common/Navbar'
    export default {
        data(){
            return {
                currentOption: "all",
                option: [],
                class_id: '',
                isAdd: false,
                student_id:''
            }
        },
        components: {
            Navbar,
           TableByClass
        },
        computed: {
            ...mapGetters({
                listStudentOfClass: 'adminModule/getStudentOfClass',
        }),
        },
        methods: {
            ...mapActions({
                getClass: 'adminModule/getAllStudentByClass',
                getFilePdf: 'adminModule/getFilePdf',
                addStudent: 'adminModule/addStudentToClass'
            }),
            showAdd(){
                this.isAdd = !this.isAdd
            },
            async addStudentToClass(){
                await this.addStudent({
                    class_id: this.$route.params.class_id,
                    student_id: this.student_id,
                    subject_id: this.$route.params.class_id.slice(0,-2)
                })
            }
        },
        async mounted(){
            await this.getClass(this.$route.params.class_id)
            this.class_id = this.$route.params.class_id
        }
    }
</script>

<style lang="scss" scoped>
    .body{
        padding-top: 50px;
        width: 90%;
        margin: auto;
        .form{
            input{
                width: 200px;
                margin-right: 20px;
            }
        }
        .title{
            color: white;
            font-weight: bold;
            text-align: center;
            margin-bottom: 50px;
        }
        .addIcon{
                font-size: 4em;
                color: aqua;
                cursor: pointer;
                margin: auto;
                display: block;
            }
        .deleteIcon{
                font-size: 4em;
                color: rgb(255, 51, 0);
                cursor: pointer;
                margin: auto;
                display: block;
            }
        .getFile{
            padding: 5px;
            color:wheat;
            width: 100px;
            font-size: 1.5em;
            font-weight: bold;
            background-color: rgb(68, 223, 37);
            border: none;
            cursor: pointer;
            &:hover{
                background-color: greenyellow;
            }
            &:focus{
                outline: none;
            }
            float: right;
            margin-right: 50px;
        }
    }
</style>