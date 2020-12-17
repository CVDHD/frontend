<template>
<div>
  <Navbar />
  <div class="content">
    <h1>Thông báo</h1>
    <a-button type="primary">Hộp thư đi</a-button>
    <a-button>Hộp thư đến</a-button>
    <a-button class="new-report" type="primary" @click="showDrawer('Thông báo mới')">Tạo thông báo</a-button>
    <div class="body">
      <div class="report">
          <ListReport 
            :showForm="showDrawer"
            :infoNotify="setInfoNotify"
          />
          <a-empty
            :image-style="{
              height: '800px',
              width: '800px'
            }"
           />
      </div>
      <div class="new-report" ></div>
    </div>
  </div>

  <a-drawer
      :title="header"
      :width="720"
      :visible="visible"
      :body-style="{ paddingBottom: '80px' }"
      @close="onClose"
    >
      <a-form layout="vertical" hide-required-mark>
        <a-input placeholder="Tiêu đề" v-model="title"/><br><br><br>
        <a-textarea placeholder="Nội dung" :rows="20" v-model="content"/>
      </a-form>
      <div
        :style="{
          position: 'absolute',
          right: 0,
          bottom: 0,
          width: '100%',
          borderTop: '1px solid #e9e9e9',
          padding: '10px 16px',
          background: '#fff',
          textAlign: 'right',
          zIndex: 1,
        }"
      >
        <a-button :style="{ marginRight: '8px' }" @click="onClose">
          Cancel
        </a-button>
        <a-button type="primary" @click="submitNotify">
          Submit
        </a-button>
      </div>
    </a-drawer>
  </div>
</template>
<script>
import Navbar from '@/components/common/Navbar'
import ListReport from '@/components/common/ListReport'
import {mapActions} from 'vuex'
export default {
  data(){
    return {
      visible: false,
      childrenDrawer: false,
      title: '',
      content: '',
      id:'',
      header: ''
    }
  },
  components: {
    Navbar,
    ListReport
  },
  methods:{
    showDrawer(data) {
      this.visible = true;
      this.header=data
    },
    onClose() {
      this.visible = false;
    },
    ...mapActions({
      createNotify: 'userModule/createNotify',
      getListNotify: 'userModule/getListNotify',
      editNotify: 'userModule/editNotify'
    }),
    async submitNotify(){
      if(this.header == "Chỉnh sửa thông báo"){
        this.title && this.content ? 
        this.editNotify({
          id: this.id,
          title: this.title,
          content: this.content,
          updated_at: new Date()
        }) : this.$notification.open({
                    type: 'warn',
                    message: 'Validate data ',
                    style:"width: 500px, backgroundColor: red",
                    description:"Chưa đầy đủ thông tin",
                    icon: <a-icon type="close-circle" style="color: red" />,
                });
      }
      else
      try {
        await this.createNotify({
          user_id: localStorage.getItem('user_id'),
          title: this.title,
          content: this.content,
          time: new Date()
        })
        this.onClose()
      } catch (error) {
        console.log(error)
      }
        
    },
    setInfoNotify(title, content, id){
      this.title = title
      this.content = content
      this.id = id
    }

  },
  async mounted(){
    await this.getListNotify()
  },
  

}
</script>
<style lang="scss" scoped>
.content{
  width: 70%;
  margin: auto;
  margin-top: 50px;
  .submit-close{
    position: absolute;
    bottom: 0;

  }
  .new-report{
    float: right;
  }
  button{
    margin-right: 20px;
    font-weight: bold;
  }
  h1{
    color: white;
    font-size: 3em;
    font-weight: bold;
  }
  .body{
    display: flex;
    .report{
      margin-top: 50px;
      width: 70%;
      min-height: 200px;
      // background-color: red;
    }
    .new-report{
      width: 30%
    }
  }
}
</style>
