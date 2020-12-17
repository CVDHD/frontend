<template>
    <div>
        <Navbar />
        <div id="register">
            <button @click="changeTable">{{table ? "Danh sách đăng ký học hiện tại" : "Đăng ký học"}}</button>
            <div v-if="table">
                <h1 class = "title-1">Danh sách môn học đăng ký</h1>
                <div class="table">
                    
                    <TableRegister 
                        :dataListRegister="listRegister" 
                        :eventSelect="addResultRegister" 
                        :eventSelectLocal="addResultRegisterLocal" 
                        :dataList="listResultRegister"

                    />
                    <div class="pagination">
                     <a-pagination :default-current="1" :total="totalRow" @change="onChange" />
                </div>
            </div>
            </div>
            <div v-else>
                <h1 class = "title-2">Kết qủa đăng ký học hiện tại</h1>
                <div class="table1">
                    <TableResult 
                        :dataList="listResultRegister" 
                        :eventSelect="deleteSubject" 
                        :getResult="getResultRegister"
                        :eventSelectLocal="addResultRegisterLocal"

                    />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapActions, mapGetters} from 'vuex'
    import TableRegister from '@/components/common/TableRegister'
    import TableResult from '@/components/common/TableResult'
    import Navbar from '@/components/common/Navbar'
    export default {
        name: "Register",
        data(){
            return {
                currentPage: 1,
                loadAddSubject: false,
                table: true
            }
        },
        computed: {
            ...mapGetters({
                listResultRegister: 'userModule/getResultRegister',
                listRegister: 'userModule/getListRegister',
                totalRow: 'commonModule/getTotalRow'
                
        })

        },
        methods: {
            ...mapActions({
                getResultRegister: 'userModule/getResultRegister',
                addResultRegister: 'userModule/addResultRegister',
                addResultRegisterLocal: 'userModule/addResultRegisterLocal',
                deleteSubject: 'userModule/deleteSubject',
                getListPageRegister: 'userModule/getListPageRegister',
            }),
            async onChange(current) {
                this.currentPage = current
                this.getListPageRegister(this.currentPage)
            },
            async changeTable(){
                this.table = !this.table
                if(this.table) this.getListPageRegister(this.currentPage)
            }
        },
        components: {
            TableRegister,
            Navbar,
            TableResult,
        },
        async mounted() {
          await this.getListPageRegister(this.currentPage)
          await this.getResultRegister()
        },
    }
</script>

<style lang="scss" scoped>
    #register{
        min-height: 63vh;
        width: 90%;
        margin: auto;
        button{
            float: right;
            padding: 10px;
            background-color: rgb(40, 154, 248);
            color: wheat;
            font-size: 1.2em;
            font-weight: bold;
            border: 1px solid yellow;
            border-radius: 30px;
            cursor: pointer;
            &:focus{
                outline: none;
            }
        }
        .title-1, .title-2{
            font-weight: bold;
            color: aliceblue;
            margin: 40px 80px 40px 80px;
        }
        .title2{
            text-align: left;
        }
        .table{
            margin-bottom: 3em;
            position: relative;
            min-height: 500px;
            .pagination{
                margin-top: 20px;
                margin-left: 35%;
            }
        }
        .table1{
            min-height: 500px;
            margin-bottom: 0em;
            position: relative;
        }
    }
</style>