<template>
  <table>
    <thead>
      <th>Action</th>
      <th>Mã môn học</th>
      <th class="text-left">Tên môn học</th>
      <th>Phòng</th>
      <th>Số lượng</th>
      <th>Hiện tại</th>
      <th>Giảng viên</th>
      <th>Thứ</th>
      <th>Thời gian</th>
    </thead>
    <tbody>
      <tr 
      v-for="(data, index) in dataListRegister" 
      :key="index" :title="isChecked1(data.class_id) ? 'Môn học đã đăng ký' : data.subject_name"
      :class="isChecked1(data.class_id) ? 'bg-yellow' : ''"
      
      >
        <td @click="submit(data)"><a-checkbox :checked="isChecked(data.class_id)" :disabled="isChecked(data.class_id)"/></td>
        <td >{{data.class_id}}</td>
        <td class="text-left">{{data.subject_name}}</td>
        <td>{{data.room}}</td>
        <td>{{data.max_student}}</td>
        <td>{{data.CurentStudent}}</td>
        <td>{{data.teacher_name}}</td>
        <td>{{data.day}}</td>
        <td>{{`${data.start_class} - ${data.end_class}`}}</td>
      </tr>
    </tbody>
  </table>
</template>
<script>
export default {
  props:{
    dataListRegister:{//dan sach dang ky hoc
      type: Array,
      // required: true
    },
    dataList: {//ket qua dang ky hoc
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
    },
  },
  methods:{
    async submit(class_id){
       await this.eventSelect({class_id})
    },
    isChecked(class_id){
      return this.dataList.findIndex( data => data.class_id === class_id) >= 0
    },
    isChecked1(class_id){
      return this.dataList.findIndex( data => data.class_id.slice(0, -2) === class_id.slice(0,-2)) >= 0
    }
  },
  computed:{
  
  }
}
</script>
<style scoped lang="scss">
  .bg-yellow{
    background-color: #c1c159;
  }
  .text-left{
    text-align: left;
  }
  table{
    text-align: center;
    width: 100%;
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
        cursor: pointer;
        border-bottom: 1px solid #ffff;
        height: 50px;
        &:hover{
          background-color: rgb(24, 124, 218);
        }
      }
    }
  }
</style>
