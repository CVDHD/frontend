<template>
    <div>
        <Navbar />
        <div id="result-register">
            <h1 class ='title'>KẾT QUẢ ĐĂNG KÝ HỌC CỦA SINH VIÊN</h1>
            <button class="printAll" @click="getAllPdf">Print all</button>
            <TableResultAdmin 
                :dataList="listRegister" 
            />
            <div class="pagination">
                     <a-pagination :default-current="1" :total="totalRow" @change="onChange" />
                </div>
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
                currentPage: 1,
            }
        },
        components: {
            Navbar,
           TableResultAdmin
        },
        computed: {
            ...mapGetters({
                listRegister: 'adminModule/getListRegisters',
                totalRow: 'commonModule/getTotalRow'
        })

        },
        methods: {
            ...mapActions({
                getAllPdf: 'adminModule/getAllPdf',
                getListPageRegister: 'adminModule/getListPageRegister',
            }),
            async onChange(current) {
                this.currentPage = current
                this.getListPageRegister(this.currentPage)
            },
        },
       async created() {
            await this.getListPageRegister(1)
        }
    }
</script>

<style lang="scss" scoped>
    #result-register{
        min-height: 63vh;
        .pagination{
                float: right;
                margin-right: 100px;
                margin-top: 20px;
            }
        .select{
            display: flex;
            align-items: center;
            justify-content: flex-end;
            margin-right: 8%;
            margin-bottom: 100px;
        }
        .printAll{
            float: right;
            width: 150px;
            margin-right: 100px;
            margin-bottom: 20px;
            color: wheat;
            background-color: #1890ff;
            padding: 10px;
            font-size: 1.5em;
            border: 1px solid yellow;
            border-radius: 20px;
            font-weight: bold;
            cursor: pointer;
            &:focus{
                outline: none;
            }
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