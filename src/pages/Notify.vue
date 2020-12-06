<template>
<div>
  <Navbar />
  <div class="content">
    <h1>Thông báo</h1>
    <a-button type="primary">Hộp thư đi</a-button>
    <a-button>Hộp thư đến</a-button>
    <div class="body">
      <div class="report">
          List report
          <a-empty />
      </div>
      <div class="new-report">New Report</div>
    </div>
  </div>
  </div>
</template>
<script>
import Navbar from '@/components/common/Navbar'

export default {
  components: {
    Navbar
  },
  mounted(){
    this.$notification.open({
        message: 'Notification Title',
        description:
          'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
        icon: <a-icon type="smile" style="color: #108ee9" />,
      });
  }
}
</script>
<style lang="scss" scoped>
.content{
  width: 80%;
  margin: auto;
  margin-top: 50px;
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
