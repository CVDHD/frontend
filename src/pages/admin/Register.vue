<template>
    <div>
        <!-- <Header /> -->
        <Navbar />
        <div id="register">
            <div class="content">
                <h1 class = "title-1">Danh sách môn học đăng ký</h1>
                <a-select default-value="lucy" style="width: 120px" >
                    <a-select-option value="jack">
                        Tất cả
                    </a-select-option>
                    <a-select-option value="lucy">
                        CNTT
                    </a-select-option>
                    <a-select-option value="disabled">
                       DTVT
                    </a-select-option>
                    <a-select-option value="Yiminghe">
                        CK
                    </a-select-option>
                </a-select>
                 <FileUpload />
            </div>
            <div class="table">
                <TableRegisterAdmin 
                    :dataListRegister="listRegister" 
                    :eventSelect="addResultRegister" 
                    :eventSelectLocal="addResultRegisterLocal" 
                    :dataList="listResultRegister"
                />
                <br>
                <div class="add">
                    <div class="form" v-if="isAddRegister">
                        <a-auto-complete
                            v-model="subjectAdd.name"
                            :data-source="dataSubject ? dataSubject : ''"
                            style="width: 500px"
                            placeholder="Tên môn học"
                            @select="onSelect"
                            @change="onChangeAc"
                        />
                         <a-input v-model="subjectAdd.code" placeholder="Lớp số" style="width: 100px" type="number"/>
                         <a-auto-complete
                            v-model="subjectAdd.room"
                            :data-source="listRooms? listRooms : ''"
                            style="width: 100px"
                            placeholder="Phòng"
                        />
                        <a-input v-model="subjectAdd.count" placeholder="Số lượng" style="width: 100px" type="number"/>

                        <a-auto-complete
                            v-model="subjectAdd.teacher"
                            :data-source="dataTeacher? dataTeacher : ''"
                            style="width: 200px"
                            placeholder="Giảng viên"
                            @select="onSelect"
                            @change="onChangeAc"
                        />
                        <a-input v-model="subjectAdd.day" placeholder="Thứ" style="width: 100px" type="number"/>
                        <a-input v-model="subjectAdd.shift" placeholder="Tiết học" style="width: 100px" />
                        <a-button type="primary" @click="addNewRegister">Submit</a-button>
                    </div>
                    <a-icon type="plus-circle" class="addIcon" @click="showAdd"/>
                </div>
              
                <div class="pagination">
                     <a-pagination :default-current="1" :total="totalRow" @change="onChange" />
                </div>
                
            </div>
        </div>
    </div>
</template>

