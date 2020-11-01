<template>
    <div>
        <Header />
        <Navbar />
        <div id="register">
            <h1 class = "title-1">Danh sách môn học đăng ký</h1>
            <div class="table">
                <Table :dataList="listRegister" :eventSelect="addResultRegisterLocal"/>
            </div>
            <h1 class = "title-2">Kết qủa đăng ký học hiện tại</h1>
            <div class="table1">
                <Table :dataList="listResultRegister" :eventSelect="addResultRegisterLocal"/>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapActions, mapGetters} from 'vuex'
    import Table from '@/components/common/Table'
    import Header from '@/components/common/Header'
    import Navbar from '@/components/common/Navbar'
    export default {
        name: "Register",
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
            })
        },
        components: {
            Table,
            Header,
            Navbar
        },
        created() {
            this.getListPageRegister(5)
        },
        mounted() {
            console.log(`listRegister is`, this.listRegister)
        },

        
    }
</script>

<style lang="scss" scoped>
    #register{
        min-height: 63vh;
        width: 90%;
        margin: auto;
        .title-1, .title-2{
            font-weight: bold;
            color: aliceblue;
            margin: 80px 80px;
        }
        .title-1{
            text-align: center;
        }
        .title2{
            text-align: left;
        }
        .table{
            margin-bottom: 3em;
        }
        .table1{
            margin-bottom: 0em;
        }
    }
</style>