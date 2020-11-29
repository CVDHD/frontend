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
                    <a-icon type="plus-circle" class="addIcon"/>
                </div>
              
                <div class="pagination">
                     <a-pagination :default-current="1" :total="200" @change="onChange" />
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
    export default {
        data(){
            return {
                isLoading: true,
                currentPage: 1,
                loadAddSubject: false
            }
        },
        components: {
            TableRegisterAdmin,
            Navbar,
            FileUpload
        },
        computed: {
            ...mapGetters({
                listResultRegister: 'userModule/getResultRegister',
                listRegister: 'userModule/getListRegister',
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
        },
        async created() {
            await this.getListPageRegister(this.currentPage)
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
            .addIcon{
                font-size: 4em;
                color: aqua;
                cursor: pointer;
            }
        }
    }
</style>