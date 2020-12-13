<template>
  <table>
    <thead>
      <th>No</th>
      <th>Mã môn học</th>
      <th class="text-left">Tên môn học</th>
      <th>Phòng</th>
      <th>Số lượng</th>
      <th>Số lượng hiện tại</th>
      <th>Giảng viên</th>
      <th>Thứ</th>
      <th>Thời gian</th>
      <th>Action</th>
    </thead>
    <tbody>
      <tr 
      v-for="(data, index) in dataListRegister" 
      :key="index" :title="data.subject_name"
      
      >
        <td>{{index +1}}</td>
        <td >{{data.class_id}}</td>

        <td class="text-left">{{data.subject_name}}</td>

        <td v-if="columEdit!==(index+1)">{{data.room}}</td>
        <td v-else><a-auto-complete
                            v-model="registerEdit.room"
                            :data-source="listRooms? listRooms : ''"
                            style="width: 100px"
                            placeholder="Phòng"
                      />
        </td>

        <td v-if="columEdit!==(index+1)">{{data.max_student}}</td>
        <td v-else><input v-model="registerEdit.max" type="number"></td>

        <td >{{data.CurentStudent}}</td>

        <td v-if="columEdit!==(index+1)">{{data.teacher_name}}</td>
        <td v-else><a-auto-complete
                            v-model="registerEdit.teacher"
                            :data-source="listTeachers? listTeachers : ''"
                            style="width: 100px"
                            placeholder="Phòng"
                   />
        </td>
        
        <td v-if="columEdit!==(index+1)">{{data.day}}</td>
        <td v-else><input type="number" v-model="registerEdit.day"></td>

        <td v-if="columEdit!==(index+1)">{{`${data.start_class} - ${data.end_class}`}}</td>
        <td v-else><input type="text" v-model="registerEdit.time"></td>
        <td class="action">
          <a-icon :type="columEdit !== (index+1) ? 'edit' : 'save'" @click="changeEdit(index+1)" />
          <a-icon type="delete" @click="deleteRegister(data.class_id)"/></td>
      </tr>
    </tbody>
  </table>
</template>
<script>
import {mapActions, mapGetters} from 'vuex'
export default {
   data(){
    return {
      columEdit: null,
      registerEdit:{
        room: '',
        max: '',
        teacher: '',
        day: '',
        time: ''
      },
      dataEdit: ''

    }
  },
  props:{
    dataListRegister:{//dan sach dang ky hoc
      type: Array,
      required: true
    },
    dataList: {//ket qua dang ky hoc
      type: Array,
      required: true
    },
    eventSelectLocal:{ //add to local
      type: Function,
      required: true
    }
  },
  methods:{
    ...mapActions({
  
          getlistTeachers: 'adminModule/getListTeachers',
          getlistRooms: 'adminModule/getListRooms',
          deleteRegister: 'adminModule/deleteRegister'
    }),

    async submit(class_id){
       await this.eventSelect({class_id})
    },

    isChecked(class_id){
      return this.dataList.findIndex( data => data.class_id === class_id) >= 0
    },

    changeEdit(id){
      this.columEdit = id
      this.dataEdit = this.dataListRegister[id-1]
      this.registerEdit.room = this.dataListRegister[id-1].room
      this.registerEdit.teacher = this.dataListRegister[id-1].teacher_name
      this.registerEdit.day= this.dataListRegister[id-1].day
      this.registerEdit.time= this.dataListRegister[id-1].time
      this.registerEdit.max = this.dataListRegister[id-1].max_student
    }
  },
  computed: {
      ...mapGetters({
          listTeachers: 'adminModule/getListTeachers',
          listRooms: 'adminModule/getListRooms'
    })

  },
  async mounted() {
    this.getlistRooms()
    this.getlistTeachers()
      
  }
}
</script>
<style scoped lang="scss">
  .text-left{
    text-align: left;
  }
  input{
    color: black;
    width: 100%;
    text-align: center;
    border: none;
    padding: 5px;
    border-radius: 5px;
    &:focus{
      outline: none;
    }
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
        
        border-bottom: 1px solid #ffff;
        height: 50px;
      }
    }
  }
</style>
