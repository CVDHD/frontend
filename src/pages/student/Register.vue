<template>
    <div id="register">
        <h1 class = "title">Danh sách môn học đăng ký</h1>
        <div class="table">
            <Table />
        </div>
    </div>
</template>

<script>
    import {mapActions, mapGetters} from 'vuex'
    import Table from '@/components/common/Table'
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
                deleteSubject: 'userModule/deleteSubject',
                getListPageRegister: 'userModule/getListPageRegister',
            })
        },
        components: {
            Table
        },
        created() {
            this.getResultRegister()
        },
        mounted() {
            console.log(`listRegister is`, this.listRegister)
        },

        
    }
</script>

<style lang="scss" scoped>
    #register{
        margin-top: 50px;
        .title{
        text-align: center;
        font-weight: bold;
    }
    }
</style>