<template>
  <table>
    <thead>
      <th>Mã môn học</th>
      <th class="text-left">Tên môn học</th>
      <th>Phòng</th>
      <th>Số lượng</th>
      <th>Thứ</th>
      <th>Thời gian</th>
    </thead>
    <tbody>
      <tr 
      v-for="(data, index) in dataList" 
      :key="index" :title="data.subject_name"
      >
        <td >{{data.class_id}}</td>
        <td class="text-left">{{data.subject_name}}</td>
        <td>{{data.room}}</td>
        <td>{{data.max_student}}</td>
        <td>{{data.day}}</td>
        <td>{{`${data.start_class} - ${data.end_class}`}}</td>
      </tr>
    </tbody>
  </table>
</template>
<script>
export default {
  props:{
    dataList:{//dan sach dang ky hoc
      type: Array,
      required: true
    },
  },
  methods:{
  },
  computed:{
  
  }
}
</script>
<style scoped lang="scss">
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
