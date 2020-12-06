<template>
    <div>
        <Navbar />
        <div id="result-register">
            <h1 class ='title'>KẾT QUẢ ĐĂNG KÝ HỌC CỦA SINH VIÊN</h1>
            <div class="select">
                <a-select 
                    v-model="currentOption" 
                    style="width: 200px"
                >
                    <a-select-option value="all">
                        Tất cả
                    </a-select-option>
                    <a-select-option value="class">
                        Lớp môm học
                    </a-select-option>
                    <a-select-option value="teacher">
                       Giảng viên
                    </a-select-option>
                    <a-select-option value="major">
                        Khoa
                    </a-select-option>
                </a-select>
                <a-icon type="arrow-right" size="lagre"/>
                <a-select default-value="lucy" style="width: 200px" >
                    <a-select-option value="jack">
                        Môn học
                    </a-select-option>
                    <a-select-option value="lucy">
                        Lớp môm học
                    </a-select-option>
                    <a-select-option value="disabled">
                       Giảng viên
                    </a-select-option>
                    <a-select-option value="Yiminghe">
                        CK
                    </a-select-option>
                </a-select>
            </div>
            <TableResultAdmin 
                :dataList="listResultRegister" 
                :getResult="getResultRegister"
                :eventSelectLocal="getResultRegister"
            />
            <button class="printAll">Print all</button>
        </div>
    
    </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
import TableResultAdmin from '@/components/common/TableResultAdmin'
import Navbar from '@/components/common/Navbar'
    export default {
        data(){
            return {
                currentOption: "all",
                option: [],
            }
        },
        components: {
            Navbar,
           TableResultAdmin
        },
        computed: {
            ...mapGetters({
                listResultRegister: 'userModule/getResultRegister',
        })

        },
        methods: {
            ...mapActions({
                getResultRegister: 'userModule/getResultRegister',
            }),
        },
       async created() {
            await this.getResultRegister()
        }
    }
</script>

<style lang="scss" scoped>
    #result-register{
        min-height: 63vh;
        .select{
            display: flex;
            align-items: center;
            justify-content: flex-end;
            margin-right: 8%;
            margin-bottom: 100px;
        }
        .printAll{
            margin-top: 50px;
            float: right;
            width: 150px;
            margin-right: 100px;
            color: wheat;
            background-color: #1890ff;
            padding: 10px;
            font-size: 1.5em;
            border: 1px solid yellow;
            border-radius: 20px;
            font-weight: bold;
            cursor: pointer;
        }
        h1 {
            margin-top: 50px;
            text-align: center;
            font-weight: bold;
            margin-bottom: 20px;
            color: aliceblue;
        }
    }
</style>