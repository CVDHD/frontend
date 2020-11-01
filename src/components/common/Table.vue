<template>
  <a-table :row-selection="rowSelection" :columns="columns" :data-source="dataList">
    <!-- <a slot="name" slot-scope="text" align='center'>{{ text }}</a> -->
  </a-table>
</template>
<script>
const columns = [
  {
    title: 'Mã môn học',
    dataIndex: 'class_id',
  },
  {
    title: 'Tên môn học',
    dataIndex: 'subject_name',
  },
  {
    title: 'Phòng',
    dataIndex: 'room',
  },
  {
    title: 'Số lượng',
    dataIndex: 'max_student',
  },
  {
    title: 'Giảng viên',
    dataIndex: 'teacher_name',
  },
  {
    title: 'Thứ',
    dataIndex: 'day',
  },
  {
    title: 'Thời gian',
    dataIndex: 'time',
  },
];
export default {
  props: {
    dataList: {
      type: Array,
      required: true
    },
    eventSelect:{
      type: Function,
      required: true
    }
  },
  data() {
    return {
      columns
    }
  },
  computed: {
    rowSelection() {
      return {
        onChange: (selectedRowKeys, selectedRows) => {
          this.eventSelect(selectedRows)
        },
        getCheckboxProps: record => ({
          props: {
            disabled: record.name === 'Disabled User', 
            name: record.name,
          },
        }),
      };
    },
  },
};
</script>
<style lang="scss" scoped>
  td{
    color: white;
  }
</style>
