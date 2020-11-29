<template>
  <table>
    <thead>
        <th>No</th>
      <th>Mã môn học</th>
      <th class="text-left">Tên môn học</th>
      <th>Phòng</th>
      <th>Số lượng</th>
      <th>Số lượng thực</th>
      <th>Thứ</th>
      <th>Thời gian</th>
      <th>Giảng viên</th>
      <th>Action</th>
    </thead>
    <tbody>
      <tr 
      v-for="(data, index) in dataList" 
      :key="index" :title="data.subject_name"
      
      >
        <td>{{index +1}}</td>
        <td >{{data.class_id}}</td>
        <td class="text-left">{{data.subject_name}}</td>
        <td>{{data.room}}</td>
        <td>{{data.max_student}}</td>
        <td>24</td>
        <td>{{data.day}}</td>
        <td>{{`${data.start_class} - ${data.end_class}`}}</td>
        <td>Nguyen Van A</td>
        <td class="action">
            <a-icon type="eye" />
            <a-icon type="printer" />
        </td>
      </tr>
    </tbody>
  </table>
</template>
<script>
export default {
  data(){
    return {
      columEdit: null
    }
  },
  props:{
    dataList:{//dan sach dang ky hoc
      type: Array,
      required: true
    },
    eventSelect:{//submit to server
      type: Function,
      required: true
    },
    eventSelectLocal:{ //add to local
      type: Function,
      required: true
    }
  },
  methods:{
    async submit(class_id){
       await this.eventSelect({class_id})
    },
    changeEdit(id){
      this.columEdit = id
    }
  },
  computed:{
  
  },
}
</script>
<style scoped lang="scss">
  .text-left{
    text-align: left;
  }
  .action{
      display: flex;
      align-items: center;
      justify-content: space-around;
      padding-top: 10px;
      font-size: 30px;
      i{
          cursor: pointer;
          color: yellow;
      }
  }
  table{
    text-align: center;
    width: 90%;
    margin: auto;
    thead{
      background-color: aliceblue;
      th{
        padding: 10px 20px;
      }
    }
    tbody{
      color: antiquewhite;
      font-size: 1.2em;
      tr{
        // cursor: pointer;
        border-bottom: 1px solid #ffff;
        height: 50px;
        &:hover{
          background-color: rgb(24, 124, 218);
        }
      }
    }
  }
</style>