<script>
    import {mapActions, mapGetters} from 'vuex'
    import TableRegisterAdmin from '@/components/common/TableRegisterAdmin'
    import Navbar from '@/components/common/Navbar'
    import FileUpload from '@/components/common/FileUpload'
    // import { AutoComplete } from 'antd';
    export default {
        data(){
            return {
                isLoading: true,
                currentPage: 1,
                loadAddSubject: false,
                isAddRegister: false,
                subjectAdd: {
                    code : '',
                    name: '',
                    room: '',
                    count: '',
                    teacher: '',
                    day:'',
                    shift: ''
                }
            }
        },
        components: {
            TableRegisterAdmin,
            Navbar,
            FileUpload,
            // AutoComplete
        },
        computed: {
            ...mapGetters({
                listResultRegister: 'userModule/getResultRegister',
                listRegister: 'adminModule/getListRegisters',
                listTeachers: 'adminModule/getListTeachers',
                listSubjects: 'adminModule/getListSubjects',
                listRooms: 'adminModule/getListRooms',
                totalRow: 'commonModule/getTotalRow'
        }),
        dataSubject: function(){
            return this.listSubjects.map(subject => subject.subject_id + '-' + subject.subject_name)
        },
        dataTeacher: function(){
            return this.listTeachers.map(teacher => teacher.teacher_id + '-' + teacher.name)
        }



        },
        methods: {
            ...mapActions({
                getResultRegister: 'userModule/getResultRegister',
                addResultRegister: 'userModule/addResultRegister',
                addResultRegisterLocal: 'userModule/addResultRegisterLocal',
                deleteSubject: 'userModule/deleteSubject',
                getListPageRegister: 'adminModule/getListPageRegister',
                getlistTeachers: 'adminModule/getListTeachers',
                getlistSubjects: 'adminModule/getListSubjects',
                getlistRooms: 'adminModule/getListRooms',
                addRegister: 'adminModule/addRegister'
            }),
            async onChange(current) {
            this.currentPage = current
            this.getListPageRegister(this.currentPage)
            },
            showAdd(){
                this.isAddRegister = !this.isAddRegister
            },
            onSelect(value) {
                console.log('onSelect', value);
            },
            onChangeAc(value) {
                console.log('onChange', value);
            },
            checkData(){
                if(this.subjectAdd.code =='' || this.subjectAdd.name == ''|| this.subjectAdd.room == ''
                || this.subjectAdd.count == '' || this.subjectAdd.teacher == '' || this.subjectAdd.day == ''
                || this.subjectAdd.shift == '') return {error: true, mess: 'Vui lòng nhập đầy đủ thông tin'}
                if(this.subjectAdd.count <= 25 ) return {error: true, mess: 'Số lượng tối đa của lớp học là > 25'}
                if(this.subjectAdd.code < 1 ) return {error: true, mess: 'Sai mã lớp học học phần >=1'}
                if(this.subjectAdd.day < 2 || this.subjectAdd.day > 8) return {error: true, mess: 'Sai thứ học học phần 2-8'}
                const shift = this.subjectAdd.shift.split("-")
                if(shift.length != 2) return {error: true, mess: 'Sai ca của học phần'}
                if(Number.isInteger(shift[0]) && Number.isInteger(shift[1])) return {error: true, mess: 'Sai ca của học phần có dạng number1 - number2'}
                if(parseInt(shift[0]) <=0 || 
                parseInt(shift[1]) <= 0 || 
                parseInt(shift[0]) > parseInt(shift[1])) return {error: true, mess: 'Sai thứ tự ca của học phần'}
                else return {
                    error: false,
                    data :{
                        subject_id: this.subjectAdd.name.split('-')[0],
                        class_id: this.subjectAdd.name.split('-')[0] + ' ' + this.subjectAdd.code,
                        room: this.subjectAdd.room,
                        day: this.subjectAdd.day,
                        start_class: this.subjectAdd.shift.split('-')[0],
                        end_class: this.subjectAdd.shift.split('-')[0],
                        teacher_id: this.subjectAdd.teacher.split('-')[0],
                        max_student: this.subjectAdd.count
                    }
                }
            },
            setNullData(){
                this.subjectAdd.code = ''
                this.subjectAdd.name = ''
                this.subjectAdd.room = ''
                this.subjectAdd.teacher = ''
                this.subjectAdd.shift = ''
                this.subjectAdd.teacher = ''
                this.subjectAdd.count = ''
                this.subjectAdd.day = ''

            },
            async addNewRegister(){
                if(this.checkData().error) {
                    this.$notification.open({
                    type: 'warn',
                    message: 'Validate data ',
                    style:"width: 500px, backgroundColor: red",
                    description:this.checkData().mess,
                    icon: <a-icon type="close-circle" style="color: red" />,
                });
                }
                await this.addRegister(this.checkData().data)
                this.setNullData()
                
            }
        },
        async created() {
            await this.getListPageRegister(this.currentPage)
            this.getlistSubjects()
            this.getlistTeachers()
            this.getlistRooms()
        }

        
    }
</script>

<style lang="scss" scoped>
    #register{
        min-height: 63vh;
        width: 90%;
        margin: auto;
        .content{
            display: flex;
            align-items: center;
            justify-content: space-around;
        }
        .title-1, .title-2{
            font-weight: bold;
            color: aliceblue;
            margin: 80px 80px;
        }
        .title2{
            text-align: left;
        }
        .table{
            margin-bottom: 3em;
            .pagination{
                float: right;
            }
        }
        .table1{
            margin-bottom: 0em;
        }
        .add{
            text-align: center;
            .form{
                margin-top: 1em;
                margin-bottom: 1em;
                display: flex;
                justify-content: space-around;
            }
            .addIcon{
                font-size: 4em;
                color: aqua;
                cursor: pointer;
            }
        }
    }
</style>