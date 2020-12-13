<template>
  <table>
    <thead>
      <th>No</th>
      <th>Mã sinh  viên</th>
      <th class="text-left">Tên sinh viên</th>
      <th>Ngày sinh</th>
      <th>Giới tính</th>
      <th>Email</th>
      <th>Action</th>
    </thead>
    <tbody>
      <tr 
      v-for="(data, index) in dataList" 
      :key="index" :title="data.subject_name"
      >
        <td>{{index +1}}</td>
        <td >{{data.student_id}}</td>
        <td class="text-left">{{data.student_name}}</td>
        <td>{{data.date_of_birth}}</td>
        <td>{{data.gender}}</td>
        <td>{{data.email}}</td>
        <td><a-icon 
          @click="removeStudent(data.student_id)"
          title="Delete"
          theme="filled" 
          type="delete" 
          :style="{ color: 'red', fontSize: '30px' , cursor: 'pointer'}"/>
        </td>
      </tr>
    </tbody>
  </table>
</template>
<script>
import {mapActions} from 'vuex'
export default {
  props:{
    dataList:{//dan sach dang ky hoc
      type: Array,
      required: true
    },
  },
  methods:{
     ...mapActions({
                removeStudentFromClass: 'adminModule/removeStudentFromClass',
                addStudentToClass: 'adminModule/addStudentToClass',

        }),
    async removeStudent(student_id){
      console.log(this.class)
       await this.removeStudentFromClass({
         class_id: this.$route.params.class_id,
         student_id,
         subject_id: this.$route.params.class_id.slice(0,-2)
       })
    }
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
    margin-bottom: 50px;
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
        border-bottom: 1px solid #ffff;
        height: 50px;
        &:hover{
          background-color: rgb(24, 218, 34);
        }
      }
    }
  }
</style>
