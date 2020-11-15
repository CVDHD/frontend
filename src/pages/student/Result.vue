<template>
    <div>
        <Navbar />
        <div id="result-register">
            <h1 class ='title'>KẾT QUẢ ĐĂNG KÝ HỌC</h1>
            <TablePrintStudent 
                :dataList="listResultRegister" 
            />
            <a-button type="primary" icon="download" size="large" class="save">
                 Download
            </a-button>
        </div>
    
    </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
import TablePrintStudent from '@/components/common/TablePrintStudent'
import Navbar from '@/components/common/Navbar'
    export default {
        components: {
            Navbar,
           TablePrintStudent
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
            // await this.getListPageRegister(this.currentPage)
            await this.getResultRegister()
        }
    }

</script>

<style lang="scss" scoped>
    #result-register{
        min-height: 63vh;
        width: 90%;
        margin: auto;
        .save{
            margin-top: 20px;
            margin-left: 90%;
        }
        h1 {
            margin-top: 50px;
            text-align: center;
            font-weight: bold;
            margin-bottom: 50px;
            color: wheat;
        }
    }
</style>